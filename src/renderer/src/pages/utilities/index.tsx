import React from 'react'
import FirmwareSvg from '../../assets/Firmware.svg'
import ConfigSvg from '../../assets/Config.svg'
import ReleaseSvg from '../../assets/Release.svg'
import BackupSvg from '../../assets/Backup.svg'

const Utilities: React.FC = () => {
  return (
    <div className="flex flex-col p-8 bg-dark-green-bg min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Utilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <UtilityCard icon={FirmwareSvg} title="Update Firmware" />
  <UtilityCard icon={ConfigSvg} title="Update Factory Config" />
  <UtilityCard icon={ReleaseSvg} title="Flash Release Software" />
  <UtilityCard icon={BackupSvg} title="Backup Factory Config" />
</div>
    </div>
  )
}

interface UtilityCardProps {
  icon: string
  title: string
}

const UtilityCard: React.FC<UtilityCardProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-between py-5 px-6 bg-[#1F7550] rounded-full cursor-pointer hover:bg-opacity-80 transition-colors">
      <div className="flex items-center justify-center">
        <div className='bg-neutral-500/40 h-12 w-12 rounded-full flex items-center justify-center  mr-4'> <img src={icon} alt={title} className="w-8 h-8 text-white" /></div>
        <span className="text-lg font-medium">{title}</span>
      </div>
      <span className="text-xl">›</span>
    </div>
  )
}

export default Utilities
