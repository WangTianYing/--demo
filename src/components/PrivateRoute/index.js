import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...props}) => {
  return <Route {...props} render={(p) => {
    let u = localStorage.getItem('u') || '';
    if (u){
      return <Component />
    } else {
      return <Redirect to={{
        pathname: '/home',
        state: {
          from: p.location.pathname
        }
      }}/>
    }
  }}/>
};
export default PrivateRoute