import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const AppLayout: React.FC = () => {
  return (
    <div>
      <Outlet/>
      <Sidebar />
    </div>
  )
}

export default AppLayout
