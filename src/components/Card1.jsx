import React from 'react'

const Card1 = ({imageUrl,title,description,firstMap,secondMap,thirdMap}) => {
  return (
    <div className="py-4 sm:w-80 sm:h-[366px] sm:px-4 m-4 rounded-xl overflow-hidden shadow-sm shadow-rose-700   transition duration-300  transform hover:scale-105">
      <div className='flex justify-center pb-6'>
      <img className=" mix-blend-color-burn text-center w-10 border-2 rounded-full  bg-[#ce1212] opacity-50" src={imageUrl} alt="" />
      </div> 
      <h1 className='text-center font-semibold text-red-600 text-xl'>{title}</h1>
      <p className='text-center  '>{description}</p><br />
      <div className='flex justify-center text-red-600 '>
          <a target="_blank" href="https://www.google.com/maps/place/Naivedya+Thali+Restaurants+pune/@18.5233415,73.8471728,15z/data=!4m6!3m5!1s0x3bc2bf15593e600b:0xd1cc545e3f7e33df!8m2!3d18.5233415!4d73.8471728!16s%2Fg%2F11j90v2gdn">
          {firstMap}
          </a>

          <a target="_blank" href="https://www.google.com/maps/place/Naivedya+Thali+Restaurant/@19.8740968,75.368054,15z/data=!4m6!3m5!1s0x3bdba2f277a063e9:0x1665cc118432991!8m2!3d19.8740968!4d75.368054!16s%2Fg%2F1hm4t_3ns">
          {secondMap}
          </a>

          <a target="_blank" href="https://www.google.com/maps/place/Hotel+Naivedya+Aurangabad+Waluj/@19.8397704,75.2432994,15z/data=!4m2!3m1!1s0x0:0x294b7e04ae6078ac?sa=X&amp;ved=2ahUKEwj998HA45T-AhX_yDgGHbu4DcIQ_BJ6BAhhEAc">
            {thirdMap}
          </a>  
       </div>
  </div> 
  )
}

export default Card1