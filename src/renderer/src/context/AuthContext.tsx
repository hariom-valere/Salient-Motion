import useOnlineStatus from '@renderer/hooks/useOnlineStatus'
import React, { createContext, ReactNode, useContext, useState } from 'react'

type AuthContextType = {
  token: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('authToken')
  })

  const isOnlineMode = useOnlineStatus()

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await window.api.auth.login({ email, password }, { isOnlineMode })
      if (res.success && res.token) {
        setToken(res.token)
        localStorage.setItem('authToken', res.token)
        return true
      }
      return false
    } catch (err) {
      console.error('Login error:', err)
      return false
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('authToken')
    window.api.auth.logout()
  }

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
