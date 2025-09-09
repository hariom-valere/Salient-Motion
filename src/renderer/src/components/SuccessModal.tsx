import React from 'react'
import { Link } from 'react-router-dom'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  buttonText: string
  buttonLink: string
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText,
  buttonLink
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 mx-4 w-full max-w-lg rounded-3xl bg-[#0f1714] text-white p-8 shadow-2xl border border-[#23332c] text-center"
      >
        {/* Success Icon */}
        <div className="text-center w-full flex justify-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-300">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title and Message */}
        <div className="py-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">
            {title}
          </h2>
          <p className="mt-3 text-center text-white/80 text-sm pt-3">
            {message}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            onClose()
            window.location.href = buttonLink
          }}
          className="mt-6 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 w-full rounded-full shadow-lg shadow-emerald-900/20"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default SuccessModal
