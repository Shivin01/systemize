/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from '@emotion/core'
import {Fragment} from 'react'
import UserTasks from './UserTasks'

function Home() {
  return (
    <Fragment>
      <div className="container m-auto">
        <h1 className="text-3xl font-semibold my-5">Your Tasks</h1>
        <UserTasks />
      </div>
    </Fragment>
  )
}

export default Home
