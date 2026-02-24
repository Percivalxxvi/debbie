import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useChoiceStore } from '../../Store'

const Auth = () => {
    const {choice} = useChoiceStore();
  return choice ? <Outlet /> : <Navigate to={"/login"} />;
}

export default Auth