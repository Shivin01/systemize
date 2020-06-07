import React from 'react'
import {useQuery} from 'react-query'
import axiosInstance from '../utils/axiosInsance'

const UserContext = React.createContext({users: []})
UserContext.displayName = 'AuthContext'

function fetchUsers() {
  return axiosInstance.get('http://localhost:8000/users/')
}

export function UsersProvider(props) {
  const userResponse = useQuery('users', fetchUsers, {
    refetchInterval: false,
    retry: false,
    refetchOnWindowFocus: false,
  })

  return <UserContext.Provider value={{users: userResponse.data}} {...props} />
}

export function useUsers() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUsers must be used within a UsersProvider`)
  }
  return context
}
