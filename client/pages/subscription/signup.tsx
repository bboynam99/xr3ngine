/* eslint-disable react/prefer-stateless-function */
// FIXME ^
import React from 'react'
import EmptyLayout from '../../components/ui/Layout/EmptyLayout'
import dynamic from 'next/dynamic'
const Signup = dynamic(() => import('../../components/ui/Pricing'), { ssr: false })

export default class PricingPage extends React.Component {
  render() {
    return (
      <EmptyLayout>
        <Signup />
      </EmptyLayout>
    )
  }
}
