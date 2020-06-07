import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App'
import {AllUsersProvider} from "./contexts/all-users";

ReactDOM.render(
  <BrowserRouter>
    <AllUsersProvider>
      <App />
    </AllUsersProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
