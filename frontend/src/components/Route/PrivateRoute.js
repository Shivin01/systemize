import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'

const PrivateRoute = ({component: Component, ...rest}) => {
  const [token] = useLocalStorage('token')

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
