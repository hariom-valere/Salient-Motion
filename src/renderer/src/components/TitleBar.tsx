import React from 'react';
import logo from '@renderer/assets/logo.svg'
import minimizeIcon from '@renderer/assets/minimize.svg';
import maximizeIcon from '@renderer/assets/maximize.svg';
import closeIcon from '@renderer/assets/close.svg';

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
      <div className="flex space-x-4">
        <button onClick={handleMinimize} className="w-4 h-4 flex items-center justify-center">
          <img src={minimizeIcon} alt="minimize" className="w-3 h-3" />
        </button>
        <button onClick={handleMaximize} className="w-4 h-4 flex items-center justify-center">
          <img src={maximizeIcon} alt="maximize" className="w-3 h-3" />
        </button>
        <button onClick={handleClose} className="w-4 h-4 flex items-center justify-center">
          <img src={closeIcon} alt="close" className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
