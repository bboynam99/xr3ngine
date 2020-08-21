import Immutable from 'immutable';
import {
  LoadedMessagesAction,
  LoadedChannelAction,
  CreatedMessageAction,
  LoadedChannelsAction,
  RemovedMessageAction,
  ChatAction,
  ChatTargetSetAction,
  SetMessageScrollInitAction,
  CreatedChannelAction,
  PatchedChannelAction,
  RemovedChannelAction
} from './actions';

import {
  CREATED_MESSAGE,
  LOADED_CHANNELS,
  LOADED_MESSAGES,
  PATCHED_MESSAGE,
  REMOVED_MESSAGE,
  CHAT_TARGET_SET,
  SET_MESSAGE_SCROLL_INIT,
  CREATED_CHANNEL,
  PATCHED_CHANNEL,
  REMOVED_CHANNEL
} from '../actions';

import { Message } from '@xr3ngine/common/interfaces/Message'
import { Channel } from '@xr3ngine/common/interfaces/Channel'

import _ from 'lodash';
import moment from 'moment';

export const initialState = {
  channels: {
    channels: {},
    limit: 5,
    skip: 0,
    total: 0,
    updateNeeded: true,
  },
  targetObjectType: '',
  targetObject: {},
  targetChannelId: '',
  updateMessageScroll: false,
  messageScrollInit: false
};

const immutableState = Immutable.fromJS(initialState);

