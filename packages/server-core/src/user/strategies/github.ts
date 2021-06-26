import CustomOAuthStrategy from './custom-oauth';
import { Params } from '@feathersjs/feathers';
import config from '../../appconfig';

export class GithubStrategy extends CustomOAuthStrategy {
  constructor(app){
    super();
    this.app = app;
  }
  
  async getEntityData (profile: any, entity: any, params?: Params): Promise<any> {
    const baseData = await super.getEntityData(profile, null, {});
    const userId = (params?.query) ? params.query.userId : undefined;
    return {
      ...baseData,
      email: profile.email,
      type: 'github',
      userId
    };
  }

  async updateEntity(entity: any, profile: any, params?: Params): Promise<any> {
    console.log('Github JWT authenticate');
    const authResult = await (this.app.service('authentication') as any).strategies.jwt.authenticate({ accessToken: params?.authentication?.accessToken }, {});
    const identityProvider = authResult['identity-provider'];
    const user = await this.app.service('user').get(entity.userId);
    await this.app.service('user').patch(entity.userId, {
      userRole: user?.userRole === 'admin' ? 'admin' : 'user'
    });
    if (entity.type !== 'guest') {
      await this.app.service('identity-provider').remove(identityProvider.id);
      await this.app.service('user').remove(identityProvider.userId);
    }
    return super.updateEntity(entity, profile, params);
  }

  async getRedirect (data: any, params?: Params): Promise<string> {
    const redirectHost = config.authentication.callback.github;

    const type = (params?.query?.userId) ? 'connection' : 'login';
    if (Object.getPrototypeOf(data) === Error.prototype) {
      const err = data.message as string;
      return redirectHost + `?error=${err}`;
    } else {
      const token = data.accessToken as string;
      const redirect = params.redirect;
      let parsedRedirect;
      try {
        parsedRedirect = JSON.parse(redirect);
      } catch(err) {
        parsedRedirect = {};
      }
      const path = parsedRedirect.path;
      const instanceId = parsedRedirect.instanceId;
      let returned = redirectHost + `?token=${token}&type=${type}`;
      if (path != null) returned = returned.concat(`&path=${path}`);
      if (instanceId != null) returned = returned.concat(`&instanceId=${instanceId}`);
      return returned;
    }
  }
}
export default GithubStrategy;