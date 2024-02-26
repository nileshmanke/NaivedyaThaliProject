import React from 'react'

const Membership = () => {
  return (
    <div className='z-10'>
        <div className='text-center font-bold  mt-5 text-red-600 py-6'>
            <h1 className='text-2xl p-2 sm:text-4xl shadow-2xl underline-offset-4'>Registration</h1>
          
        </div>
      <div className="flex items-center justify-center p-12 " style={{ fontFamily: 'Okra, sans-serif', fontSize: '16px' }}>
        <div className="mx-auto w-full max-w-[550px] ">
          <form onSubmit={(e)=>{
            e.preventDefault();

          }} >
            <div className="mb-5  shadow-2xl  ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
                 First Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
              />
            </div>

            <div className="mb-5   shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
               Last Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6  text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5   shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="Number"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="Text"
                name="Number"
                id="Number"
                placeholder="Your Phone Number"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5  shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
                Your Address
              </label>
              <input
                type="Address"
                name="Address"
                id="Address"
                placeholder="Enter your Address"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5   shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
                  City/ Town
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="City/ Town"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5   shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
                Your Pin Code
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter pin code"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
              />
            </div>


            <div className="mb-5   shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
               Your State
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="State"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5   shadow-2xl hover:bg-slate-50 ">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-[#07074D]"
              >
                Email Id
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Email Id"
                className="w-full rounded-md border border-red-600 bg-white py-1 px-3 sm:py-3 sm:px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            


            
            
            <div>
              <button
              
                className=" rounded-md bg-red-600 py-1 px-4 sm:py-3 sm:px-8 text-base font-semibold text-white outline-none mt-5 "
              >
                Register
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};



export default Membership
