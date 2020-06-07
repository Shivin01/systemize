/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from '@emotion/core'
import {useEffect, useState} from 'react'
import {useQuery} from 'react-query'

import UserTasks from './UserTasks'
import {getTasksWithParams} from '../utils/api'

function Home() {
  const {data: response, isFetching, refetch} = useQuery(
    ['user-tasks', {}],
    getTasksWithParams,
    {
      refetchInterval: false,
      retry: false,
      refetchOnWindowFocus: false,
    },
  )

  return (
    <section className="h-screen pt-24">
      <div className="container m-auto">
        <h1 className="text-3xl font-semibold my-5">Your Tasks</h1>
        {isFetching ? 'loading...' : (
          <UserTasks tasks={response.data} />
        )}
      </div>
    </section>
  )
}

export default Home
