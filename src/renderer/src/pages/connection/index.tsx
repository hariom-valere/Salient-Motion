import React from 'react'

const Connection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0A1915] text-white p-4">
      <span className="text-6xl mb-6">🔌</span> {/* Placeholder for the device not connected icon */}
      <h1 className="text-4xl font-bold mb-4">Device not connected</h1>
      <p className="text-lg text-gray-400 mb-8 text-center">
        Please connect a device to your account to start managing your network connections.
      </p>
      <button className="bg-[#1F7550] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#2ECC71] transition-colors duration-200">
        Connect Device
      </button>
    </div>
  )
}

export default Connection
