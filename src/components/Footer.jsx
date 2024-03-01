import React from 'react'

const Footer = () => {
    const footerStyle = {
        backgroundImage: 'url("")', // Update the path accordingly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      };

    
    return (
        <div className='bg-[#222f3e] ' style={footerStyle}>
            
             <div className=' z-10 flex justify-center  '>
                <img className='  sm:w-[200px] shadow-2xl sm:h-[160px] w-[100px] h-[80px]  rounded-b-full' src="/images/footerlogo.jpg " alt="" />
            </div>
            
            <div className=' sm:grid sm:grid-cols-4 grid grid-cols-1 p-10 text-white'>

                <div>
                    <h1 className=' text-xl font-bold mt-3 '>Management</h1>
                    <p className=' mt-2'>Expertise</p>
                    <p>Achievements</p>
                    <p>Why to Join Us</p>
                    <p>Director Profile</p>
                </div>

                <div>
                    <h1 className=' mt-3 text-xl font-bold '>Restaurants</h1>
                    <p className=' mt-2'>Ghole Road Pune</p>
                    <p>Sambhaji Nagar - Cidco</p>
                    <p>Sambhaji Nagar - Waluj</p>
                    <p>Pandharpur</p>
                </div>

                <div>
                    <h1 className='  mt-3 text-xl font-bold'>Policy Info</h1>
                    <p className=' mt-2'>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Cancellation Policy</p>
                    <p>Feedback</p>
                </div>

                <div>
                    <h1 className='  mt-3 text-xl font-bold'>Contact Us</h1>
                    <p className=' mt-2'>Beside Sakal Office, Jalna Road, CIDCO, Ch.Sambhaji Nagar, Maharastra (India) - 431136.</p>
                    <p>91-94231 48098 , 91-95959 89595</p>

                    <div className=' mt-8 flex gap-3'>
                        <i className="fa-brands fa-facebook  w-[40px] h-[40px]  text-center   text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400  border-black rounded-full "></i>
                        <i className="fa-brands fa-x-twitter  w-[40px] h-[40px]  text-center  text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400 border-black rounded-full"></i>
                        <i className="fa-brands fa-whatsapp  w-[40px] h-[40px]  text-center  text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400  border-black rounded-full "></i>

                        <i className="fa-brands fa-instagram  w-[40px] h-[40px]  text-center  text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400 border-black rounded-full "></i>
                        <i className="fa-brands fa-youtube   w-[40px] h-[40px]  text-center text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400  border-black rounded-full "></i>


                    </div>



                </div>
</div>


<div>

    <hr/>



                <div className="grid grid-cols-1 gap-y-2  sm:grid-cols-1 p-2 text-center text-xs sm:text-sm w-full sm:flex justify-between sm:p-2 text-white   " style={{ fontFamily: 'Comfortaa, sans-serif', fontSize: '16px' }}>
        <div>
          <h1>Copyright © 2024 | All rights reserved</h1>
        </div>
        <div className=''>
          <a href='https://www.mketech.in/' target='_blank'>Designed & Developed by Mk e-Tech Pvt. Ltd</a>
        </div>
      </div>
</div>

               

                




            </div>

            
            
      

    )
}

export default Footer