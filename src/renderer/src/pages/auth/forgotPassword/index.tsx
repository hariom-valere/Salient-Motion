import logo from '@renderer/assets/logo.svg'
import ForgotPasswordForm from '@renderer/components/Forms/auth/forgotPassword'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-100 flex items-center justify-center px-4 m-auto">
      <div className="w-full rounded-xl text-center ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className=" w-64 h-12 mb-2" />
        </div>
        <h1 className="mb-4 text-3xl font-semibold text-white text-center py-10 pb-5">
          Forgot Password
        </h1>

        {/* <p>Login to your account</p> */}
        <div className="flex items-center gap-2 text-sm">
          <ForgotPasswordForm showModal={() => setIsModalOpen(true)} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsModalOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            className="relative z-10 mx-4 w-full max-w-lg rounded-3xl bg-[#0f1714] text-white p-8 shadow-2xl border border-[#23332c] text-center"
          >
            <div className="text-center w-full flex justify-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path d="M1.5 5.25A.75.75 0 0 1 2.25 4.5h19.5a.75.75 0 0 1 .43 1.37l-9.75 7.125a1.5 1.5 0 0 1-1.71 0L1.82 5.87A.75.75 0 0 1 1.5 5.25Z" />
                  <path d="M22.5 7.03v11.72a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V7.03l8.63 6.31a3 3 0 0 0 3.44 0l8.93-6.31Z" />
                </svg>
              </div>
            </div>

            <div className="py-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-center">
                Code Sent Successfully
              </h2>
              <p className="mt-3 text-center text-white/80 text-sm pt-3">
                We&apos;ve sent a password reset code to your registered email address.
              </p>
              <p className="mt-1 text-center text-white/60 text-xs">
                Please check your inbox (and spam foldere ) to continue resetting your password.
              </p>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(false)
                navigate('/confirm-password')
              }}
              className="mt-6 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 w-full rounded-full shadow-lg shadow-emerald-900/20"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword
