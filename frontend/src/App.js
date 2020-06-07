import React, {useState, useEffect, Fragment} from 'react'
import {Switch, useLocation} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import PublicRoute from './components/Route/PublicRoute'
import PrivateRoute from './components/Route/PrivateRoute'
import AllTasks from './components/AllTasks'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const item = window.localStorage.getItem('token')
    const token = item ? JSON.parse(item) : null
    if (token) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [location])

  return (
    <Fragment>
      {loggedIn && <NavBar />}
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/all-tasks" component={AllTasks} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Fragment>
  )
}

export default App
