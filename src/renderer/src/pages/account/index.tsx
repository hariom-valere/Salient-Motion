import React, { useState } from 'react'
import ChangePasswordModal from '@renderer/components/ChangePasswordModal'
import UpdateAccountModal from '@renderer/components/UpdateAccountModal'

const Account: React.FC = () => {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false)
  const [isUpdateAccountModalOpen, setIsUpdateAccountModalOpen] = useState(false)
  const [email, setEmail] = useState('test@salientmotion.com')
  const [organization, setOrganization] = useState('Salient Motion')

  const handleChangePasswordClick = (): void => {
    setIsChangePasswordModalOpen(true)
  }

  const handleCloseChangePasswordModal = (): void => {
    setIsChangePasswordModalOpen(false)
  }

  const handleUpdateClick = (): void => {
    setIsUpdateAccountModalOpen(true)
  }

  const handleConfirmUpdate = (): void => {
    console.log('Confirmed update:', { email, organization })
    // Here you would send the data to the backend
    setIsUpdateAccountModalOpen(false)
  }

  const handleCancelUpdate = (): void => {
    setIsUpdateAccountModalOpen(false)
  }

  return (
    <div className="flex flex-col items-start p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Account Details</h1>

      <div className="flex flex-col mb-4 w-full max-w-md">
        <label htmlFor="email" className="mb-2 text-lg">Email</label>
        <input
          type="email"
          id="email"
          className="w-full rounded-full bg-[#141e1a]/80 border border-[#23332c] px-6 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col mb-8 w-full max-w-md">
        <label htmlFor="organization" className="mb-2 text-lg">Organization</label>
        <input
          type="text"
          id="organization"
          className="w-full rounded-full bg-[#141e1a]/80 border border-[#23332c] px-6 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>

      <div className="flex space-x-4">
        <button
          className="px-6 py-3 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          onClick={handleChangePasswordClick}
        >
          Change Password
        </button>
        <button
          className="px-6 py-3 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </div>

      <ChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={handleCloseChangePasswordModal}
      />

      <UpdateAccountModal
        isOpen={isUpdateAccountModalOpen}
        onClose={handleCancelUpdate}
        onConfirm={handleConfirmUpdate}
        email={email}
        organization={organization}
      />
    </div>
  )
}

export default Account
 