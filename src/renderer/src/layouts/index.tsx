import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
// import TitleBar from '../components/TitleBar'

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* <TitleBar /> */}
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
