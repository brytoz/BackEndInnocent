import React, { Fragment, useState, useEffect } from 'react'
 
import user from "../../assets/user.png"
import MobileNavbar from '../MobileNavbar'
import NavBar  from '../NavBar'

function Hero() {

  const [loader, setLoader] = useState(true)
 

  return (
    <Fragment>
    

    <div className='bg-red-500 ' >
            
      <section dataSectionId="1" dataShare="" dataCategory="headers" dataComponentId="44d0b9e2_01_awz">
        <div className="container px-4 mx-auto">
         <NavBar />
          <div className="flex flex-wrap items-center mt-12 -mx-4 lg:my-10 justify-center ">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 justify-center flex-wrap text-center md:text-left ">
              <h2 className="mb-8 text-4xl lg:text-5xl font-bold md:max-w-sm" data-config-id="header ">Take care of your performance every day.</h2>
              <p className="mb-6 text-lg text-gray-500 leading-loose max-w-lg" data-config-id="desc">Build a well-presented brand that everyone will love. Take care to develop resources continually and integrity them with previous projects.</p>
              <div className="flex flex-wrap justify-center md:justify-start"><a className="inline-block px-6 py-2 mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200" href="#" data-config-id="hero-primary-action">Track your performance</a><a className="inline-block px-6 py-2 text-sm text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#" data-config-id="hero-secondary-action">Learn More</a></div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img className="object-cover w-full rounded-xl" src={user} title="okay" alt="" dataConfigId="image" />
            </div>
            <button className="block mt-10 lg:mt-20 mx-auto w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
              <svg className="mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" dataConfigId="auto-svg-2-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
 

    </Fragment>
  )
}

export default Hero

