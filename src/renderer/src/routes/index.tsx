import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Layout
import AppLayout from '@renderer/layouts'

// Lazy-loaded pages
const Dashboard = lazy(() => import('@renderer/pages/dashboard'))
const Configuration = lazy(() => import('@renderer/pages/configuration'))
const Analyzer = lazy(() => import('@renderer/pages/analyzer'))
const Utilities = lazy(() => import('@renderer/pages/utilities'))
const Connection = lazy(() => import('@renderer/pages/connection'))
const Account = lazy(() => import('@renderer/pages/account'))
const Login = lazy(() => import('@renderer/pages/auth/login'))
const ForgetPassword = lazy(() => import('@renderer/pages/auth/forgetPassword'))
const SetPassword = lazy(() => import('@renderer/pages/auth/setPassword'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'configuration', element: <Configuration /> },
      { path: 'analyzer', element: <Analyzer /> },
      { path: 'utilities', element: <Utilities /> },
      { path: 'connection', element: <Connection /> },
      { path: 'account', element: <Account /> }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/forget-password', element: <ForgetPassword /> },
  { path: '/set-password', element: <SetPassword /> }
])
