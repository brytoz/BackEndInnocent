import React from "react";
import { links } from "./links";
import { Link } from "react-router-dom";
import { BiLogOut } from 'react-icons/bi'
import axios from "axios";

function SideNav() {
  axios.defaults.withCredentials = true;
  const clearStorage = () => {
    axios.get(`${process.env.REACT_APP_DB}/logout`).then((data) => {
      localStorage.clear();
      window.location.reload(true);
    });
  };




  return (
    <nav className="hidden text-white/75 md:block w-60 h-full fixed bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-xl z-20">
      <div className="p-3 flex-wrap w-full">
        {links.map((data) => (
          <Link key={data.id} to={data.ref}>
            <div
              
              className="font-bold w-full cursor-pointer py-3 border-b border-gray-300/25 flex justify-between items-center  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
            >
              {data.title} {data.icon}
            </div>
          </Link>
        ))}

<div
          onClick={clearStorage}
          className="flex font-bold justify-between space-x-4 border-b border-gray-100 py-3  cursor-pointer items-center transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            Logout <BiLogOut size={25} />
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
