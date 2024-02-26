import React from 'react';

const Gallery = () => {
  return (

    <div>
      

    <div className='flex flex-wrap justify-center gap-y-4 p-6'>
      <div className='w-full  flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/z11loEoBxwo?si=UKPXvyh5WyEhUo7K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-full flex justify-center  sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/aH7RvMTGNIY?si=WXPx3jDDy5nzPafe"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/n2rAEKJ-htU?si=Yo6qKreC2bshH5md"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-full flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4'>
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/tW3mSrcbhVA?si=XmwVS9bHFKodbXmV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>



<div className='grid grid-cols-1 sm:grid-cols-4  gap-y-4 p-3 mb-4'>

<div className='text-center '>
    <img src='/images/menu1.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Special Dal fry</h1>
</div>

<div className='text-center'>
    <img src='/images/menu2.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'>  Panner Masala</h1>
</div>

<div className='text-center'>
    <img src='/images/menu3.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'>  Gobi Masala</h1>
</div>


<div className='text-center'>
    <img src='/images/menu4.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'>Special Roti</h1>
</div>

<div className='text-center'>
    <img src='/images/menu5.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Special Fry vegitables</h1>
</div>

<div className='text-center'>
    <img src='/images/menu6.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Dal khichdi</h1>
</div>


<div className='text-center'>
    <img src='/images/menu7.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Jira Rice</h1>
</div>


<div className='flex flex-col justify-between text-center'>
    <img className='sm:w-[400px] sm:h-[260px] w-[300px] h-[200px] sm:ml-0 ml-7 ' src='/images/menu8.png' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Fresh vegiees</h1>
</div>



</div>


<div className=' sm:hidden p-4' >
    <img className='w-[400px] h-[700px]' src='/images/hotelimg.jpg' alt=''/>
</div>






<div className='grid grid-cols-1 sm:grid-cols-3  gap-y-4 p-3 mb-4'>



<div className='  p-4' >
    <img className=' hidden sm:block w-[500px] h-[310px]' src='/images/hotelimg.jpg' alt=''/>
</div>

<div className='p-4'>

<img src='/images/inner1.jpg' alt=''/>
</div>


<div  className='p-4'>

<img src='/images/inner2.jpg' alt=''/>
</div>
  

<div  className='p-4'>

<img src='/images/inner3.jpg' alt=''/>
</div>

<div  className='p-4 '>

<img className='sm:w-[500px] sm:h-[310px]' src='/images/inner4.jpg' alt=''/>
</div>


<div  className='p-4'>

<img src='/images/inner5.jpg' alt=''/>
</div>


</div>



<div className='grid grid-cols-1 sm:grid-cols-3  gap-y-4 p-3 mb-4'>


<div className='p-4'>
    <img src='/images/room1.jpg' alt=''/>
</div>
    

<div className='p-4'>
    <img src='/images/room2.jpg' alt=''/>
</div>




<div className='p-4'>
    <img src='/images/room3.jpg' alt=''/>
</div>







</div>







    </div>


  );
};

export default Gallery;
