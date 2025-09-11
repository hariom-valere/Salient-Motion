import React from "react";

const ConnectedDevice: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#04100B] ">
      <div className="bg-[#04100B] text-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-[#1C2B24]">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 111.414-1.414L8.5 11.793l6.793-6.793a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">Device Connected</h2>
        <p className="text-sm text-gray-400 text-center mt-1">
          Your device is now connected and ready to use
        </p>

        {/* Info */}
        <div className="mt-6 space-y-4 mb-8">
          <div className="flex justify-between text-sm">
            <span className="text-[#28DD8F]">Device Name</span>
            <span>My Device</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#28DD8F]">Tag:</span>
            <span>ABC</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#28DD8F]">Version</span>
            <span>1.1.1</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#28DD8F]">Status</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Connected
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 w-full bg-[#1F7550] hover:bg-[#1B8356] text-white font-medium py-3 rounded-full transition-colors">
          Go To My Device
        </button>
      </div>
    </div>
  );
};

export default ConnectedDevice;
