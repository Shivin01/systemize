import React, {useState} from 'react'
import {useQuery} from "react-query";
import axiosInstance from "../utils/axiosInsance";

const UserContext = React.createContext({users: []})
UserContext.displayName = 'AuthContext'


export function UsersProvider(props) {
  const [userDetails, setUserDetails] = useState({});
  return <UserContext.Provider value={{userDetails, setUserDetails}} {...props} />
}

export function useUsers() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUsers must be used within a UsersProvider`)
  }
  return context
}
