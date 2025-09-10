import Button from '@renderer/components/Button'
import Input from '@renderer/components/Input'
import { Form } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Form className="w-full" onFinish={() => navigate('/connection')}>
      <Form.Item rules={[{ required: true, message: 'email is required' }]} name="email">
        <Input type="text" placeholder="Email" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: 'password is required' }]} name="password">
        <Input placeholder="Password" type="password" />
      </Form.Item>
      <div className="text-end pb-3 pt-0">
        <Link
          to="/forgot-password"
          className="text-white hover:text-emerald-200 transition-colors border-b border-white  text-sm"
        >
          Forgot Password?
        </Link>
      </div>
      <div>
        <Button type="submit">Login</Button>
      </div>
    </Form>
  )
}

export default LoginForm
