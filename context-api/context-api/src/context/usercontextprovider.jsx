
import React, { useState } from 'react'

import UserContext from "./usercontext";

const UserContextPorvider = ({children})=> {
const [user,setuser] = useState(null);

  return (
      <UserContext.Provider value={{user,setuser}}>
      
      {children}
      </UserContext.Provider>

  )
}

export default UserContextPorvider;