/* eslint-disable */
import React, { useState } from 'react'

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => {
  return (
    <div className="flex items-center gap-6 py-3">
      <div className="w-64 text-sm text-gray-300">{label}</div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

const TextInput: React.FC<{ placeholder?: string; disabled?: boolean }>
  = ({ placeholder, disabled }) => (
  <input
    className={`w-full h-10 rounded-xl px-4 text-sm bg-[#0E1B15] border border-[#1E2C27] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2A8C66] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    placeholder={placeholder}
    disabled={disabled}
  />
)

const Toggle: React.FC<{ checked?: boolean; labelLeft?: string; labelRight?: string }>
  = ({ checked, labelLeft = 'Disabled', labelRight = 'Enabled' }) => (
  <div className="flex items-center gap-4">
    <span className="text-xs text-gray-400">{labelLeft}</span>
    <button
      type="button"
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-[#2A8C66]' : 'bg-[#22332C]'}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : 'translate-x-1'}`} />
    </button>
    <span className="text-xs text-gray-400">{labelRight}</span>
  </div>
)

const Section: React.FC<{ title: string; children: React.ReactNode }>
  = ({ title, children }) => (
  <div className="bg-[#0C1C15] rounded-2xl border border-[#1E2C27] p-6">
    <h2 className="sr-only">{title}</h2>
    {children}
  </div>
)

const Configuration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'workflow'>('all')

  const renderAllConfigurations = () => (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Section title="Left">
          <Field label="Motor Manufacturer"><TextInput placeholder="Annahein BLY24" /></Field>
          <Field label="Motor Model"><TextInput placeholder="BLY24" /></Field>
          <Field label="Input Mode"><TextInput placeholder="USB" /></Field>
          <Field label="Pole Pair Count"><TextInput placeholder="4" /></Field>
          <Field label="Control Mode"><TextInput placeholder="Speed" /></Field>
          <Field label="Max Throttle Speed"><TextInput placeholder="3000" /></Field>
          <Field label="Speed Control P Gain"><TextInput placeholder="0.60" /></Field>
          <Field label="Speed Control I Gain"><TextInput placeholder="0.5" /></Field>
          <Field label="MTPA"><Toggle checked={false} /></Field>
          <Field label="Flux Weakening"><Toggle checked={true} /></Field>
          <Field label="Throttle Step Size"><TextInput placeholder="10" /></Field>
          <Field label="Battery Current Limit"><TextInput placeholder="9" disabled /></Field>
          <Field label="Motor Current Limit"><TextInput placeholder="10" disabled /></Field>
        </Section>

        <Section title="Right">
          <Field label="Overtemperature Threshold"><TextInput placeholder="60" /></Field>
          <Field label="Resistance"><TextInput placeholder="7.486754e-2" /></Field>
          <Field label="Ld"><TextInput placeholder="8.288079e-5" /></Field>
          <Field label="Lq"><TextInput placeholder="1.246690e-4" /></Field>
          <Field label="Flux Linkage"><TextInput placeholder="9.06793e-3" /></Field>
          <Field label="Sensor Mode"><TextInput placeholder="Open Loop Startup" /></Field>
          <Field label="Motor Open Loop Acceleration"><TextInput placeholder="30" /></Field>
        </Section>
      </div>

      <div className="flex items-center justify-between mt-10">
        <button className="px-12 py-3 rounded-full border border-[#402121] text-[#D85B5B] bg-transparent hover:bg-[#1E1111] transition-colors">Clear</button>
        <button className="px-12 py-3 rounded-full bg-[#2A8C66] text-white border border-[#2A3A34] hover:bg-[#2E9B70] transition-colors shadow-lg">Export</button>
      </div>
    </>
  )

  const renderWorkflowConfigurations = () => {
    const items = [
      'Position Control',
      'Hardware Limits',
      'Automated Parameter Detection',
      'Sensors Configuration'
    ]
    return (
      <>
        <div className="bg-[#0C1C15] rounded-2xl border border-[#1E2C27] mt-8">
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#1E2C27]">
            <h1 className="text-2xl font-semibold">Select Workflow</h1>
            <button className="text-gray-300 hover:text-white transition-colors" aria-label="collapse">
              <span>▾</span>
            </button>
          </div>
          <ul className="divide-y divide-[#1E2C27]">
            {items.map((label) => (
              <li key={label} className="group">
                <button className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-[#0F221A] transition-colors">
                  <span className="text-base">{label}</span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-10">
          <button className="px-12 py-3 rounded-full border border-[#2A3A34] text-gray-300 bg-transparent hover:bg-[#0F221A] transition-colors w-[40%]">Clear</button>
          <button className="px-12 py-3 rounded-full bg-[#2A3A34] text-white border border-[#2A3A34] w-[40%]">Save</button>
        </div>
      </>
    )
  }

  return (
    <div className="w-full h-full bg-[#07150E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#0C1C15] rounded-2xl border border-[#1E2C27] p-3">
          <div className="flex bg-[#0E1B15] rounded-2xl ">
            <button
              className={`flex-1 h-12 rounded-xl font-medium ${activeTab === 'all' ? 'bg-[#2A8C66] text-white' : 'text-gray-300'}`}
              onClick={() => setActiveTab('all')}
            >
              All Configurations
            </button>
            <button
              className={`flex-1 h-12 rounded-xl font-medium ${activeTab === 'workflow' ? 'bg-[#2A8C66] text-white' : 'text-gray-300'}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow Configurations
            </button>
          </div>
        </div>

        {activeTab === 'all' ? renderAllConfigurations() : renderWorkflowConfigurations()}
      </div>
    </div>
  )
}

export default Configuration
