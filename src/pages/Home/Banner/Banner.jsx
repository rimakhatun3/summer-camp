import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/images/slider1.avif'
import img2 from '../../../assets/images/slider2.jpg'
import img3 from '../../../assets/images/slider3.jpg'
import img4 from '../../../assets/images/slider4.avif'
import img5 from '../../../assets/images/slider2.jpg'
import img6 from '../../../assets/images/slider6.jpg'

const Banner = () => {
    return (
        <div className='text-center'>
            <Carousel>
            <div>
                <img src={img1} />
                
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>  
        </div>
    );
};

export default Banner;