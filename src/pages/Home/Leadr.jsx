import React from 'react';
import img1 from '../../assets/images/lll1.jpg'
import img2 from '../../assets/images/ddd.jpg'
import img3 from '../../assets/images/dge.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Leadr = () => {
    return (
       <div className='my-16'>
        <h2 className='text-orange-500 text-center font-semibold text-xl'>--Our Staf--</h2>
        <p className=' text-center font-bold text-2xl my-4'>MEET OUR LEADERSHIP
</p>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 '>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img className='rounded-full w-50 hover:-translate-y-5' src={img1} alt="" />
                <p className='text-2xl font-bold hover:text-orange-500'>Daniel Green</p>
                <p >Head Sport camp</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <img className='rounded-full w-50 hover:translate-y-2' src={img3} alt="" />
                <p className='text-2xl font-bold hover:text-orange-500'>Vallery Smith</p>
                <p >Vallery Smith</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                </div>
            </div>
            <div className='flex flex-col justify-center hover:translate-x-5 items-center gap-3'>
                <img className='rounded-full w-50 ' src={img2} alt="" />
                <p className='text-2xl font-bold hover:text-orange-500'>Samantha North</p>
                <p >Assistant Director</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default Leadr;