import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie'

const Header = () => {
  const getUser = async()=>{
    const user = fetch('http://localhost:3000/api/v1/getuser',{
      method:"GET",
      credentials:"include"
    })
    const data = await res.json()
    console.log(data)
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className="w-full sticky flex items-center justify-center top-3 sm: p-2 z-1">
      <div className="flex justify-around items-center px-8 py-3 bg-white/40 backdrop-blur-lg border border-white/60 rounded-full shadow-lg sm:w-full md:w-[50%] gap-4">
       <NavLink className="text-gray-900 text-xl font-bold" to={'/'}>
        rizz
       </NavLink>

        <div className="flex gap-8 text-gray-700">
          <NavLink 
            to="/howitworks"
            className="hover:text-gray-900 font-medium transition-colors"
          >
            How It Works
          </NavLink>
          <NavLink 
            to="/pricing"
            className="hover:text-gray-900 font-medium transition-colors"
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/login"
            className="hover:text-gray-900 font-medium transition-colors"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
