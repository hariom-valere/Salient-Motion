import React from 'react'

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message
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
        {/* Warning Icon (Optional: you can add a warning icon here if desired) */}
        <div className="text-center w-full flex justify-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-900/40 text-yellow-300">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title and Message */}
        <div className="py-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">{title}</h2>
          <p className="mt-3 text-center text-white/80 text-sm pt-3">{message}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="flex-1 bg-[#121D18] hover:bg-green-500/10 text-white font-semibold py-3 rounded-full shadow-lg shadow-gray-900/20"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-700 hover:bg-red-600 text-white font-semibold py-3 rounded-full shadow-lg shadow-red-900/20"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal
