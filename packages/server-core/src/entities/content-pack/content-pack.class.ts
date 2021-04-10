import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import S3Provider from '../../media/storageprovider/s3.storage';
import { assembleScene, populateScene } from './content-pack-helper';
import config from "../../appconfig";
import axios from 'axios';

interface Data {}

interface ServiceOptions {}
const s3 = new S3Provider();
const packRegex = /content-pack\/([a-zA-Z0-9_-]+)\/manifest.json/;
const thumbnailRegex = /([a-zA-Z0-9_-]+).jpeg/;

const getManifestKey = (packName: string) => `content-pack/${packName}/manifest.json`;
const getWorldFileKey = (packName: string, uuid: string) => `content-pack/${packName}/world/${uuid}.world`;
const getWorldFileUrl = (packName: string, uuid: string) => `https://${config.aws.cloudfront.domain}/content-pack/${packName}/world/${uuid}.world`;
const getThumbnailKey = (packName: string, url: string) => {
  const uuidRegexExec = thumbnailRegex.exec(url);
  return `content-pack/${packName}/img/${uuidRegexExec[1]}.jpeg`;
};
const getThumbnailUrl = (packName: string, url: string) => {
  const uuidRegexExec = thumbnailRegex.exec(url);
  return `https://${config.aws.cloudfront.domain}/content-pack/${packName}/img/${uuidRegexExec[1]}.jpeg`;
};

/**
 * A class for Upload Media service 
 * 
 * @author Vyacheslav Solovjov
 */
