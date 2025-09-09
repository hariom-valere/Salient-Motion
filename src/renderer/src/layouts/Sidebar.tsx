import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/configuration">Configuration</Link>
        </li>
        <li>
          <Link to="/analyzer">Analyzer</Link>
        </li>
        <li>
          <Link to="/utilities">Utilities</Link>
        </li>
        <li>
          <Link to="/connection">Connect Device</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
