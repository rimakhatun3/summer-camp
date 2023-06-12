import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const FeedBack = () => {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(data,id)
    const handleFeedBack =(event)=>{
event.preventDefault()

const text = event.target.text.value

const Feedback ={text:text}

fetch(`https://b7a12-server.vercel.app/feedback/${data._id}`,{
    method:'PATCH',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(Feedback)
    
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.modifiedCount){
      
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'feed back success',
          showConfirmButton: false,
          timer: 1500
        })
  }
  })
    }
    
    return (
        <div className='my-10 mx-10'>
          <h1 className='text-xl font-bold my-2 underline'>Admin Feed Back</h1>
         <form onSubmit={handleFeedBack} >
        <div className='flex flex-col gap-4'>
        <input className='border py-5 px-16' type="text" name="text" id="" />
        <div className='text-center'>
        <button className='btn btn-success w-2/3'>feedback</button>
        </div>
        </div>
         </form>
        </div>
    );
};

export default FeedBack;