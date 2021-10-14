import React, { useState, useRef, useEffect } from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import IconButton from '@material-ui/core/IconButton'
import Call from '@material-ui/icons/Call'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { useStyle, useStyles } from './style'
import InviteHarmony from '../inviteHarmony'
import Person from '@material-ui/icons/Person'
import ListItemText from '@material-ui/core/ListItemText'
import { connect, useDispatch } from 'react-redux'
import { ChatService } from '@xrengine/client-core/src/social/reducers/chat/ChatService'
import { ChannelType, useChatState } from '@xrengine/client-core/src/social/reducers/chat/ChatState'
import { useChannelConnectionState } from '../../../../../client/src/reducers/channelConnection/ChannelConnectionState'
import { useAuthState } from '@xrengine/client-core/src/user/reducers/auth/AuthState'
import { useUserState } from '@xrengine/client-core/src/user/store/UserState'
import { ChatAction } from '@xrengine/client-core/src/social/reducers/chat/ChatActions'

import CreateMessage from './CreateMessage'
import MessageList from './MessageList'

export default function RightHarmony() {
  const classex = useStyle()
  const classes = useStyles()
  const dispatch = useDispatch()
  const userState = useUserState()
  const [openInvite, setOpenInvite] = React.useState(false)
  const messageRef = React.useRef()
  const messageEl = messageRef.current
  const selfUser = useAuthState().user
  const chatState = useChatState()
  const channelState = chatState.channels
  const channels = channelState.channels.value
  const channelEntries = Object.values(channels).filter((channel) => !!channel)!
  const targetChannelId = chatState.targetChannelId.value
  const instanceChannel = channelEntries.find((entry) => entry.instanceId != null)!
  const activeChannel = channels[targetChannelId]
  const channelRef = useRef(channels)

  const openInviteModel = (open: boolean) => {
    setOpenInvite(open)
  }

  useEffect(() => {
    if (channelState.updateNeeded.value === true) {
      dispatch(ChatService.getChannels())
    }
  }, [channelState.updateNeeded.value])

  useEffect(() => {
    channelRef.current = channels
    channelEntries.forEach((channel) => {
      if (chatState.updateMessageScroll.value === true) {
        dispatch(ChatAction.setUpdateMessageScroll(false))
        if (
          channel?.id === targetChannelId &&
          messageEl != null &&
          (messageEl as any).scrollHeight -
            (messageEl as any).scrollTop -
            (messageEl as any).firstElementChild?.offsetHeight <=
            (messageEl as any).clientHeight + 20
        ) {
          ;(messageEl as any).scrollTop = (messageEl as any).scrollHeight
        }
      }
      if (channel?.updateNeeded != null && channel?.updateNeeded === true) {
        dispatch(ChatService.getChannelMessages(channel.id))
      }
    })
  }, [channels])

  return (
    <div className={classes.rightRoot}>
      <div className={classes.title}>
        <ListItemAvatar>
          <Person />
        </ListItemAvatar>
        <ListItemText
          className={classes.listText}
          primary={activeChannel?.instance?.instanceUsers[0].name}
          secondary={<React.Fragment>{'online'}</React.Fragment>}
        />
        <div style={{ marginRight: '1.5rem' }}>
          <IconButton>
            <Call className={classes.whiteIcon} />
          </IconButton>
          <IconButton onClick={() => openInviteModel(true)}>
            <MoreHoriz className={classes.whiteIcon} />
          </IconButton>
        </div>
      </div>
      {activeChannel && <MessageList activeChannel={activeChannel} selfUser={selfUser} />}
      <div style={{ position: 'fixed', bottom: '0' }}>
        <CreateMessage />
      </div>

      <InviteHarmony open={openInvite} handleClose={openInviteModel} />
    </div>
  )
}
