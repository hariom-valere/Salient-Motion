import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DashboardIcon from '../assets/Dashboard.svg'
import ConfigurationIcon from '../assets/Configuration.svg'
import AnalyzerIcon from '../assets/Analyzer.svg'
import UtilitiesIcon from '../assets/Utilities.svg'
import DeviceIcon from '../assets/device.svg'
import AccountIcon from '../assets/user.svg'
import SignOutIcon from '../assets/logout.svg'
import LogoutModal from '../components/LogoutModal'

import logo from '@renderer/assets/logo.svg'
import sidebar from '@renderer/assets/sidebar.svg'


const Sidebar: React.FC = () => {
  const location = useLocation()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const handleOpenLogoutModal = () => {
    setIsLogoutModalOpen(true)
  }

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false)
  }

  const handleConfirmLogout = () => {
    // Implement your logout logic here
    console.log('User logged out!')
    // For demonstration, redirecting to login after 1 second
    setTimeout(() => {
      window.location.href = '/login'
    }, 1000)
    setIsLogoutModalOpen(false)
  }

  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <img src={DashboardIcon} alt="Dashboard Icon" className="w-5 h-5" />
    },
    {
      name: 'Configuration',
      path: '/configuration',
      icon: <img src={ConfigurationIcon} alt="Configuration Icon" className="w-5 h-5" />
    },
    {
      name: 'Analyzer',
      path: '/analyzer',
      icon: <img src={AnalyzerIcon} alt="Analyzer Icon" className="w-5 h-5" />
    },
    {
      name: 'Utilities',
      path: '/utilities',
      icon: <img src={UtilitiesIcon} alt="Utilities Icon" className="w-5 h-5" />
    }
  ]

  const bottomNavItems = [
    {
      name: 'Account',
      path: '/account',
      icon: <img src={AccountIcon} alt="Account Icon" className="w-5 h-5" />
    },
    {
      name: 'Sign Out',
      onClick: handleOpenLogoutModal,
      icon: <img src={SignOutIcon} alt="Sign Out Icon" className="w-5 h-5" />
    }
  ]

  return (
    <div className="flex flex-col h-screen bg-[#0F1D17] w-64 text-white p-4 shadow-lg ">
      {/* Remove logo and title from here as it's now in TitleBar */}
      {/* <div className="flex items-center justify-start mb-10 mt-4">
        <img src={Logo} alt="SalientMotion Logo" className="h-8" />
        <span className="ml-3 text-white text-lg font-semibold">SalientMotion</span>
      </div> */}

        <div className='flex justify-beween items-center w-full'>
        <img src={logo} alt="logo" className=" w-36 h-12 " />
        <a href=""> <img src={sidebar} alt="logo" className=" w-24 h-6" /></a>
        </div>

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg text-white hover:bg-[#22392F] transition-colors duration-200
                  ${location.pathname === item.path ? 'bg-[#1F7550]' : ''}`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-4">
        <Link
          to="/connection"
          className={`flex items-center p-3 rounded-lg text-white transition-colors duration-200 mb-2
            ${location.pathname === '/connection' ? 'bg-[#1F7550] text-black' : 'bg-[#] hover:bg-[#22392F]'}`}
        >
          <span className="mr-3"><img src={DeviceIcon} alt="Device Icon" className="w-5 h-5" /></span>
          Device
          {location.pathname === '/connection' && (
            <span className="ml-auto w-3 h-3 bg-white rounded-full"></span>
          )}
        </Link>
        <ul>
          {bottomNavItems.map((item) => (
            <li key={item.name} className="mb-2">
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg text-white hover:bg-[#22392F] transition-colors duration-200
                    ${location.pathname === item.path ? 'bg-[#1F7550]' : ''}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={item.onClick}
                  className={`flex items-center p-3 rounded-lg text-white hover:bg-[#22392F] transition-colors duration-200 w-full text-left`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </div>
  )
}

export default Sidebar