const chatReducer = (state = immutableState, action: ChatAction): any => {
  let updateMap, localAction, updateMapChannels, updateMapChannelsChild;
  switch (action.type) {
    case LOADED_CHANNELS:
      localAction = (action as LoadedChannelsAction);
        console.log('LOADED CHANNELS');
        console.log('localAction: ');
        console.log(localAction);
      updateMap = new Map(state.get('channels'));
      updateMap.set('limit', localAction.limit);
      updateMap.set('skip', localAction.skip);
      updateMap.set('total', localAction.total);
      updateMapChannels = new Map((updateMap as any).get('channels'));
      updateMap.set('updateNeeded', false);
        console.log('updateMapChannels:');
        console.log(updateMapChannels);
      localAction.channels.forEach((channel) => {
        channel.updateNeeded = true;
        channel.limit = 8;
        channel.skip = 0;
        channel.total = 0;
        updateMapChannels.set(channel.id, channel);
        console.log(updateMapChannels);
      });
      updateMap.set('channels', updateMapChannels);
        console.log('LOADED CHANNELS updateMap:');
        console.log(updateMap);
      return state
          .set('channels', updateMap);
    case CREATED_MESSAGE:
      localAction = (action as CreatedMessageAction);
        const channelId = localAction.message.channelId;
        const selfUser = localAction.selfUser;
        console.log('CREATE MESSAGE LOCAL ACTION');
        console.log(localAction);
      updateMap = new Map(state.get('channels'));
        console.log(updateMap);
        updateMapChannels = new Map((updateMap as any).get('channels'));
        console.log(updateMapChannels);
        updateMapChannelsChild = (updateMapChannels as any).get(channelId);
        console.log('CREATE MESSAGE CHILD:');
        console.log(updateMapChannelsChild);
        if (updateMapChannelsChild == null) {
          updateMap.set('updateNeeded', true);
        }
        else {
          updateMapChannelsChild.messages = (updateMapChannelsChild.messages == null || updateMapChannelsChild.messages.size != null || updateMapChannels.get('updateNeeded') === true) ? [localAction.message] : _.unionBy(updateMapChannelsChild.messages, [localAction.message], 'id');
          updateMapChannelsChild.skip = updateMapChannelsChild.skip + 1;
          updateMapChannelsChild.updatedAt = moment().utc().toJSON();
          updateMapChannels.set(channelId, updateMapChannelsChild);
          updateMap.set('channels', updateMapChannels);
        }
      console.log('CREATE MESSAGE UPDATEMAP:');
        console.log(updateMap);
      let returned = state
        .set('channels', updateMap)
        .set('updateMessageScroll', true);

      if (state.get('targetChannelId').length === 0 && updateMapChannelsChild != null) {
        const channelType = updateMapChannelsChild.channelType;
        const targetObject = channelType === 'user' ? (updateMapChannelsChild.userId1 === selfUser.id ? updateMapChannelsChild.user2 : updateMapChannelsChild.user1) : channelType === 'group' ? updateMapChannelsChild.group : updateMapChannelsChild.party;
        returned = returned
          .set('targetChannelId', channelId)
          .set('targetObjectType', channelType)
          .set('targetObject', targetObject);
      }
      return returned;
    case LOADED_MESSAGES:
      localAction = (action as LoadedMessagesAction);
        console.log('LOADED MESSAGES LOCAL ACTION');
        console.log(localAction);
      updateMap = new Map(state.get('channels'));
        updateMapChannels = updateMap.get('channels');
        updateMapChannelsChild = (updateMapChannels.get(localAction.channelId));
        updateMapChannelsChild.messages = (updateMapChannelsChild == null || updateMapChannelsChild.messages == null || updateMapChannelsChild.messages.size != null || updateMapChannels.get('updateNeeded') === true) ? localAction.messages : _.unionBy(updateMapChannelsChild.messages, localAction.messages, 'id');
        updateMapChannelsChild.limit = localAction.limit;
        updateMapChannelsChild.skip = localAction.skip;
        updateMapChannelsChild.total = localAction.total;
        updateMapChannelsChild.updateNeeded = false;
        updateMapChannels.set(localAction.channelId, updateMapChannelsChild);
        updateMap.set('channels', updateMapChannels);
      console.log(`LOADED MESSAGES FOR CHANNEL ${localAction.channelId}`);
      console.log(updateMap);
      return state
          .set('channels', updateMap);
    case REMOVED_MESSAGE:
      console.log('REMOVED MESSAGE REDUCER');
      localAction = (action as RemovedMessageAction);
        console.log(localAction);
      updateMap = new Map(state.get('channels'));

        updateMapChannels = new Map(updateMap.get('channels'));
        updateMapChannelsChild = (updateMapChannels as any).get(localAction.message.channelId);
        if (updateMapChannelsChild != null) {
            console.log('OLD MESSAGES:');
            console.log(updateMapChannelsChild.messages);
            _.remove(updateMapChannelsChild.messages, (message: Message) => message.id === localAction.message.id);
            console.log('NEW MESSAGES:');
            console.log(updateMapChannelsChild.messages);
            updateMapChannelsChild.skip = updateMapChannelsChild.skip - 1;
            updateMapChannels.set(localAction.message.channelId, updateMapChannelsChild);
            updateMap.set('channels', updateMapChannels);
            console.log('REMOVED MESSAGE');
            console.log(updateMap);
        }
      return state
          .set('channels', updateMap);
    case PATCHED_MESSAGE:
      localAction = (action as LoadedMessagesAction);
      console.log('PATCHED MESSAGE REDUCER');
      console.log(localAction);
      updateMap = new Map(state.get('channels'));

      updateMapChannels = new Map(updateMap.get('channels'));
      updateMapChannelsChild = (updateMapChannels as any).get(localAction.message.channelId);
      if (updateMapChannelsChild != null) {
        console.log('OLD MESSAGES:');
        console.log(updateMapChannelsChild.messages);
        updateMapChannelsChild.messages = updateMapChannelsChild.messages.map((message: Message) => message.id === localAction.message.id ? localAction.message : message);
        console.log('NEW MESSAGES:');
        console.log(updateMapChannelsChild.messages);
        updateMapChannels.set(localAction.message.channelId, updateMapChannelsChild);
        updateMap.set('channels', updateMapChannels);
        console.log('PATCHED MESSAGE');
        console.log(updateMap);
      }
      return state
          .set('channels', updateMap);
    case CREATED_CHANNEL:
      localAction = (action as CreatedChannelAction);
      const createdChannel = localAction.channel;
      console.log('CREATED CHANNEL REDUCER');
      console.log(localAction);
      updateMap = new Map(state.get('channels'));

      updateMapChannels = new Map(updateMap.get('channels'));
        console.log('updateMapChannels');
        console.log(updateMapChannels);
        updateMapChannels.set(createdChannel.id, createdChannel);
        console.log('New updateMapChannels');
        console.log(updateMapChannels);
        updateMap.set('channels', updateMapChannels);
        console.log('CREATD CHANNEL');
        console.log(updateMap);

      return state
          .set('channels', updateMap);
    case PATCHED_CHANNEL:
      localAction = (action as PatchedChannelAction);
        const updateChannel = localAction.channel;
      console.log('PATCHED CHANNEL REDUCER');
      console.log(localAction);
      updateMap = new Map(state.get('channels'));

      updateMapChannels = new Map(updateMap.get('channels'));
      updateMapChannelsChild = (updateMapChannels as any).get(localAction.channel.id);
      if (updateMapChannelsChild != null) {
        console.log('old updateMapChannelsChild');
        console.log(updateMapChannelsChild);
        updateMapChannelsChild.updatedAt = updateChannel.updatedAt;
        updateMapChannelsChild.group = updateChannel.group;
        updateMapChannelsChild.party = updateChannel.party;
        updateMapChannelsChild.user1 = updateChannel.user1;
        updateMapChannelsChild.user2 = updateChannel.user2;
        console.log('new updateMapChannelsChild');
        console.log(updateMapChannelsChild);
        updateMapChannels.set(localAction.channel.id, updateMapChannelsChild);
        updateMap.set('channels', updateMapChannels);
        console.log('PATCHED CHANNEL');
        console.log(updateMap);
      }
      return state
          .set('channels', updateMap);
    case REMOVED_CHANNEL:
      console.log('REMOVED CHANNEL REDUCER');
      localAction = (action as RemovedChannelAction);
      console.log(localAction);
      updateMap = new Map(state.get('channels'));
      updateMapChannels = new Map(updateMap.get('channels'));
        console.log('Original updateMapChannels:');
        console.log(updateMapChannels);
        updateMapChannels.delete(localAction.channel.id);
        console.log('New updateMapChannels');
        console.log(updateMapChannels);

        updateMap.set('channels', updateMapChannels);
        console.log('REMOVED MESSAGE');
        console.log(updateMap);
      return state
          .set('channels', updateMap);

    case CHAT_TARGET_SET:
      console.log('CHAT_TARGET_SET REDUCER');
      const { targetObjectType, targetObject, targetChannelId } = (action as ChatTargetSetAction);
        console.log(targetObjectType);
        console.log(targetObject);
      return state
          .set('targetObjectType', targetObjectType)
          .set('targetObject', targetObject)
          .set('targetChannelId', targetChannelId)
          .set('updateMessageScroll', true)
          .set('messageScrollInit', true);

    case SET_MESSAGE_SCROLL_INIT:
      console.log('SETTING MESSAGE SCROLL INIT');
          const { value } = (action as SetMessageScrollInitAction);
          return state.set('messageScrollInit', value);
  }

  return state;
};

export default chatReducer;
