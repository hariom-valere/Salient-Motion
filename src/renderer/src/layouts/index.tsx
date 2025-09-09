import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const AppLayout: React.FC = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
