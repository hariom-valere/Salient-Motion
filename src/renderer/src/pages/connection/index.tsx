import React, { JSX, useState } from 'react'
import ConnectDevice from './ConnectDevice'
import ConnectedDevice from './ConnectedDevice'
import ConnectingDevice from './ConnectingDevice'
import DeviceInfo from './DeviceInfo'

enum StepType {
  NOT_CONNECTED = 'not-connected',
  LOADING = 'loading',
  CONNECTED = 'connected',
  SHOW_INFO = 'show-info'
}

const Connection: React.FC = () => {
  const [step, setStep] = useState<StepType>(StepType.NOT_CONNECTED)

  const steps: Record<StepType, JSX.Element> = {
    [StepType.NOT_CONNECTED]: (
      <ConnectDevice
        onNext={() => {
          setStep(StepType.LOADING)
          setTimeout(() => setStep(StepType.CONNECTED), 5000)
        }}
      />
    ),
    [StepType.LOADING]: <ConnectingDevice />,
    [StepType.CONNECTED]: (
      <ConnectedDevice onNext={() => setStep(StepType.SHOW_INFO)} />
    ),
    [StepType.SHOW_INFO]: (
      <DeviceInfo onDisconnect={() => setStep(StepType.NOT_CONNECTED)} />
    )
  }

  return steps[step]
}

export default Connection
