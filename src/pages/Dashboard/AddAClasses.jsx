import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const AddAClasses = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();

    const onSubmit = data=>{
        console.log(data)

       const formData = new FormData()
       formData.append('image',data.image[0])
       fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api}`,{
        method:"POST",
        body:formData
       })
       .then(res=>res.json())
       .then(imgres=>{
if(imgres.success){
    const imgUrl = imgres.data.display_url
    console.log(imgUrl)
    const {className,instructorname,instructorEmail,seat,price} = data
    const newClasse = {className,image:imgUrl,instructorname,instructorEmail,seat:parseFloat(seat),price:parseFloat(price),status:"pending"} 
    
    axiosSecure.post('/addclass',newClasse)
    .then(data=>{
        
        if(data.data.insertedId){
            reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'class added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}


       })

    }
    return (
        <div className='bg-red-100 py-10 px-8'>
            <form  onSubmit={handleSubmit(onSubmit)}>
           
            
           <div className='w-full flex gap-2'>
          <div className='w-1/2'>
          <p className='text-black mb-2 ms-4'>Class Name</p>
           <input type="text" placeholder="Your Name" {...register("className", { required: true })} className="input input-bordered  text-white w-full mb-4  bg-slate-600"  />
          </div>
           <div className='w-1/2'>
           <p className='text-black mb-2 ms-4'>Class Image</p>
            <input type="file" placeholder="Class Image" {...register("image", { required: true })} className="input input-bordered pt-2 mb-4 text-white w-full bg-slate-600"  />
           </div>
           </div>
           <div className='w-full flex gap-2'>
          <div className='w-1/2'>
          <p className='text-black mb-2 ms-4'>Instructor Name</p>
           <input type="text" defaultValue={user?.displayName} {...register("instructorname", { required: true })} className="input input-bordered  w-full mb-4 text-white bg-slate-600"  />
          </div>
           <div className='w-1/2'>
           <p className='text-black mb-2 ms-4'>Instructor Email</p>
            <input type="text" defaultValue={user?.email} {...register("instructorEmail", { required: true })} className="input input-bordered pt-2 mb-4 text-white  w-full bg-slate-600"  />
           </div>
           </div>
           <div className='w-full flex gap-2'>
          <div className='w-1/2'>
          <p className='text-black mb-2 ms-4'>Available Seat</p>
           <input type="text" placeholder="Available seat" {...register("seat", { required: true })} className="input input-bordered text-white  w-full mb-4  bg-slate-600"  />
          </div>
           <div className='w-1/2'>
           <p className='text-black mb-2 ms-4'>Price</p>
            <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered text-white  w-full bg-slate-600"  />
           </div>
           </div>
           

           

           <div className='text-center'>
           <input className='btn bg-rose-500 py-2 px-10 rounded-2xl w-2/4' type="submit"  value='Add Class' />
           </div>
           
          
          </form>
        </div>
    );
};

export default AddAClasses;