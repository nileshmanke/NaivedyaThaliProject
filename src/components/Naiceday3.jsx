import React from 'react'
import Clock from './Clock'

const Naiceday3 = () => {
  return (
    <div className="">
      <h1 className="font-serif sm:text-3xl text-red-600 p-5">Todays Menu</h1>
      <div>
        <h3 className='font-serif text-sm'><Clock/></h3>
        <div className="grid sm:grid-cols-3 sm:p-6 grid-cols-1">
          <div className="">
            {" "}
            <h1 className="text-red-600 font-serif sm:text-2xl  text-2xl">Sweets</h1>
            <p className="text-black text-xl font-serif hover:underline hover:underline-offset-auto">
              <h4>Imarat Jalebi</h4>
              <h4>Anjeer Basundi</h4>
              <h4>SPL:-Litti chokha</h4>
            </p>
          </div>
          <div>
            {" "}
            <h1 className="text-red-600 font-serif sm:text-2xl text-2xl">Farsan & Chat</h1>
            <p className="text-black text-xl font-serif hover:underline hover:underline-offset-auto">
              <h4>Sp.Chaat;- mix papdi chat.</h4>
              <h4>khaman Dhokala</h4>
              <h4>Farsan; -Cheese Won Ton</h4>
              <h4>Farsan; -Cheese Won Ton</h4>
            </p>
          </div>
          <div>
            {" "}
            
              <h1 className="text-red-600 font-serif sm:text-2xl 2text-xl">Veg Special </h1>{" "}
              <p className="text-black text-xl font-serif hover:underline hover:underline-offset-auto">
              <h4>Dal;-Maharanidal RajasthaniKadhi Gujarati kadhi</h4>
              <h4paneer>
                Jalfrezi Aloo Dum Chhole Punjabi Flower Mushlam
              </h4paneer>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Naiceday3