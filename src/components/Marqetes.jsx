import React from "react";

const Marqetes = () => {
  return (
    <div>
      <div className="flex sm:px-11 ">
        <div className="px-4 sm:gap-2  gap-y-16 divide-neutral-50  border-collapse sm:grid sm:grid-cols-3 grid-cols-1  border3 border-white py-7">
          <div className="border-2 shadow-2xl border-y  border-x-4  ">
            <img
              className=" w-[600px] h-[400px] "
              src="/images/event1.jpg "
              alt=""
            />
            <h1 className="font-serif text-center text-xl capitalize  "> Office Part</h1>
            <button className="font-serif text-center text-xl w-[200px] rounded-full border-2 bg-red-600  text-white">Book Now</button>
          </div>

          <div className="border-2 shadow-2xl border-y  border-x-4 ">
            <img
              className="w-[600px] h-[400px] "
              src=" /images/event2.jpg"
              alt=""
            />
            <h1 className="font-serif text-center text-xl capitalize"> birthday party</h1>
            <button className="w-[200px] font-serif text-center text-xl rounded-full border-2 bg-red-600  text-white ">Book Now</button>
          </div>

          <div className="border-2 shadow-2xl   border-y  border-x-4 ">
            <img
              className="w-[600px] h-[400px]"
              src="/images/event4.jpg"
              alt=""
            />
            <h1 className="font-serif text-center text-xl capitalize">
              {" "}
              Familiy Get Together
            </h1>
            <button className="font-serif text-center text-xl  w-[200px] rounded-full border-2 bg-red-600  text-white">Book Now</button>
          </div>

          <div className="border-2 shadow-2xl   border-y   rounded-2xl ">
            <img
              className="w-[600px] h-[400px]"
              src="/images/event1.jpg"
              alt=""
            />
            <h1 className="font-serif text-center text-xl capitalize"> Office Part</h1>
            <button className=" w-[200px] rounded-full border-2 bg-red-600  text-white font-serif text-center text-xl">Book Now</button>
          </div>

          <div className="border-2 shadow-2xl   border-y  border-x-4">
            <img
              className="w-[600px] h-[400px]"
              src="/images/event2.jpg"
              alt=""
            />
            <h1 className="font-serif text-center text-xl capitalize"> wedding venue</h1>
            <button className=" w-[200px] rounded-full border-2 bg-red-600  text-white font-serif text-center text-xl">Book Now</button>
          </div>

          <div className="border-2 shadow-2xl  border-y  border-x-4 ">
            <img
              className="w-[600px] h-[400px]"
              src="/images/eventBirthdayimg.jpg"
              alt=""
            />
            <h1 className="font-serif text-center text-xl capitalize"> birthday party</h1>
            <button className="font-serif text-center text-xl w-[200px] rounded-full border-2 bg-red-600  text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marqetes;
