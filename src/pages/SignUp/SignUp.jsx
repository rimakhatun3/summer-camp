import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Social from '../../shared/Social/Social';
const SignUp = () => {

    const {createUser,updateUser,user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/'

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    
    const formData = new FormData
    formData.append("image",data.image[0])
    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api}`,
    {
        method:'POST',
        body:formData,
        
    })
    .then(res=>res.json())
    .then(imgdata=>{
        console.log(imgdata.data.display_url)
        const imageUrl = imgdata.data.display_url
        createUser(data.email,data.password)
        .then(result=>{
            
updateUser(data.name,imageUrl)
.then(()=>{
    console.log(result.user.email)
    navigate(from,{replace:true})
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'signup successfull',
        showConfirmButton: false,
        timer: 1500
      })
      const saveUser = {name:data.name,email:data.email,role:"student"}
      fetch(`http://localhost:5000/allUser/${result.user.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(saveUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        // if(data.insertedId){
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'userAdded successfull',
        //         showConfirmButton: false,
        //         timer: 1500
        //       })
        // }
      })
})
.catch(error=>{
    console.log(error.message)
})

        })
        .catch(error=>{
            console.log(error.message)
        })
    })

  };
    return (
        <div>
           
           <div className='w-2/3 mx-auto bg-stone-300 text-white py-10 px-16 '>
           <h2 className='text-center font-bold text-4xl mb-10 text-black'>Please Register</h2> 
           <form  onSubmit={handleSubmit(onSubmit)}>
           <p className='text-black my-2 ms-4'>Your Name</p>
            <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered mb-4  w-full bg-slate-600"  />
            <p className='text-black mb-2 ms-4'>Your Photo</p>
            <input type="file" placeholder="Your Photo" {...register("image", { required: true })} className="input input-bordered pt-2 mb-4 w-full bg-slate-600"  />
            <p className='text-black mb-2 ms-4'>Your Email</p>
            <input type="text" placeholder="Your Email" {...register("email", { required: true })} className="input input-bordered  mb-4 w-full bg-slate-600"  />
            <p className='text-black mb-2 ms-4'>Your Password</p>
            <input type="password" placeholder="Your Password" {...register("password", { required: true,minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input input-bordered   w-full bg-slate-600"  />
            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
            
            {/* <p className='text-black mb-2 ms-4'>Confirm password</p>
            <input type="password" placeholder="Your Password" {...register("confirm", { required: true  })} className="input input-bordered   w-full bg-slate-600"  /> */}
            <p className='mx-3 my-2 text-black'>
                Already Have an Account Please<Link to='/login'><button className='btn btn-link'>Login Now</button></Link>
                </p>

            <div className='text-center'>
            <input className='bg-rose-500 btn py-2 px-10 rounded-2xl w-2/4' type="submit"  value='Register Now' />
            </div>
            <Social></Social>
           
           </form>
           </div>
        </div>
    );
};

export default SignUp;