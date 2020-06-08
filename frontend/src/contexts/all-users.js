import React, {useEffect, useState} from 'react'
import {useQuery} from 'react-query'

import {getUsersWithParams} from '../utils/api'

const UserContext = React.createContext({users: []})
UserContext.displayName = 'AuthContext'

export function AllUsersProvider(props) {
  const {data: response, isFetching, refetch} = useQuery(
    ['organization-users', {}],
    getUsersWithParams,
    {
      manual: true,
      refetchInterval: false,
      retry: false,
      refetchOnWindowFocus: false,
    },
  )

  function fetchData() {
    setTimeout(() => {
      refetch()
    }, 3000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const users = response && response.data ? response.data : []

  return <UserContext.Provider value={{users, isFetching}} {...props} />
}

export function useAllUsers() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useAllUsers must be used within a AllUsersProvider`)
  }
  return context
}
