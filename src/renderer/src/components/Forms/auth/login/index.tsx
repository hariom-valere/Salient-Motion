import Button from '@renderer/components/Button'
import Input from '@renderer/components/Input'
import { useAuth } from '@renderer/context/AuthContext'
import { Form, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (values: { email: string; password: string }) => {
    const success = await login(values.email, values.password)
    if (success) {
      message.success('Login successful!')
      navigate('/connection')
    } else {
      message.error('Invalid email or password!')
    }
  }
  return (
    <Form className="w-full" onFinish={handleSubmit}>
      <Form.Item
        rules={[
          { required: true, message: 'Email is required!' },
          { type: 'email', message: 'Invalid email!' }
        ]}
        name="email"
      >
        <Input type="text" placeholder="Email" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: 'Password is required!' }]} name="password">
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
