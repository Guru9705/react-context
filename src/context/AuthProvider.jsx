import React, { useState, createContext } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [tokenVal,setTokenVal]=useState("")

    const toggleAuth = () => {
        fetch("https://reqres.in/api/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }) // body data type must match "Content-Type" header
        }).then(r => r.json()).then(d => {
            if (d.token) {
                console.log(d.token);
                console.log(d);
                setTokenVal(d.token);
                setIsAuthorized(!isAuthorized);
              }
          })
        }
        
    

  return (
      <AuthContext.Provider value={{ isAuthorized, toggleAuth,tokenVal }}>
          {children}
    </AuthContext.Provider>
  )
}
