import React from "react";

const Thali = () => {
  return (
    <div className=" w-full">
      <h1 className="font-serif  shadow-red-300 shadow-inner sm:text-4xl sm:px-10 text-red-600 sm:p-8  py-7 underline underline-offset-8 ">
        Naivedya Thali Restaurants
      </h1>

      <div className="grid sm:grid-cols-2  gap-3 p-6  sm:w-11/12 h-auto">

        <div className="w-[300px] sm:w-full  bg-[url('/images/img1Thali.jpg')] bg-no-repeat bg-cover h-[600px] ">
          
          
        </div>

        <div className="">
          <h2 className="text-xl sm:text-start sm:font-serif w-[300px] sm:w-full">
             Naivedya Thali is a well known Restaurant brand for its specialty of
            delicious, vegetarian thali. Ever since its establishment, Naivedya
            Thali Restaurant has climbed the heights of success owing to the
            great taste and quality of the food served.  Every recipe goes
            through a scrutiny to test whether it will stand up to the
            reputation of the brand, the reason why the customers keep coming
            again and again. The Restaurant is sought after for two of the most
            important meals of the day, dinner and lunch. The high quality food
            can also be ordered at home within the city.
          </h2>

          <div className="">
            <iframe
            className="w-[300px]  sm:w-[500px] sm:h-[300px]"
              
              src="https://www.youtube.com/embed/ed8EQhIxofk?si=zUwCQiuDYiqvWN95"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thali;
