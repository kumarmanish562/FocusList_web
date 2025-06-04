import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='w-full h-full flex'>
      <Outlet />
    </div>
  )
}

export default AuthLayout