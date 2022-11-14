import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
      <footer class="" style={{ backgroundColor: '#121212' }}>
        <div
         
          class="  w-full pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8"
        >
          <div class="lg:pl-32 xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="xl:col-span-1 text-3xl font-bold text-white">
               InnoHomes
            </div>
            <div class="mt-12 flex w-full lg:ml-32  ">
              <div class="w-full flex justify-between  lg:space-x-12 ">
                <div class="flex-1">
                  <h4 class="text-sm font-semibold tracking-wider text-white uppercase">
                    LMS
                  </h4>
                  <ul class="mt-4">
                    <li class="mt-4">
                      <a
                        href="#"
                        class="text-sm md:text-base text-white/75 hover:text-white/50"
                      >
                        About
                      </a>
                    </li>
                 
                    <li class="mt-4">
                      <a
                        href="#"
                        class="text-sm md:text-base text-white/75 hover:text-white/50"
                      >
                        Investors
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="flex-1">
                  <h4 class="text-sm font-semibold tracking-wider text-white uppercase">
                    Legal
                  </h4>
                  <ul class="mt-4">
                    <li class="mt-4">
                      <a
                        href="#"
                        class="text-sm md:text-base text-white/75 hover:text-white/50"
                      >
                        Privacy
                      </a>
                    </li>
                    <li class="mt-4">
                      <a
                        href="#"
                        class="text-sm md:text-base text-white/75 hover:text-white/50"
                      >
                        Terms
                      </a>
                    </li>

                    
                  </ul>
                </div>

                <div class="flex-1">
                  <h4 class="text-sm font-semibold tracking-wider text-white uppercase">
                    Support
                  </h4>
                  <ul class="mt-4">
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-sm md:text-base text-white/75 hover:text-white/50"
                        >
                          Contact Us
                        </a>
                      </li>

                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-sm md:text-base text-white/75 hover:text-white/50"
                        >
                          FAQ
                        </a>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-12 border-t border-gray-200 pt-8">
            <p class="text-sm md:text-base text-white xl:text-center pb-3">
              © 2022 Inno Homes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
