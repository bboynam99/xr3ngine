import { HookContext } from '@feathersjs/feathers'
import { extractLoggedInUserFromParams } from '../services/auth-management/auth-management.utils'
import { BadRequest, Forbidden } from '@feathersjs/errors'

// This will attach the owner ID in the contact while creating/updating list item
export default () => {
  return async (context: HookContext): Promise<HookContext> => {
    // Getting logged in user and attaching owner of user
    console.log('GROUP PERMISSION AUTHENTICATE')
      const { id, params, app } = context
    const loggedInUser = extractLoggedInUserFromParams(params)
    const groupUserResult = await app.service('group-user').find({
      query: {
        groupId: id || params.query.groupId,
        userId: loggedInUser.userId
      }
    })
      if (groupUserResult.total === 0) {
        throw new BadRequest('Invalid group ID')
      }
      const groupUser = groupUserResult.data[0]
      if (groupUser.groupUserRank !== 'owner' && groupUser.groupUserRank !== 'admin') {
        throw new Forbidden('You must be the owner or an admin of this group to perform that action')
      }

      return context
  }
}
