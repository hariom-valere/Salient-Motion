import React from 'react'
import ConnectDevice from './ConnectDevice'
import ConnectedDevice from './ConnectedDevice'
import ConnectingDevice from './ConnectingDevice'
import DeviceInfo from './DeviceInfo'

const Connection: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center h-screen bg-[#04100B] text-white p-4">
      <span className="text-6xl mb-6">🔌</span> {/* Placeholder for the device not connected icon */}
      <h1 className="text-4xl font-bold mb-4">Device not connected</h1>
      <p className="text-md text-gray-800 mb-8 text-center">
        Please connect a device to your account to start managing your network connections.
      </p>
      <button className="bg-[#1F7550] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#2ECC71] transition-colors duration-200 text-white">
        Connect Device
      </button>
    </div>
=======
    <>
      <ConnectDevice />
      <ConnectingDevice />
      <ConnectedDevice />
      <DeviceInfo />
    </>
>>>>>>> 59e115a67bf53dab3f7951599d2cfb8ccb4b44fe
  )
}

export default Connection
