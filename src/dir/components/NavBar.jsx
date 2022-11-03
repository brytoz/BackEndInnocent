import React, { useState, Fragment, useReducer } from 'react'
import logo from '../assets/love_text_black.png'
import MobileNavbar from './MobileNavbar'
import { myCounter, initialState } from '../reducer/navReducer'

function NavBar() {
  const [state, dispatch] = useReducer(myCounter, initialState)


  const closeNav = () => {
    dispatch({ type: 'closeNav' })
  }

  const openNav = () => {
    dispatch({ type: 'openNav' })
  }

  return (
    <Fragment>
      <div className={state.open ? 'block ' : 'hidden'}>
        <MobileNavbar click={closeNav} />
      </div>
      <nav className="flex justify-between items-center py-8">
        <a className="text-gray-600 text-2xl leading-none" href="#">
          <img className="h-8" src={logo} alt="" width="auto" />
        </a>
        <div className="lg:hidden">
          <button
            onClick={openNav}
            className="block navbar-burger text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              dataConfigId="auto-svg-1-1"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
          <li>
            <a
              className="text-sm text-gray-500 hover:text-gray-700"
              href="#"
              data-config-id="link1"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-sm text-gray-500 hover:text-gray-700"
              href="#"
              data-config-id="link2"
            >
              Company
            </a>
          </li>
          <li>
            <a
              className="text-sm text-gray-500 hover:text-gray-700"
              href="#"
              data-config-id="link3"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-sm text-gray-500 hover:text-gray-700"
              href="#"
              data-config-id="link4"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:block px-6 py-3 text-sm text-gray-500 hover:text-gray-600 font-bold border border-gray-100 hover:border-gray-200 rounded"
          href="#"
          data-config-id="primary-action"
        >
          Contact Us
        </a>
      </nav>
    </Fragment>
  )
}

export default NavBar
