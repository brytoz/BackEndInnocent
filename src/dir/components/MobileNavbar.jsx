import React , {useState, useEffect, useReducer} from 'react'
import user from "../assets/user.png"
import { myCounter, initialState } from '../reducer/navReducer'


function MobileNavbar({click}) {
 

  return (
    <div class= " navbar-menu fixed  top-0 left-0 bottom-0 w-5/6 max-w-sm z-50" >
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div class="flex items-center mb-8">
        <a class="mr-auto text-2xl font-semibold leading-none" href="#" >
          <img class="h-8" src={user} alt="" width="auto" />
        </a>
        <button onClick={click} class="navbar-close">
          <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-config-id="auto-svg-3-1">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link1">About</a></li>
          <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link2">Company</a></li>
          <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link3">Services</a></li>
          <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#" data-config-id="link4">Testimonials</a></li>
        </ul>
      </div>
      <div class="mt-auto">
        <div class="pt-6"><a class="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#" data-config-id="primary-action">Contact Us</a></div>
        <p class="mt-6 mb-4 text-sm text-center text-gray-400">
          <span data-config-id="copy">© 2021 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
  )
}

export default MobileNavbar
