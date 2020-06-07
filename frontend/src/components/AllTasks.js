import React from 'react'
import {useQuery} from 'react-query'
import {getTasksWithParams} from '../utils/api'
import Board from './Board'
import {authorQuoteMap} from '../utils/data'
import {status} from '../constants'

function AllTasks() {
  const {data: response, isFetching, refetch} = useQuery(
    ['user-tasks', {}],
    getTasksWithParams,
    {
      refetchInterval: false,
      retry: false,
      refetchOnWindowFocus: false,
    },
  )

  const accumulator = {
    [status.NEW]: [],
    [status.IN_PROGRESS]: [],
    [status.COMPLETED]: [],
  }

  const boardData = response
    ? response.data.reduce((acc, task) => {
        return {
          ...acc,
          [task.status]: [...acc[task.status], task],
        }
      }, accumulator)
    : accumulator

  console.log(boardData)

  return (
    <section className="h-screen pt-24">
      <div className="container m-auto">
        <h1 className="text-3xl font-semibold my-5">All Tasks</h1>
        {isFetching ? (
          'loading...'
        ) : (
          <Board initial={authorQuoteMap} data={boardData} />
        )}
      </div>
    </section>
  )
}

export default AllTasks
