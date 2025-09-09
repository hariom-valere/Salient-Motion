import '@ant-design/v5-patch-for-react-19'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const Loading = (
  <div className="flex items-center justify-center h-screen w-screen bg-black">
    <div className="text-white text-lg">Loading...</div>
  </div>
)

const App = () => {
  return (
    <Suspense fallback={Loading}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
