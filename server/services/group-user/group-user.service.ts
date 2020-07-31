import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { GroupUser } from './group-user.class'
import createModel from '../../models/group-user.model'
import hooks from './group-user.hooks'

declare module '../../declarations' {
  interface ServiceTypes {
    'group-user': GroupUser & ServiceAddons<any>
  }
}

export default (app: Application): any => {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true
  }

  app.use('/group-user', new GroupUser(options, app))

  const service = app.service('group-user')

  service.hooks(hooks)

  service.publish('created', async (data): Promise<any> => {
    const groupUsers = await app.service('group-user').find({
      query: {
        $limit: 1000,
        groupId: data.groupId
      }
    })
    data.user = await app.service('user').get(data.userId)
    const avatarResult = await app.service('static-resource').find({
      query: {
        staticResourceType: 'user-thumbnail',
        userId: data.userId
      }
    }) as any

    if (avatarResult.total > 0) {
      data.user.dataValues.avatarUrl = avatarResult.data[0].url
    }
    const targetIds = (groupUsers as any).data.map((groupUser) => {
      return groupUser.userId
    })
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return Promise.all(targetIds.map((userId) => {
      return app.channel(`userIds/${userId}`).send({
        groupUser: data
      })
    }))
  })

  service.publish('patched', async (data): Promise<any> => {
    console.log('Publishing group-user patched')
    console.log(data)
    const groupUsers = await app.service('group-user').find({
      query: {
        $limit: 1000,
        groupId: data.groupId
      }
    })
    data.user = await app.service('user').get(data.userId)
    const avatarResult = await app.service('static-resource').find({
      query: {
        staticResourceType: 'user-thumbnail',
        userId: data.userId
      }
    }) as any

    if (avatarResult.total > 0) {
      data.user.dataValues.avatarUrl = avatarResult.data[0].url
    }

    const targetIds = (groupUsers as any).data.map((groupUser) => {
      return groupUser.userId
    })
    console.log('group-user patch targetIds:')
    console.log(targetIds)
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return Promise.all(targetIds.map((userId) => {
      return app.channel(`userIds/${userId}`).send({
        groupUser: data
      })
    }))
  })

  service.publish('removed', async (data): Promise<any> => {
    const groupUsers = await app.service('group-user').find({
      query: {
        $limit: 1000,
        groupId: data.groupId
      }
    })
    const targetIds = (groupUsers as any).data.map((groupUser) => {
      return groupUser.userId
    })
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return Promise.all(targetIds.map((userId) => {
      return app.channel(`userIds/${userId}`).send({
        groupUser: data
      })
    }))
  })
}
