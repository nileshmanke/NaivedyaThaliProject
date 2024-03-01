import React from 'react'
import Clock from './Clock'

const Naiveday2 = () => {
  return (
   
    <div className="">
      <h1 className="font-serif sm:text-3xl text-red-600 p-5 hover:underline hover:underline-offset-4">Todays Menu</h1>
      <div>
        <h3 className='font-serif text-sm'><Clock/></h3>
        <div className="grid sm:grid-cols-3 sm:p-6 grid-cols-1">
          <div className="">
            {" "}
            <h1 className="text-red-600 font-serif text-2xl">Roti and Rice</h1>
            <p className="text-black text-xl font-serif hover:underline hover:underline-offset-auto">
              <h4>Fulaka</h4>
              <h4>puri</h4>
              <h4>Rice;-jeera rice</h4>
              <h4>Tava Parotha</h4>
              <h4>Steamrice Salad;-Mix Kachumbar ..... &.More....</h4>
            </p>
          </div>
          <div>
            {" "}
            <h1 className="text-red-600 font-serif text-2xl">More Items</h1>
            <p className="text-black text-xl font-serif hover:underline hover:underline-offset-auto">
              <h4>&......................................</h4>
              
            </p>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Naiveday2