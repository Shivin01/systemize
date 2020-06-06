/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from '@emotion/core'
import UserTasks from './UserTasks'

function Home() {
  return (
    <section className="h-screen pt-24">
      <div className="container m-auto">
        <h1 className="text-3xl font-semibold my-5">Your Tasks</h1>
        <UserTasks />
      </div>
    </section>
  )
}

export default Home
