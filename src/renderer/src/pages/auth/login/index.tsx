import logo from '@renderer/assets/logo.svg'
import Button from '@renderer/components/Button'
import Input from '@renderer/components/Input'
import { Form } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-100 flex items-center justify-center px-4">
      <div className="w-full rounded-xl text-center ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className=" w-64 h-12 mb-2" />
        </div>
        <h1 className="mb-4 text-3xl font-semibold text-white text-center py-10 pb-5">Login</h1>
        <div className="flex items-center gap-2 text-sm">
          <Form className="w-full" onFinish={() => navigate('/connection')}>
            <Form.Item>
              <Input type="text" placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Password" type="password" />
            </Form.Item>
            <div className="text-end pb-3 pt-0">
              <Link
                to="/forget-password"
                className="text-white hover:text-emerald-200 transition-colors border-b border-white text-sm"
              >
                Forget Password
              </Link>
            </div>
            <div>
              <Button >Login</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
