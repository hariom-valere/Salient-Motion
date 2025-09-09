import 'antd/dist/reset.css'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import '@ant-design/v5-patch-for-react-19';

const Loading = <div>Loading...</div>

const App = () => {
  return (
    <Suspense fallback={Loading}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
export default App
