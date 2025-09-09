import React, { useState } from 'react'
import logo from '@renderer/assets/logo.svg'
import { Link } from 'react-router-dom'
import PasswordInput from '@renderer/components/PasswordInput'
import SuccessModal from '@renderer/components/SuccessModal'

const SetPassword: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    
    // Show success modal
    setShowModal(true)
  }

  const handleCloseModal = (): void => {
    setShowModal(false)
  }

  return (
    <div className="min-h-screen w-100 flex items-center justify-center px-4 m-auto">
      <div className="w-full rounded-xl text-center ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className=" w-64 h-12 mb-2" />
        </div>
        <h1 className="mb-2 text-3xl font-semibold text-white text-center py-10 pb-2">
          Set Password
        </h1>
        <p className="text-white/70 text-center pb-5">Create your new password</p>

        <div className="flex items-center gap-2 text-sm ">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <PasswordInput 
                placeholder="New Password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="w-full py-5 pb-2">
              <PasswordInput 
                placeholder="Confirm New Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="w-full pt-5">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-colors shadow-lg shadow-emerald-900/20 w-full rounded-full"
              >
                Set Password
              </button>
            </div>
            <div className="w-full text-center pt-3">
              <Link to="/login" className="text-white hover:text-emerald-200 transition-colors">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Your new password has been set."
        message="You can now log in using your updated credentials."
        buttonText="Go to Login"
        buttonLink="/login"
      />
    </div>
  )
}

export default SetPassword
