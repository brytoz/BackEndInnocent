import React from 'react'
import Cards from '../Cards'

function Section() {
  return (
    <div className=" px-4 mt-12 flex-wrap">
      <div className=" px-6 space-y-6 flex-wrap justify-center items-center ">
        <div className="text Bold font-bold text-3xl">
          Topic Topic Topic Topic
        </div>
        <div className="text-xl space-y-6 leading-loose  flex-wrap justify-center items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste quasi molestias hic est dolores autem! A impedit possimus quaerat similique. Eligendi odio saepe dolore quis dolores perspiciatis aspernatur sed!
          </p>
        </div>

        <div>
<Cards />
        </div>
      </div>
    </div>
  )
}

export default Section
