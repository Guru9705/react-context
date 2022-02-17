import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

export default function NavBar() {
    const {isAuthorized, toggleAuth,tokenVal } = useContext(AuthContext);
  return (
      <div>NavBar
          <button onClick={toggleAuth}>{isAuthorized ? "Logout" : "Login"}</button>
          <div>Login Status:{ `${isAuthorized}`}</div>
          <div>Token:{ isAuthorized?( `${tokenVal}`):"No token"}</div>
         
    </div>
  )
}
