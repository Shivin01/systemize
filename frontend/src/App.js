import React, {useState, useEffect} from 'react'
import {Switch, useLocation} from 'react-router-dom'
import iziToast from 'izitoast'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import PublicRoute from './components/Route/PublicRoute'
import PrivateRoute from './components/Route/PrivateRoute'
import {UsersProvider} from './contexts/user'

import 'izitoast/dist/css/iziToast.min.css'
import './style.css'

iziToast.settings({
  timeout: 10000,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
})

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
    <UsersProvider>
      {loggedIn && <NavBar />}
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </UsersProvider>
  )
}

export default App
