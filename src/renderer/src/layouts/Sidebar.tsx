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
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const handleOpenLogoutModal = () => setIsLogoutModalOpen(true)
  const handleCloseLogoutModal = () => setIsLogoutModalOpen(false)

  const handleConfirmLogout = () => {
    console.log('User logged out!')
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
    setIsLogoutModalOpen(false)
  }

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { name: 'Configuration', path: '/configuration', icon: ConfigurationIcon },
    { name: 'Analyzer', path: '/analyzer', icon: AnalyzerIcon },
    { name: 'Utilities', path: '/utilities', icon: UtilitiesIcon }
  ]

  const bottomNavItems = [
    { name: 'Account', path: '/account', icon: AccountIcon },
    { name: 'Sign Out', onClick: handleOpenLogoutModal, icon: SignOutIcon }
  ]

  return (
    <div
      className={`flex flex-col h-screen bg-[#0F1D17] text-white p-4 shadow-lg transition-all duration-300 sticky top-0 
        ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Top section with logo + toggle */}
      <div className="flex items-center justify-between w-full mb-6 text-center">
        {!isCollapsed && <img src={logo} alt="logo" className="w-36 h-12" />}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <img src={sidebar} alt="toggle" className="w-6 h-6 m-0 p-0" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg hover:bg-[#22392F] transition-colors duration-200
                  ${location.pathname === item.path ? 'bg-[#1F7550]' : ''}`}
              >
                <img src={item.icon} alt={`${item.name} Icon`} className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Device link */}
      <div className="mb-4">
        <Link
          to="/connection"
          className={`flex items-center p-3 rounded-lg transition-colors duration-200 mb-2
            ${location.pathname === '/connection' ? 'bg-[#1F7550]' : 'hover:bg-[#22392F]'}`}
        >
          <img src={DeviceIcon} alt="Device Icon" className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3">Device</span>}
          {location.pathname === '/connection' && (
            <span className="ml-auto w-3 h-3 bg-white rounded-full"></span>
          )}
        </Link>

        {/* Bottom Nav */}
        <ul>
          {bottomNavItems.map((item) => (
            <li key={item.name} className="mb-2">
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg hover:bg-[#22392F] transition-colors duration-200
                    ${location.pathname === item.path ? 'bg-[#1F7550]' : ''}`}
                >
                  <img src={item.icon} alt={`${item.name} Icon`} className="w-5 h-5" />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              ) : (
                <button
                  onClick={item.onClick}
                  className="flex items-center p-3 rounded-lg hover:bg-[#22392F] transition-colors duration-200 w-full text-left"
                >
                  <img src={item.icon} alt={`${item.name} Icon`} className="w-5 h-5" />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Modal */}
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
