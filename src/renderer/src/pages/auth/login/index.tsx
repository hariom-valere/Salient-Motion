import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  return (
    <div>
      <p>Login</p>
      <Link to="/">Go To Dashboard </Link> | <Link to="/reset-password">Reset Password</Link>
    </div>
  )
}

export default Login
