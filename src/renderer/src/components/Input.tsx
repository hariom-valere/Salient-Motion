import { Input as NativeInput, InputProps } from 'antd'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'

const Input: React.FC<InputProps> = (props) => {
  if (props?.type === 'password') {
    return (
      <NativeInput.Password
        rootClassName="custom-input"
        iconRender={(visible) =>
          visible ? (
            <EyeOff size={18} color="rgba(255,255,255,0.7)" />
          ) : (
            <Eye size={18} color="rgba(255,255,255,0.5)" />
          )
        }
        {...props}
      />
    )
  }

  return <NativeInput rootClassName="custom-input" {...props} />
}

export default Input
