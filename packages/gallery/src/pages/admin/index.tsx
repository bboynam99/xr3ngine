/**
 * @author Tanya Vykliuk <tanya.vykliuk@gmail.com>
 */
import { EmptyLayout } from '@xrengine/client-core/src/common/components/Layout/EmptyLayout'
import ProfileMenu from '@xrengine/client-core/src/user/components/UserMenu/menus/ProfileMenu'
import { doLoginAuto } from '@xrengine/client-core/src/user/reducers/auth/service'
import { selectInstanceConnectionState } from '@xrengine/client/src/reducers/instanceConnection/selector'
import Dashboard from '@xrengine/social/src/components/Dashboard'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { useTranslation } from 'react-i18next'
import AdminLogin from '../../components/AdminLogin'
import { selectAuthState } from '../../../../client-core/src/user/reducers/auth/selector'

interface Props {
  instanceConnectionState?: any
  doLoginAuto?: any
  authState?: any
}

const mapStateToProps = (state: any): any => {
  return {
    instanceConnectionState: selectInstanceConnectionState(state),
    authState: selectAuthState(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  doLoginAuto: bindActionCreators(doLoginAuto, dispatch)
})

const AdminPage = (props: Props) => {
  const { doLoginAuto, authState } = props
  const { t } = useTranslation()
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    if (authState.get('user')) {
      setUserRole(authState.get('user').userRole)
    }
  }, [authState])

  useEffect(() => {
    doLoginAuto(true)
  }, [])

  return (
    <>
      {userRole != 'guest' ? (
        <div>
          <Dashboard>
            <div />
          </Dashboard>
        </div>
      ) : (
        <EmptyLayout pageTitle={t('login.pageTitle')}>
          <style>
            {' '}
            {`
                 [class*=menuPanel] {
                     top: 75px;
                     bottom: initial;
                 }
             `}
          </style>
          <AdminLogin />
        </EmptyLayout>
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
