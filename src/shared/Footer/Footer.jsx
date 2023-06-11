import React from 'react';
import './footer.css'
import logo from '../../assets/images/logo.avif'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footerbg h-[200px]  w-full'>
            <footer class="    py-8">
  <div class="container px-20 mx-auto flex text-black   flex-wrap justify-between">
    <div class="w-full text-black flex flex-col justify-center items-center sm:w-auto mb-6 sm:mb-0">
      <img className='w-16' src={logo} alt="Footer Logo" class="h-8"/>
      <span class=" text-sm font-medium ml-2">Sport Camp</span>
    </div>
    <div class="w-full sm:w-auto text-black">
      <ul class="flex flex-col items-center justify-center sm:justify-end">
        <li>
          <a href="#" class=" text-sm font-medium mr-4"> Home</a>
        </li>
        <li>
          <a href="#" class=" text-sm font-medium mr-4">About</a>
        </li>
        <li>
          <a href="#" class=" text-sm font-medium mr-4">Contact</a>
        </li>
      </ul>
    </div>
    <div class="w-full sm:w-auto">
      <ul class="flex flex-col items-center justify-center sm:justify-end">
        <li>
          <a href="#" class=" flex gap-2 items-center font-medium mr-4"><FaFacebook></FaFacebook> Facebook</a>
        </li>
        <li>
          <a href="#" class=" flex gap-2 items-center font-medium mr-4"><FaTwitter></FaTwitter> Twitter</a>
        </li>
        <li>
          <a href="#" class=" flex gap-2 items-center font-medium mr-4"><FaInstagram></FaInstagram> Instagram</a>
        </li>
      </ul>
    </div>
  
    <div>
    <div class="w-full sm:w-auto">
        <span class="\text-sm">123 Street, City, Country</span>
      </div>
      <div class="w-full sm:w-auto">
        <span class=" text-sm">Phone: 123-456-7890</span>
      </div>
      <div class="w-full sm:w-auto">
        <span class=" text-sm">Email: info@example.com</span>
      </div>
    </div>
  </div>
  <div class="bg-red-500 py-5 mt-10">
    <div class="container mx-auto flex flex-wrap justify-between">
      <div class="w-full text-center mb-2 sm:mb-0">
        <span class="text-white text-sm">&copy; 2023 Copy. All rights reserved.</span>
      </div>
      
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;