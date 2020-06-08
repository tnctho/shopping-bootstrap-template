import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthenticatedComp extends React.Component {
  render () {
    const token = localStorage.getItem('TOKEN')
    const {component: Component} = this.props;
    if (token) return <Component {...this.props} />
    else return <Redirect to='/login' />
  }
}

export default AuthenticatedComp
