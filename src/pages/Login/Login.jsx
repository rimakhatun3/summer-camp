import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Social from '../../shared/Social/Social';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from =location?.state?.from?.pathname  || '/';
    

    const {signIn} = useContext(AuthContext)

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
      signIn(data.email,data.password)
      .then(result=>{
        console.log(result.user)
        
        
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'login successfull',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from,{replace:true})
      const saveUser = {name:data.name,email:data.email}
      fetch(`https://b7a12-server.vercel.app/allUser/${result.user.email}`,{
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

    };

    return (
        <div className='w-2/3 mx-auto bg-stone-300 text-white py-10 px-16 '>
           <h2 className='text-center font-bold text-4xl mb-10 text-black'>Please Login</h2> 
           <form  onSubmit={handleSubmit(onSubmit)}>
           
            
            <p className='text-black mb-2 ms-4'>Your Email</p>
            <input type="text" placeholder="Your Email" {...register("email", { required: true })} className="input input-bordered  mb-4 w-full bg-slate-600"  />
            <p className='text-black mb-2 ms-4'>Your Password</p>
            <input type="password" placeholder="Your Password" {...register("password", { required: true })} className="input input-bordered   w-full bg-slate-600"  />

            <div>
                <p className=' mb-2 text-black'>
                New To This Site Please<Link to='/signup'><button className='btn btn-link'>Sign Up</button></Link>
                </p>
            </div>

            <div className='text-center'>
            <input className='btn bg-rose-500 py-2 px-10 rounded-2xl w-2/4' type="submit"  value='Login Now' />
            </div>
            <Social></Social>
           
           </form>
           </div>
    );
};

export default Login;