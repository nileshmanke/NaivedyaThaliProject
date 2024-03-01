import Swiper from "swiper";
import Slider from "./Slider";
import { useState } from "react";
import Naiveday1 from "./Naiveday1";
import Naiveday2 from "./Naiveday2";
import Naiceday3 from "./Naiceday3";
import Thali from "./Thali";
import Marqetes from "./Marqetes";
import Card1Mainlast from "./Card1Mainlast";

const MainHome = () => {
  const [change, setchange] = useState("");

  return (
    <div className="mt-5 h-auto text-3xl text-bold text-center">
      <div>
        {/* <Slider /> */}
      </div>
      <div className=" ">
        <h1 className="font-serif sm:text-4xl sm:pt-5 text-red-600  ">
          Naivedya Menu
        </h1>

        <div className="sm:p-2 sm:gap-8 gap-7 flex justify-center">
          <div>
            <button
              onClick={() => setchange("early")}
              className={` sm:py-2 sm:text-2xl text-xl font-bold ${
                change === " " ? " text-red-600" : "text-black"
              }`}
            >
              {" "}
              <h5 className="font-serif hover:text-red-600 hover:underline hover:underline-offset-2">
                {" "}
                | CIDCO |{" "}
              </h5>
            </button>
          </div>

          <div>
            <button
              onClick={() => setchange("foundation")}
              className={` sm:py-2 sm:text-2xl text-xl font-bold ${
                change === "foundation"
                  ? "text-red-600 hover:underline hover:underline-offset-2  "
                  : "text-black"
              }`}
            >
              {" "}
              <h5 className="font-serif hover:text-red-600 hover:underline hover:underline-offset-2">
                {" "}
                | WALUJ |{" "}
              </h5>
            </button>
          </div>
          <div>
            <button
              onClick={() => setchange("groth")}
              className={` sm:py-2 sm:text-2xl text-xl font-bold  ${
                change === "groth"
                  ? " text-red-600 hover:underline hover:underline-offset-2 "
                  : "text-black"
              }`}
            >
              <h5 className="font-serif hover:text-red-600 hover:underline hover:underline-offset-2">
                | PUNE |
              </h5>
            </button>
          </div>
        </div>
      </div>

      <div>
        {change === "early" && <Naiveday1 />}
        {change === "foundation" && <Naiveday2 />}
        {change === "groth" && <Naiceday3 />}
      </div>


      <div className="">
        <Thali />
      </div>

      <div>
        <h1 className=" text-3xl text-red-600 underline  shadow-2xl  underline-offset-8 uppercase font-serif">
          Events
        </h1>

        <Marqetes />
      </div>

    <div> 
    <div className=" font-serif">
          <h1 className="font-serif sm:text-4xl sm:pt-5 text-red-600">The Joy of Thali</h1>
          <br />
          <p className="text-xl  sm:text-pretty sm:font-serif  sm:px-72  p-4 ">
            {" "}
            Every recipe goes through a scrutiny to test whether it will stand
            up to the reputation of the brand, the reason why the customers keep
            coming again and again. DELICIOUS RECIPES | WIDE RANGE OF MENU |
            QUALITY CUISINE FRESH FOOD | EASY RESERVATION | FRIENDLY STAFF
          </p>
          <br />
          <button className="font-serif text-center text-xl w-[200px] rounded-full border-2 bg-red-600  text-white">Read more </button>
        </div>

      <div className="flex justify-center gap-10">
        <Card1Mainlast />
      </div>
    </div>
    </div>
  );
};

export default MainHome;