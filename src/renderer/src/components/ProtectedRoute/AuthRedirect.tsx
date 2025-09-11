import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@renderer/context/AuthContext'

const AuthRedirect: React.FC = () => {
  const { token } = useAuth()

  if (token) {
    return <Navigate to="/connection" replace />
  }
  return <Navigate to="/login" replace />
}

export default AuthRedirect
