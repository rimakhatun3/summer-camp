import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/images/slider1.avif'
import img2 from '../../../assets/images/slider2.jpg'
import img3 from '../../../assets/images/slider3.jpg'
import img4 from '../../../assets/images/slider4.avif'
import img5 from '../../../assets/images/slider2.jpg'
import img6 from '../../../assets/images/slider6.jpg'
import img7 from '../../../assets/images/ins.avif'

const Banner = () => {

    

    
    return (
        <div className='text-center'>
           <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className='realtive  '>
        <SwiperSlide><img className='opacity-50'  src={img1} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        </div>
        <SwiperSlide><img src={img2} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img6} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img7} alt="" />
        <div className='absolute text-black w-1/2 border bg-gradient-to-r from-red-200 to-red-500'>
        <h1 className='text-2xl font-bold mb-2'>Welcome to Samar Camp</h1>
        <p>Join us for an unforgettable sports <br/> camp experience focused on <br/>responsibility, teamwork, <br/> and personal growth.</p>
        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;