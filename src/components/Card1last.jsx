import React from 'react'

const Card1 = ({imageUrl,title,description}) => {
  return (
    <div className="py-4 sm:w-72 sm:h-[366px] px-4 rounded-xl overflow-hidden shadow-lg   transition duration-300  transform hover:scale-105">
      <div className='flex justify-center'>
      <img className=" text-center w-14 border-2 rounded-full bg-red-600 text-white" src={imageUrl} alt="" />
      </div> 
      <div className=" border-x-4 border-yellow-100"> 
      <h1 className='text-center font-serif text-red-600 text-2xl'>{title}</h1>
    
    <p className='text-center font-serif  text-red-950 text-xl'>{description}</p>
    </div>
  </div> 
  )
}

export default Card1