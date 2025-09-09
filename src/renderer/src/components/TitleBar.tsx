import React from 'react';
import logo from '@renderer/assets/logo.svg'

const TitleBar: React.FC = () => {
  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window');
  };

  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize-window');
  };

  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window');
  };

  return (
    <div className="flex justify-between items-center w-full h-8 bg-[#04100B] text-white pr-4">
      <div className="flex items-center space-x-2 draggable">
        <img src={logo} alt="logo" className=" w-36 h-12 m-auto" />
      </div>
   
    </div>
  );
};

export default TitleBar;
