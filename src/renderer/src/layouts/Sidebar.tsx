import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DashboardIcon from '../assets/Dashboard.svg'
import ConfigurationIcon from '../assets/Configuration.svg'
import AnalyzerIcon from '../assets/Analyzer.svg'
import UtilitiesIcon from '../assets/Utilities.svg'
import DeviceIcon from '../assets/device.svg'
import AccountIcon from '../assets/user.svg'
import SignOutIcon from '../assets/logout.svg'

import logo from '@renderer/assets/logo.svg'


const Sidebar: React.FC = () => {
  const location = useLocation()

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
      path: '/login',
      icon: <img src={SignOutIcon} alt="Sign Out Icon" className="w-5 h-5" />
    }
  ]

  return (
    <div className="flex flex-col h-screen bg-[#04100B] w-64 text-white p-4 shadow-lg">
      {/* Remove logo and title from here as it's now in TitleBar */}
      {/* <div className="flex items-center justify-start mb-10 mt-4">
        <img src={Logo} alt="SalientMotion Logo" className="h-8" />
        <span className="ml-3 text-white text-lg font-semibold">SalientMotion</span>
      </div> */}

        <img src={logo} alt="logo" className=" w-36 h-12 " />

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg text-white hover:bg-gray-700 transition-colors duration-200
                  ${location.pathname === item.path ? 'bg-[#1C2C26]' : ''}`}
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
            ${location.pathname === '/connection' ? 'bg-[#2ECC71] text-black' : 'bg-[#1C2C26] hover:bg-[#2ECC71]'}`}
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
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg text-white hover:bg-gray-700 transition-colors duration-200
                  ${location.pathname === item.path ? 'bg-[#1C2C26]' : ''}`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
