import React from 'react'
import { links } from './links'
import { Link } from 'react-router-dom'

function SideNav() {

  return (
    <nav className="hidden text-white/75 md:block w-60 h-full fixed bg-blue-800 rounded-xl z-20">
      <div className="p-3 flex-wrap w-full">
        {links.map((data) => (
   <Link to={data.ref}>  
   <div
            key={data.id}
            className="w-full cursor-pointer py-3 border-b border-gray-300/25 flex justify-between items-center  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
          >
   {data.title} {data.icon}
          </div>
   </Link>
        ))}
      </div>
    </nav>
  )
}

export default SideNav
