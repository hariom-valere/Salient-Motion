import React, { useState } from 'react'
import ChangePasswordModal from '@renderer/components/ChangePasswordModal'
import UpdateAccountModal from '@renderer/components/UpdateAccountModal'

const Account: React.FC = () => {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false)
  const [isUpdateAccountModalOpen, setIsUpdateAccountModalOpen] = useState(false)
  const [email, setEmail] = useState('test@salientmotion.com')
  const [organization, setOrganization] = useState('Salient Motion')

  const handleChangePasswordClick = (): void => setIsChangePasswordModalOpen(true)
  const handleCloseChangePasswordModal = (): void => setIsChangePasswordModalOpen(false)
  const handleConfirmUpdate = (): void => {
    console.log('Confirmed update:', { email, organization })
    setIsUpdateAccountModalOpen(false)
  }
  const handleCancelUpdate = (): void => setIsUpdateAccountModalOpen(false)

  return (
    <div className="flex flex-col items-start p-4 sm:p-8 text-white w-full">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Account Details</h1>

      <div className="w-full max-w-3xl space-y-6">
        {/* Email */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
          <label htmlFor="email" className="text-base sm:text-lg sm:w-40">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="flex-1 w-full rounded-full bg-[#141e1a]/80 border border-[#23332c] px-4 py-3 sm:px-6 sm:py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Organization */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
          <label htmlFor="organization" className="text-base sm:text-lg sm:w-40">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            className="flex-1 w-full rounded-full bg-[#141e1a]/80 border border-[#23332c] px-4 py-3 sm:px-6 sm:py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-3xl">
        <button
          className="px-6 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors w-full sm:w-1/3"
          onClick={handleChangePasswordClick}
        >
          Change Password
        </button>
        <button
          className="px-6 py-3 rounded-full bg-[#20342B] text-white hover:bg-[#1F7550] transition-colors w-full sm:w-1/3"
          onClick={() => setIsUpdateAccountModalOpen(true)}
        >
          Update
        </button>
      </div>

      {/* Modals */}
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
