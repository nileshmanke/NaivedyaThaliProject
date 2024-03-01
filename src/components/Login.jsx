import React from 'react'
import { IoClose } from "react-icons/io5";


const Login = ({closemodel}) => {
  return (
    <div className='z-50'  style={{animation: 'slideRightpopup 0.3s ease'}}>
    <section className="bg-[#222f3e]   dark:bg-gray-900  bg-[url('public/images/img-7.jpg')] bg-cover w-full bg-no-repeat relative">
    <div className="flex flex-col items-center justify-center      ">
     
      <div className="w-full bg-[#222f3e] text-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 p-8 my-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Login
                </button>
                </div>
                  
              </form>
          </div>
      </div>

      <div onClick={closemodel} className= ' absolute top-0 right-0 text-white text-2xl m-6'>
<span><IoClose /></span>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login