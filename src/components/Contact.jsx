import { useNavigate } from "react-router-dom";
import Card1Main from "../components/Card1Main";



function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-10 ">
        <h2 className="text-4xl font-bold text-red-600 text-center">Contact</h2>

        <div className=" p-3 pb-6 sm:p-8 sm:mx-80  sm:px-36">
            <h1 className="text-red-600 text-center font-bold py-8  text-3xl">
              The Joy of Thali
            </h1>
            <p className="text-center">
              Every recipe goes through <br /> a scrutiny to test whether it will stand
              up to the reputation of the<br />brand,the reason why the customers
              keep coming again and again. <br /> DELICIOUS RECIPES | WIDE RANGE OF
              MENU | QUALITY CUISINE FRESH FOOD |<br /> EASY RESERVATION | FRIENDLY
              STAFF
            </p>

            <button className="hover:border-2 rounded-full p-1 px-2 mt-12 sm:my-8 ml-28 sm:ml-60 bg-[#e25f4a]  text-[#ffffff] sm:hover:bg-white sm:hover:border-red-600 sm:hover:text-black">
              Read More
            </button>
          </div>

        <div className="sm:flex sm:justify-center">
      

          <Card1Main />
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 m-4 sm:mx-20 w-auto sm:gap-10 ">
        <div className="bg-[#eeeeee] sm:w[660px] sm:h-[527px] w[360px] h-[520px] ">
          
          <div className="flex flex-col-2 gap-4 p-4 sm:p-6">
            <div>
              <img className="text-center w-20  rounded-full  bg-red-600 " src="public/Images/img4.jpg" alt="" />
            </div>
            <div>
            <h1 className="font-bold text-red-600 text-xl">Our Address</h1>
            <p className="">
              Beside Sakal Office, Jalna Road, CIDCO, Ch.Sambhaji Nagar,
              Maharastra <br /> (India) - 431136.
            </p>
            </div>
          
          </div>

          <div className="flex flex-col-2 gap-4 p-4 sm:p-6">
            <div>
              <img className="text-center sm:w-20 w-10  rounded-full  bg-red-600 " src="public/Images/img5.png" alt="" />
            </div>
            
            <div>
            <h1 className="font-bold text-red-600 text-xl">Email Us</h1>
            <p>admin@naivedyathali.com</p>
            </div>
            
          </div>

            <div className="flex flex-col-2 gap-4  p-4 sm:p-6">
              <div>
              <img className="text-center sm:w-20 w-10 rounded-full  bg-red-600 " src="public/Images/img6.png" alt="" />
              </div>
             
            <div>
            <h1 className="font-bold text-red-600 text-xl">Call Us</h1>
            <p>+91-94231 48098 , +91-95959 89595</p>
            </div>
            </div>

          <div className="flex flex-col-2 gap-4 p-4 sm:p-6">
            <div>
              <img className="text-center w-24  rounded-full  bg-red-600 " src="public/Images/img7.jpg" alt="" />
            </div>

            <div >
            <h1 className="font-bold text-red-600 text-xl">Address</h1>
            <p>
              Besides Kotak Mahindra Bank, X-31, Bajaj Nagar, MIDC Waluj,
              Ch.Sambhaji Nagar, Maharastra (India) - 431136.
            </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center sm:mt-0 mt-8">
          <iframe className="sm:w[660px] sm:h-[527px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.4030710730558!2d75.36705203749706!3d19.873860108840876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2f277a063e9%3A0x1665cc118432991!2sNaivedya%20Veg%20Thali%20Restaurant!5e1!3m2!1sen!2sin!4v1708582444545!5m2!1sen!2sin"
            width="660"
            height="527"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      

      <section className="text-gray-600 shadow-lg body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12"></div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  ></label>
                  <input
                    placeholder="Mobile Number"
                    type="number"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  ></label>
                  <select
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    name="city"
                    id="city"
                  >
                    <option value="">Select city</option>
                    <option value="Aurangabad-Cidco">Aurangabad-Cidco</option>
                    <option value="Aurangabad-Waluj">Aurangabad-Waluj</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Khed">Khed</option>
                    <option value="Karad">Karad</option>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Raipur">Raipur</option>
                    <option value="Jalgaon">Other</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      


    </div>
  );
}

export default Contact;
