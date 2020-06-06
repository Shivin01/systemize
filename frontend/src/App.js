import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App({loggedIn = true}) {
  const [active, setActive] = useState(false)

  return (
    <Router>
      {loggedIn && <NavBar active={active} setActive={setActive} />}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

App.propTypes = {
  loggedIn: PropTypes.bool,
}

export default App
