import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow overflow-y-auto text-white ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
