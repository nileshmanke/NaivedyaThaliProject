import React from "react";
import Card1last from "./Card1last";

const cardData = [
  {

    title:"Naivedya Thali Pune",
    imageUrl: "/images/iconimg1.png ",
    description: <p>Amit Shreephal, 1187/25,Near <br /> Balgandharv Chowk, Ghole <br />Road,Pune,Maharashtra 411005. <br /> <br />8698986363|8698986262 <br /><br />11:30 am–3:30 pm, 0:700pm–11:00pm </p>
                 
  },
  {
    title:"Naivedya Thali CIDCO",
    imageUrl: "/images/iconimg2.png",
    description: <p>Jalna Road, beside Sakal Office,<br />Ch.SambhajiNagar, Town Center, <br />Cidco, Ch.SambhajiNagar, <br />Maharashtra 431005 <br /> <br />095791 41516 <br /><br />11:30 am–3:30 pm, 7–10:30 pm</p>
    
  },
  {
    title:"Naivedya Thali Waluj ",
    imageUrl: "/images/iconimg3.png",
    description: <p>X-31 Bajaj Nagar MIDC Waluj Beside <br /> Fire Brigade Office, Waluj, <br /> Ch.SambhajiNagar, Maharashtra <br /> 431136 <br /><br />095791 51617/0240255521 <br /><br />11.00 am-03:15pm,7-10:15 pm</p>
   
  },
];

const Card1Mainlast = () => {
  return (
    <div className=" px-4 gap-12 divide-neutral-50  border-collapse sm:grid sm:grid-cols-3 grid-cols-1  border3 border-white py-7 ">
      {cardData.map((card1, index) => (
        <Card1last key={index} {...card1} />
      ))}
    </div>
  );
};

export default Card1Mainlast;
