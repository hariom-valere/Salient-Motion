import React, { useState } from 'react'
import PasswordInput from './PasswordInput'

interface ChangePasswordModalProps {
  isOpen: boolean
  onClose: () => void
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 mx-4 w-full max-w-lg rounded-3xl bg-[#0f1714] text-white p-8 shadow-2xl border border-[#23332c] text-center"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <PasswordInput
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <PasswordInput
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="mt-6  bg-[#121D18] hover:bg-green-500/10 text-white font-semibold py-3 w-full rounded-full shadow-lg shadow-gray-900/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mt-6 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 w-full rounded-full shadow-lg shadow-emerald-900/20"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordModal
