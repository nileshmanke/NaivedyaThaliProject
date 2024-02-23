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
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411132.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Special Dal fry</h1>
</div>

<div className='text-center'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411173.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'>  Panner Masala</h1>
</div>

<div className='text-center'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411205.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'>  Gobi Masala</h1>
</div>


<div className='text-center'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411244.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'>Special Roti</h1>
</div>

<div className='text-center'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411274.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Special Fry vegitables</h1>
</div>

<div className='text-center'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411308.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Dal khichdi</h1>
</div>


<div className='text-center'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1684411336.jpg' alt=''/>
    <h1 className=' text-sm sm:text-xl font-bold text-red-700'> Jira Rice</h1>
</div>



</div>


<div className=' sm:hidden p-4' >
    <img className='w-[400px] h-[700px]' src='https://naivedyathali.in/gallery_images/compressed/1707841177.jpg' alt=''/>
</div>






<div className='grid grid-cols-1 sm:grid-cols-3  gap-y-4 p-3 mb-4'>



<div className='  p-4' >
    <img className=' hidden sm:block w-[500px] h-[310px]' src='https://naivedyathali.in/gallery_images/compressed/1707841177.jpg' alt=''/>
</div>

<div className='p-4'>

<img src='https://naivedyathali.in/gallery_images/compressed/1680933840.jpg' alt=''/>
</div>


<div  className='p-4'>

<img src='https://naivedyathali.in/gallery_images/compressed/1680933853.jpg' alt=''/>
</div>
  

<div  className='p-4'>

<img src='https://naivedyathali.in/gallery_images/compressed/1680933876.jpg' alt=''/>
</div>

<div  className='p-4 '>

<img className='sm:w-[500px] sm:h-[310px]' src='https://naivedyathali.in/gallery_images/compressed/1680933909.jpg' alt=''/>
</div>


<div  className='p-4'>

<img src='https://naivedyathali.in/gallery_images/compressed/1680841649.jpg' alt=''/>
</div>


</div>



<div className='grid grid-cols-1 sm:grid-cols-3  gap-y-4 p-3 mb-4'>


<div className='p-4'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1707841449.jpg' alt=''/>
</div>
    

<div className='p-4'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1680933940.jpg' alt=''/>
</div>




<div className='p-4'>
    <img src='https://naivedyathali.in/gallery_images/compressed/1707841498.jpg' alt=''/>
</div>







</div>







    </div>


  );
};

export default Gallery;
