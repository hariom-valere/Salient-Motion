import logo from '@renderer/assets/logo.svg'
import ConfirmPasswordForm from '@renderer/components/Forms/auth/confirmPassword'
import SuccessModal from '@renderer/components/SuccessModal'
import React, { useState } from 'react'

const ConfirmPassword: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

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
          <ConfirmPasswordForm showModal={() => setShowModal(true)} />
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Your new password has been set."
        message="You can now log in using your updated credentials."
        buttonText="Go to Login"
        buttonLink="/"
      />
    </div>
  )
}

export default ConfirmPassword
