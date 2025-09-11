import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Layout
import ProtectedRoute from '@renderer/components/ProtectedRoute'
import AppLayout from '@renderer/layouts'

// Lazy-loaded pages
const Dashboard = lazy(() => import('@renderer/pages/dashboard'))
const Configuration = lazy(() => import('@renderer/pages/configuration'))
const Analyzer = lazy(() => import('@renderer/pages/analyzer'))
const Utilities = lazy(() => import('@renderer/pages/utilities'))
const Connection = lazy(() => import('@renderer/pages/connection'))
const Account = lazy(() => import('@renderer/pages/account'))
const Login = lazy(() => import('@renderer/pages/auth/login'))
const ForgotPassword = lazy(() => import('@renderer/pages/auth/forgotPassword'))
const ConfirmPassword = lazy(() => import('@renderer/pages/auth/confirmPassword'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    index: true
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'configuration', element: <Configuration /> },
          { path: 'analyzer', element: <Analyzer /> },
          { path: 'utilities', element: <Utilities /> },
          { path: 'connection', element: <Connection /> },
          { path: 'account', element: <Account /> }
        ]
      }
    ]
  },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/confirm-password', element: <ConfirmPassword /> }
])
