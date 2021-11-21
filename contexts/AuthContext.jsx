import React, { useContext, useState, useEffect } from "react"

export const AuthContext = React.createContext();



export function AuthProvider(props) {

  const [currentUser, setCurrentUser] = useState('')
 



  return (
    <AuthContext.Provider value={[currentUser,setCurrentUser]}>
      {props.children}
    </AuthContext.Provider>
  )
}
