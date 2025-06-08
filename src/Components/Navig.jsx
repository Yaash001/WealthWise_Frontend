import React from 'react'
import { Link } from 'react-router-dom'

export default function Navig() {
  return (
    <nav className="w-full h-30 p-5 bg-[#818589] top-0 left-0 text-black flex justify-between items-center  px-8 shadow-md z-50">
      <h1 className="ml-6 text-[35px] font-extrabold text-[aliceblue] hover:text-black transition-colors duration-300">
        <Link to="/">WealthWise</Link>
      </h1>
      <div className="pr-5 flex items-center space-x-6">
        <Link to="/dashboard" className="text-[20px] text-[#FFF4CE] px-3 transition-colors duration-9000 hover:bg-[#0d031b] hover:rounded-xl hover:text-[#FFF4CE]">
          HOME
        </Link>
        <Link to="/Login" className=" text-[#FFF4CE] text-[20px] px-3 transition-colors duration-300 hover:bg-[#0d031b] hover:rounded-xl hover:text-[#FFF4CE]">
          LOGIN
        </Link>
        <Link to="/Signup" className="text-[#FFF4CE] text-[20px] px-3 transition-colors duration-300 hover:bg-[#0d031b] hover:rounded-xl hover:text-[#FFF4CE]">
          SIGNUP
        </Link>
      </div>
    </nav>
  )
}
