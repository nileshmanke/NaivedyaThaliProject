import React from "react";

import Card1 from "./Card1";

const cardData = [
  {
    title:"Naivedya Thali Pune",
    imageUrl: "/images/img1.png",
    description: <p>Amit Shreephal, 1187/25,Near <br /> Balgandharv Chowk, Ghole <br />Road,Pune,Maharashtra 411005. <br /> <br />8698986363|8698986262 <br /><br />11:30 am–3:30 pm, 0:700pm–11:00pm <br /> <br /> </p>,
    firstMap:"View Map",         
   
  },
  {
    title:"Naivedya Thali CIDCO",
    imageUrl: "/images/img2.png",
    description: <p>Jalna Road, beside Sakal Office,<br />Ch.SambhajiNagar, Town Center, <br />Cidco, Ch.SambhajiNagar, <br />Maharashtra 431005 <br /> <br />095791 41516 <br /><br />11:30 am–3:30 pm, 7–10:30 pm</p>,
    secondMap: "View Map",
  },
  {
    title:"Naivedya Thali Waluj",
    imageUrl: "/images/img3.png",
    description: <p>X-31 Bajaj Nagar MIDC Waluj Beside <br /> Fire Brigade Office, Waluj, <br /> Ch.SambhajiNagar, Maharashtra <br /> 431136 <br /><br />095791 51617/0240255521 <br /><br />11.00 am-03:15pm,7-10:15 pm</p>,
    thirdMap:"View Map",
  },
];

const Card1Main = () => {
  return (
    <div className=" sm:grid sm:grid-cols-3 my-8 hover:font-serif sm:gap-16 ">
      {cardData.map((card1, index) => (
        <Card1 key={index} {...card1} />
      ))}
    </div>
  );
};

export default Card1Main;
