import Button from '@renderer/components/Button'
import Input from '@renderer/components/Input'
import { Form } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordForm: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = () => {
    showModal()
  }

  return (
    <Form className="w-full" onFinish={handleSubmit}>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: 'Email is required!' },
          { type: 'email', message: 'Invalid email!' }
        ]}
      >
        <Input type="text" placeholder="Email" />
      </Form.Item>

      <div>
        <Button type="submit">Resend Code</Button>
        <div className="w-full text-center  pt-3">
          <Link to="/" className="text-white hover:text-emerald-200 transition-colors">
            Back to Login
          </Link>
        </div>
      </div>
    </Form>
  )
}

export default ForgotPasswordForm
