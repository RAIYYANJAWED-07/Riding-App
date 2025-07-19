import { createContext } from "react"
import React from 'react'

export const UserContext = createContext()


const UserProvider = ({ children }) => {

    const [user, setUser] = React.useState({
        email: '',
        fullname: {
            firstName: '',
            lastName: ''
        }
    })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
