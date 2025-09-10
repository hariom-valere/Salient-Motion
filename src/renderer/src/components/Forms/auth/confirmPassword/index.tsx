import Button from '@renderer/components/Button'
import Input from '@renderer/components/Input'
import { Form } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmPasswordForm: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  return (
    <Form className="w-full" onFinish={() => showModal()} layout="vertical">
      {/* Password field */}
      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 6, message: 'Password must be at least 6 characters' }
        ]}
      >
        <Input placeholder="New Password" type="password" />
      </Form.Item>

      {/* Confirm Password field */}
      <Form.Item
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Passwords do not match'))
            }
          })
        ]}
      >
        <Input placeholder="Confirm New Password" type="password" />
      </Form.Item>

      {/* Submit button */}
      <div className="w-full pt-5">
        <Button type="submit">Set Password</Button>
      </div>

      {/* Back to login */}
      <div className="w-full text-center pt-3">
        <Link to="/" className="text-white hover:text-emerald-200 transition-colors">
          Back to Login
        </Link>
      </div>
    </Form>
  )
}

export default ConfirmPasswordForm
