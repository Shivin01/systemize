import React, {useState} from 'react'
import {useQuery} from 'react-query'

import {getUsersWithParams} from '../utils/api'

const UserContext = React.createContext({users: []})
UserContext.displayName = 'AuthContext'

export function AllUsersProvider(props) {
  const {data: response, isFetching} = useQuery(
    ['organization-users', {}],
    getUsersWithParams,
    {
      refetchInterval: false,
      retry: false,
      refetchOnWindowFocus: false,
    },
  )

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
