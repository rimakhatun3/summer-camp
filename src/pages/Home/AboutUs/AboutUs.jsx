import React from 'react';
import './About.css'
import img1 from '../../../assets/images/img8.jpeg'
const AboutUs = () => {
    return (
        <div className='bg-camp w-full h-[550px] bg-fixed bg-opacity-30'>
            
            <div  className='w-2/4 mx-auto text-center pt-10 text-stone-900'>
                <h2 className='text-3xl font-extrabold'>learn our camping</h2>
                <p className='text-3xl font-extrabold'>VIRTUAL CAMPING TOUR</p>
                <p>Summer camp is a program for children or teens during  summer months in many  <br/> countries. Children and adolescents are called campers.

</p>
            <img className='w-4/6 mx-auto rounded-xl my-6' src={img1} alt="" />
            <h2></h2>
            </div>
        </div>
    );
};

export default AboutUs;