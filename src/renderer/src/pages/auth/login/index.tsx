import logo from '@renderer/assets/logo.svg'
import LoginForm from '@renderer/components/Forms/auth/login'
import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="min-h-screen w-100 flex items-center justify-center px-4 m-auto m-auto">
      <div className="w-full rounded-xl text-center ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className=" w-64 h-12 mb-2" />
        </div>
        <h1 className="mb-4 text-3xl font-semibold text-white text-center py-10 pb-5">Login</h1>
        <div className="flex items-center gap-2 text-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
