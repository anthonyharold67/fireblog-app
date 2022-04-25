import React from 'react'
import {AuthContext} from '../contexts/AuthContext'
import {useContext} from 'react'
import {Outlet,Navigate, useLocation} from "react-router-dom"
import {toastWarnNotify} from ".././helpers/ToastNotify"

const PrivateRouter = () => {
  const {currentUser} = useContext(AuthContext);
  let location = useLocation() ;

  
  if(!currentUser){
    toastWarnNotify("You need to login first")
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    )
    
  }else{
    return (
      <Outlet />
    )
  }
}

export default PrivateRouter