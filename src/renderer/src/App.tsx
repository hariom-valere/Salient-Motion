import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const Loading = <div>Loading...</div>

const App = () => {
  return (
    <Suspense fallback={Loading}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
export default App
