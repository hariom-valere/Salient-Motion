import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword: React.FC = () => {
  return (
    <div>
      <p>ResetPassword</p>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default ResetPassword
