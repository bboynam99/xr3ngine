import React, { Suspense, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
const editorProject = React.lazy(() => import('@xrengine/editor/src/pages/projects'))
const editorProjID = React.lazy(() => import('@xrengine/editor/src/pages/projects/[projectId]'))
const editorCreate = React.lazy(() => import('@xrengine/editor/src/pages/create'))
const UnauthorisedPage = React.lazy(() => import('@xrengine/client/src/pages/403/403'))
import { useAuthState } from '@xrengine/client-core/src/user/reducers/auth/AuthState'
import { AuthService } from '@xrengine/client-core/src/user/reducers/auth/AuthService'

interface Props {
  authState?: any
  doLoginAuto?: any
}

const unauthorisedMessage = `The page you are looking for is eligible for authorised users only.`
const loggingInMessage = `Authorising...`

const EditorProtectedRoutes = (props: Props) => {
  //const { authState, doLoginAuto } = props

  const dispatch = useDispatch()
  const scopes = useAuthState().user?.scopes?.value || []
  let isSceneAllowed = false
  const authState = useAuthState()
  const [pendingAuth, setPendingAuth] = useState(true)

  let message = !scopes.length && !pendingAuth ? unauthorisedMessage : loggingInMessage

  useEffect(() => {
    dispatch(AuthService.doLoginAuto(false))
  }, [])

  useEffect(() => {
    setPendingAuth(authState.isLoggedIn.value)
  }, [authState.isLoggedIn.value])

  for (const scope of scopes) {
    if (scope.type.split(':')[0] === 'editor' && scope.type.split(':')[1] === 'write') {
      isSceneAllowed = true
      break
    }
  }

  return (
    <Switch>
      {isSceneAllowed ? (
        <>
          <Route exact path="/editor/projects/:projectId" component={editorProjID} />
          <Route exact path="/editor/projects" component={editorProject} />
          <Route exact path="/editor/create" component={editorCreate} />
        </>
      ) : (
        <>
          <Route exact path="/editor/projects/:projectId" render={() => <UnauthorisedPage message={message} />} />
          <Route exact path="/editor/projects" render={() => <UnauthorisedPage message={message} />} />
          <Route exact path="/editor/create" render={() => <UnauthorisedPage message={message} />} />
        </>
      )}
      <Redirect path="/editor" to="/editor/projects" />
    </Switch>
  )
}

export default EditorProtectedRoutes
