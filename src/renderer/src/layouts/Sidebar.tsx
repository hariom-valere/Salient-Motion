import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <>
      <ul style={{display:"flex", justifyContent:"space-around"}}>
        <li>
          <Link to="/dashboard">Dashboard</Link>|
        </li>
        <li>
          <Link to="/configuration">Configuration</Link>|
        </li>
        <li>
          <Link to="/analyzer">Analyzer</Link>|
        </li>
        <li>
          <Link to="/utilities">Utilities</Link>|
        </li>
          <li>
          <Link to="/login">Go to login</Link>
        </li>
      </ul>
    </>
  )
}

export default Sidebar
