import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';

const FeedBack = ({id}) => {
   
    console.log(id)
    return (
        <div className='my-10 mx-10'>
          <h1 className='text-xl font-bold my-2 underline'>Admin Feed Back</h1>
         <form >
        <div className='flex flex-col gap-4'>
        <textarea className='border' name="" id="" cols="50" rows="5"></textarea>
        <div className='text-center'>
        <button className='btn btn-success w-2/3' onclick={()=>handleFeedBack()}>feedback</button>
        </div>
        </div>
         </form>
        </div>
    );
};

export default FeedBack;