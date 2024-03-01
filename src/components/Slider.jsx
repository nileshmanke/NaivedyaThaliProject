

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='z-0'>
      <Swiper 
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full' src=" \images\slider1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="\images\slider2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="\images\slider3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="\images\slider4.jpeg " />
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}

