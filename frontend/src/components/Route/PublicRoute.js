import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'

const PublicRoute = ({component: Component, restricted = true, ...rest}) => {
  const [token] = useLocalStorage('token')

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        token && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  )
}

export default PublicRoute
