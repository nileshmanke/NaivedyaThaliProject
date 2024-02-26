import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosReturnLeft } from "react-icons/io";

const Header = () => {

    const [resturant, setresturant] = useState(false);
    const [management, setmanagement] = useState(false);
    const [mresturant, setmresturant] = useState(false);
    const [mmanagement, setmmanagement] = useState(false);

    const [menu, setmenu] = useState(true);
    const me=()=>{
        setresturant(true);
    }
    const ml=()=>{
        setresturant(false);
    }

    const me1=()=>{
        setmanagement(true);
    }
    const ml1=()=>{
        setmanagement(false);
    }
  return (
    <div className='header-container bg-[url(/images/Thalibg.jpg)] bg-cover h-[200px] sm:h-[500px] relative'>


<div className='w-11/12 m-auto font-bold text-white text-sm '>

<div className='flex justify-between  '>
<div className='mt-3 z-50'> 
    <img className='w-[80px] h-[60px] ' src='/images/logo.png' alt=''/>
</div>

<div className='hidden  sm:flex justify-between gap-x-5 '>
    <div onMouseEnter={me} onMouseLeave={ml} className='mt-7 hover:underline relative '  >
        <Link to="/">

            <div className=' flex '>
            <div>
                Resturant 

            </div>
            
            
            <div className={` ${resturant ? "rotate-180" : ""}  text-xl `}>
                <RiArrowDropDownLine />
            </div>
            </div>
        </Link>

        <div style={{animation:'slideInFromTop 0.3s ease'}} className={  ` w-[200px] rounded-2xl  shadow-inner  bg-white  text-black font-normal  absolute ${resturant  ? "block"  : "hidden"}`}>


<ul className='p-5 flex flex-col gap-y-5'>
<li>
        Ghole Road Pune
    </li>
    <li>
        Sambhaji Nagar-Cidco
    </li>
    <li>
    Sambhaji Nagar-Waluj
    </li>
    <li>
    Pandharpur
    </li>
</ul>
        </div>
    </div>


    <div  className='mt-7 hover:underline'  >
        <Link to="/">
            Take A Menu
        </Link>
    </div>
 

    <div  className='mt-7 hover:underline'  >
        <Link to="/">
            Franchise Enquiry
        </Link>
    </div>

    <div onMouseEnter={me1} onMouseLeave={ml1}  className='mt-7 hover:underline '  >
        <Link to="/">
        <div className=' flex '>
            <div>
                Management

            </div>
            
            
            <div className={` ${management ? "rotate-180" : ""}  text-xl `}>
                <RiArrowDropDownLine />
            </div>
            </div>
        </Link>


        <div style={{animation:' slideRight 0.3s ease'}} className={  ` w-[200px] rounded-2xl  shadow-inner  bg-white  text-black font-normal  absolute ${management  ? "block"  : "hidden"}`}>


<ul className='p-5 flex flex-col gap-y-5'>
    <li>
        Expertise
    </li>
    <li>
        Achievements
    </li>
    <li>
    Why To Join Us
    </li>
    <li>
    Director Profile
    </li>
</ul>
        </div>
    </div>

    <div  className='mt-7 hover:underline'  >
        <Link to="/gallery">
            Gallery
        </Link>
    </div>


    <div   className='mt-7 hover:underline'  >
        <Link to="/contact">
            Contact Us
        </Link>
    </div>


   

    <div  className='mt-7 hover:underline'  >
        <Link to="/membership">
            Membership
        </Link>
    </div>




    <div  className='mt-7 hover:underline'  >
        <Link to="/login">
          <span className= ' animate-pulse text-white font-bold bg-red-700 p-2 text-sm sm:p-3 w-[100px] sm:w-[150px] rounded-xl text-center'> Login / Sign Up</span> 
        </Link>
    </div>
    

</div>



<div className='mt-5'>
    <div className='text-white font-bold bg-red-700 p-2 text-sm sm:p-3 w-[100px] sm:w-[150px] rounded-xl text-center '>
        <button>Book Table</button>
    </div>
</div>

<div className='hidden absolute top-[-190px] left-[-90px] z-10 rounded-full sm:block w-[300px] h-[300px] bg-white'>
    
</div>




<div onClick={()=>{
    setmenu(!menu);
}} className='block sm:hidden mt-8'>


    

{menu ? <div className='text-xl'> <FaBars /> </div> : <div className='text-xl'> <IoMdClose /> </div>}



</div>

</div>

</div>

<div  className={` ${!menu ? "block" : "hidden"} z-100 sm:hidden mt-3 w-screen h-screen  text-white bg-[#222f3e]`} style={{animation: 'slideRight 0.5s ease'}}>

    <div className=' gap-y-3 flex flex-col justify-center p-4'>

<div>
    <div onClick={()=>{setmresturant(!mresturant);
    setmmanagement(false)}} className='flex gap-x-2'>
        
        <div   className='mt-1 '>
             <IoIosArrowForward />
             </div>
             <div >
            <Link to="/">Resturants</Link>
            </div>
            <div style={{animation:'slideInFromTop 0.3s ease'}} className={  ` w-[250px] h-[300px] rounded-2xl  shadow-inner bg-[#2c2c54]  text-white font-normal  absolute ${mresturant  ? "block"  : "hidden"}`}>


<ul className='p-5 flex flex-col gap-y-5'>

    <div onClick={()=>setmresturant(!mresturant)} className='text-2xl'>
    <IoIosReturnLeft />
    </div>
    <li>
        Ghole Road Pune
    </li>
    <li>
        Sambhaji Nagar-Cidco
    </li>
    <li>
    Sambhaji Nagar-Waluj
    </li>
    <li>
    Pandharpur
    </li>
</ul>
        </div>

   </div>
</div>

<div className='ml-[22px]'>
    <Link to="/">Take A Menu</Link>
</div>

<div className='ml-[22px]'>
    <Link to="/">Franchise Enquiry</Link>
</div>



<div>
    <div onClick={()=>setmmanagement(!mmanagement)} className='flex gap-x-2'>
        
        <div className='mt-1 '>
             <IoIosArrowForward />
             </div>
             <div>
            <Link to="/">Management</Link>
            </div>

            <div style={{animation:'slideInFromTop 0.3s ease'}} className={  ` w-[250px] rounded-2xl  shadow-inner  bg-[#2c2c54]  text-white font-normal  absolute  ${mmanagement  ? "block"  : "hidden"}`}>


<ul className='p-5 flex flex-col gap-y-5'>

    <div onClick={()=>setmmanagement(!mmanagement)} className='text-2xl'>
    <IoIosReturnLeft />
    </div>
    <li>
        Expertise
    </li>
    <li>
        Achievements
    </li>
    <li>
    Why To Join Us
    </li>
    <li>
    Director Profile
    </li>
</ul>
        </div>
    </div>
    
   
</div>


<div onClick={()=>{
    setmenu(!menu);
}} className='ml-[22px]'>
    <Link to="/gallery">Gallery</Link>
</div>

<div onClick={()=>{
    setmenu(!menu);
}} className='ml-[22px]'>
    <Link to="/contact">Contact Us</Link>
</div>



<div  onClick={()=>{
    setmenu(!menu);
}} className='ml-[22px]'>
    <Link to="/membership">Membership</Link>
</div>



<div   onClick={()=>{
    setmenu(!menu);
}} className='ml-[22px] mt-7'>
    <Link to="/login"><span className=' text-white font-bold bg-red-700 p-2 text-sm sm:p-3 w-[100px] sm:w-[150px] rounded-xl text-center'>Login/Sign Up</span></Link>
</div>

    </div>

</div>



    </div>



  )
}

export default Header