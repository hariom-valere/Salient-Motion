import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@renderer/assets/logo.svg'
const Login: React.FC = () => {
  return (
    <div className="min-h-screen w-100 flex items-center justify-center px-4">
      <div className="w-full rounded-xl text-center ">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className=" w-64 h-12 mb-2" />
        </div>
        <h1 className="mb-4 text-3xl font-semibold text-white text-center py-10 pb-5">Login</h1>

        {/* <p>Login to your account</p> */}
        <div className="flex items-center gap-2 text-sm">
          <form className="w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Email"
                className="w-full rounded-full bg-[#141e1a]/80 border border-[#23332c] px-6 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              />
            </div>
            <div className="w-full py-5 pb-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-full bg-[#141e1a]/80 border border-[#23332c] px-6 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              />
            </div>
            <div className="w-full text-end py-3 pt-0">
              <Link
                to="/reset-password"
                className="text-white hover:text-emerald-200 transition-colors border-b border-white text-sm"
              >
                Reset Password
              </Link>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg transition-colors shadow-lg shadow-emerald-900/20 w-full rounded-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
