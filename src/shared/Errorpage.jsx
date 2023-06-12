import React from 'react';
import errorimage from '../assets/images/error.webp'
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={errorimage} alt="Error" className="w-1/2 mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-8">We apologize for the inconvenience.</p>
    <Link to='/'>  <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        
      >
        Back to Home
      </button></Link>
    </div>
        </div>
    );
};

export default Errorpage;