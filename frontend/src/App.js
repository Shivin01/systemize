import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  const [active, setActive] = useState(false)

  return (
    <Router>
      <NavBar active={active} setActive={setActive} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
