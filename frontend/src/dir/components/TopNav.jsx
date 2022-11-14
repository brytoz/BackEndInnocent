import React from 'react'
import useAuth from "../contexts/useAuth";

function TopNav() {
  const { user } = useAuth();
  return (
    <nav
      className="w-full h-16  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  z-30 rounded-xl flex items-center text-white"
    >
        <div className="p-3 flex-wrap w-full flex justify-between ">
            <div className='capitalize'> Hello {user}</div>
            <div> Welcome Back</div>
        </div>
    </nav>
  )
}

export default TopNav
