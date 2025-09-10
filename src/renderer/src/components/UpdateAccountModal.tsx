import React from 'react'
import SuccessModal from './SuccessModal'

interface UpdateAccountModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  email: string
  organization: string
}

const UpdateAccountModal: React.FC<UpdateAccountModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  email,
  organization,
}) => {
  if (!isOpen) return null

  return (
    <SuccessModal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirm Account Update"
      message={`Are you sure you want to update your account details to ${organization}?`}
      buttonText="Confirm Update"
      onButtonClick={onConfirm} // Use onButtonClick for confirmation
      cancelButtonText="Cancel"
      onCancelClick={onClose} // Use onCancelClick for cancellation
    />
  )
}

export default UpdateAccountModal
