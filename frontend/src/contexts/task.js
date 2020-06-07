import React from 'react'
import {useQuery} from "react-query";
import axiosInstance from "../utils/axiosInsance";

const TaskContext = React.createContext({tasks: []})
TaskContext.displayName = 'TaskContext'

function fetchTasks() {
  console.log(axiosInstance.defaults.headers)
  const item = window.localStorage.getItem('token');
  const token = item ? JSON.parse(item) : null
  console.log(token)
  return axiosInstance.get('http://localhost:8000/task/')
}

export function TaskProvider(props) {
  const taskResponse = useQuery('tasks', fetchTasks, {
    refetchInterval: false,
    retry: false,
    refetchOnWindowFocus: false
  })

  return <TaskContext.Provider value={{tasks: taskResponse.data}} {...props} />
}

export function useTask() {
  const context = React.useContext(TaskContext)
  if (context === undefined) {
    throw new Error(`useTask must be used within a TaskProvider`)
  }
  return context
}