export class ContentPack implements ServiceMethods<Data> {
  app: Application
  options: ServiceOptions

  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  async find (params?: Params): Promise<any[] | Paginated<any>> {
    const result = await new Promise((resolve, reject) => {
      s3.provider.listObjectsV2({
        Bucket: s3.bucket,
        Prefix: 'content-pack'
      }, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    const manifests = (result as any).Contents.filter(result => packRegex.exec(result.Key) != null);
    const returned = await Promise.all(manifests.map(async(manifest) => {
      const manifestResult = await new Promise((resolve, reject) => {
        s3.provider.getObject({
          Bucket: s3.bucket,
          Key: manifest.Key
        }, (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(data);
          }
        });
      }) as any;
      return {
        name: packRegex.exec(manifest.Key)[1],
        url: `https://${config.aws.cloudfront.domain}/${manifest.Key}`,
        data: JSON.parse(manifestResult.Body.toString())
      };
    }));
    return returned;
  }

  async get (id: Id, params?: Params): Promise<Data> {
    return {};
  }

  async create (data: Data, params?: Params): Promise<Data> {
    if (Array.isArray(data)) {
      return await Promise.all(data.map(current => this.create(current, params)));
    }

    let uploadPromises = [];
    const { scene, contentPack } = data as any;
    await new Promise((resolve, reject) => {
      s3.provider.getObjectAcl({
        Bucket: s3.bucket,
        Key: getManifestKey(contentPack)
      }, (err, data) => {
        if (err) {
          if (err.code === 'NoSuchKey') resolve(null);
          else {
            console.error(err);
            reject(err);
          }
        } else {
          reject(new Error('Pack already exists'));
        }
      });
    });
    const body = {
      version: 1,
      avatars: [],
      scenes: []
    };
    if (scene != null) {
      const assembleResponse = assembleScene(scene, contentPack);
      const worldFile = assembleResponse.worldFile;
      uploadPromises = assembleResponse.uploadPromises;
      if (typeof worldFile.metadata === 'string') worldFile.metadata = JSON.parse(worldFile.metadata);
      const worldFileKey = getWorldFileKey(contentPack, worldFile.metadata.name);
      await new Promise((resolve, reject) => {
        s3.provider.putObject({
          ACL: "public-read",
          Body: Buffer.from(JSON.stringify(worldFile)),
          Bucket: s3.bucket,
          ContentType: "application/json",
          Key: worldFileKey
        }, (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
      body.scenes.push({
        sid: scene.sid,
        name: scene.name,
        worldFile: getWorldFileUrl(contentPack, worldFile.metadata.name)
      });
    }

    await new Promise((resolve, reject) => {
      s3.provider.putObject({
        ACL: "public-read",
        Body: Buffer.from(JSON.stringify(body)),
        Bucket: s3.bucket,
        ContentType: "application/json",
        Key: getManifestKey(contentPack)
      }, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    await Promise.all(uploadPromises);
    return data;
  }

  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    const manifestUrl = (data as any).manifestUrl;
    const manifestResult = await axios.get(manifestUrl);
    const { avatars, scenes } = manifestResult.data;
    for (const index in scenes) {
      const scene = scenes[index];
      const sceneResult = await axios.get(scene.worldFile);
      await populateScene(scene.sid, sceneResult.data, this.app, scene.thumbnail );
    }
    return data;
  }

  async patch (id: NullableId, data: Data, params?: Params): Promise<Data> {
    let uploadPromises = [];
    const { scene, contentPack } = data as any;
    const pack = await new Promise((resolve, reject) => {
      s3.provider.getObject({
        Bucket: s3.bucket,
        Key: getManifestKey(contentPack)
      }, (err, data) => {
        if (err) {
          if (err.code === 'NoSuchKey') reject('Pack does not exist');
          else {
            reject(err);
          }
        } else {
          resolve(data);
        }
      });
    });
    const body = JSON.parse((pack as any).Body.toString());
    if (scene != null) {
      const thumbnailFind = await this.app.service('static-resource').find({
        query: {
          sid: scene.sid
        }
      });

      const assembleResponse = assembleScene(scene, contentPack);
      const worldFile = assembleResponse.worldFile;
      uploadPromises = assembleResponse.uploadPromises;
      if (typeof worldFile.metadata === 'string') worldFile.metadata = JSON.parse(worldFile.metadata);
      const worldFileKey = getWorldFileKey(contentPack, worldFile.metadata.name);
      let thumbnailLink;
      if (thumbnailFind.total > 0) {
        const thumbnail = thumbnailFind.data[0];
        const url = thumbnail.url;
        const thumbnailDownload = await axios.get(url, { responseType: 'arraybuffer' });
        await new Promise((resolve, reject) => {
          s3.provider.putObject({
            ACL: "public-read",
            Body: thumbnailDownload.data,
            Bucket: s3.bucket,
            ContentType: "jpeg",
            Key: getThumbnailKey(contentPack, url)
          }, (err, data) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
        thumbnailLink = getThumbnailUrl(contentPack, url);
      }
      await new Promise((resolve, reject) => {
        s3.provider.putObject({
          ACL: "public-read",
          Body: Buffer.from(JSON.stringify(worldFile)),
          Bucket: s3.bucket,
          ContentType: "application/json",
          Key: worldFileKey
        }, (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
      const existingSceneIndex = body.scenes.findIndex(existingScene => existingScene.sid === scene.sid);
      if (existingSceneIndex > -1 ) body.scenes.splice(existingSceneIndex, 1);
      const newScene = {
        sid: scene.sid,
        name: scene.name,
        worldFile: getWorldFileUrl(contentPack, worldFile.metadata.name)
      };
      if (thumbnailLink != null) (newScene as any).thumbnail = thumbnailLink;
      body.scenes.push(newScene);
    }

    if (body.version) body.version++;
    else body.version = 1;
    await new Promise((resolve, reject) => {
      s3.provider.putObject({
        ACL: "public-read",
        Body: Buffer.from(JSON.stringify(body)),
        Bucket: s3.bucket,
        ContentType: "application/json",
        Key: getManifestKey(contentPack)
      }, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    await Promise.all(uploadPromises);
    return data;
  }

  async remove (id: NullableId, params?: Params): Promise<Data> {
    return { id };
  }
}
