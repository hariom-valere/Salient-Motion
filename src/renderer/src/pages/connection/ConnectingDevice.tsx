import React from 'react'

const ConnectingDevice: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#04100B] text-white p-4">
      {/* Placeholder for the device not connected icon */}

      <div id="wifi-loader">
        <svg className="circle-outer" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40"></circle>
          <circle className="front" cx="43" cy="43" r="40"></circle>
          <circle className="new" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg className="circle-middle" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27"></circle>
          <circle className="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg className="circle-inner" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14"></circle>
          <circle className="front" cx="17" cy="17" r="14"></circle>
        </svg>
      </div>

      <h1 className="text-4xl font-black mb-4 pt-6">Connecting to Device</h1>
      <p className="text-md text-stone-800 mb-8 text-center">
        Please wait while we establish a secure connection...
      </p>
    </div>
  )
}

export default ConnectingDevice
