import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('../components/xr/scene'), { ssr: false })
import React from 'react'
// import Login from '../components/ui/Login'
// TODO: Make a TOS page

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home">
        {/* <Login /> */}
        <Scene />
      </Layout>
    )
  }
}
