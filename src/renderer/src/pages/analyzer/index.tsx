/* eslint-disable linebreak-style */
import React from 'react'

const Analyzer: React.FC = () => {
  const items = [
    { id: 'builtin', label: 'Builtin Test' },
    { id: 'faults', label: 'Read Lifetime Faults' },
    { id: 'pid', label: 'PID Tuning' },
    { id: 'sensors', label: 'Sensors Configuration' }
  ]

  return (
    <div className="w-full h-full bg-[#07150E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#0C1C15] rounded-2xl border border-[#1E2C27]">
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#1E2C27]">
            <h1 className="text-2xl font-semibold">Select Analysis</h1>
            <button
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="collapse"
            >
              <span>▾</span>
            </button>
          </div>
          <ul className="divide-y divide-[#1E2C27]">
            {items.map((item) => (
              <li key={item.id} className="group">
                <button
                  className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-[#0F221A] transition-colors"
                  onClick={() => console.log('Click:', item.id)}
                >
                  <span className="text-base">{item.label}</span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed right-8 top-14">
        <button
          className="px-8 py-3 rounded-full bg-[#1E2C27] text-white border border-[#2A3A34] hover:bg-[#20362D] transition-colors shadow-lg"
          onClick={() => console.log('Run clicked')}
        >
          Run
        </button>
      </div>
    </div>
  )
}

export default Analyzer
