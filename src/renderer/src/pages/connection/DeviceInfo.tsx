import React from 'react'

const DeviceInfo: React.FC<{ onDisconnect: () => void }> = ({ onDisconnect }) => {
  return (
    <div className="h-screen w-full bg-[#04100B] text-white p-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6">Device</h1>

      {/* Device Card */}
      <div className="bg-[#0F1D17] border border-[#1C2B24] rounded-xl p-6 w-full max-w-md shadow-lg">
        {/* Header with name & button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Vortex Controller</h2>
          <button
            onClick={onDisconnect}
            className="px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
          >
            Disconnect Device
          </button>
        </div>

        {/* Device Details */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Version:</span>
            <span>1.11</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tag:</span>
            <span>ABC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">SHA</span>
            <span>08749c</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceInfo
