import Button from '@renderer/components/Button'
import Input from '@renderer/components/Input'
import { Form, message } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordForm: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  const handleSubmit = async ({ email }: { email: string }) => {
    try {
      const res = await window.api.auth.forgotPassword(email)

      if (res.success) {
        showModal()
      } else {
        message.error(res.message || 'No user found with that email.')
      }
    } catch (error) {
      console.error('Forgot password error:', error)
      message.error('Something went wrong. Please try again.')
    }
  }

  return (
    <Form className="w-full" onFinish={handleSubmit}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Email is required!' },
          { type: 'email', message: 'Invalid email!' }
        ]}
      >
        <Input type="text" placeholder="Email" />
      </Form.Item>

      <div>
        <Button type="submit">Resend Code</Button>
        <div className="w-full text-center pt-3">
          <Link to="/" className="text-white hover:text-emerald-200 transition-colors">
            Back to Login
          </Link>
        </div>
      </div>
    </Form>
  )
}

export default ForgotPasswordForm
