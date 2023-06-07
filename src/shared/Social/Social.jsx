import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/'
    const {signInGoggle} = useContext(AuthContext)
    const handleGoggleSignIn =()=>{
signInGoggle()
.then(result=>{
    console.log(result.user)
    const saveUser = {name:result.user.displayName,email:result.user.email}
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
    navigate(from,{replace:true})
})
.catch(error=>{
    console.log(error.message)
})
    }

    return (
        <div className='text-center mt-4'>
        <button onClick={handleGoggleSignIn} className='btn btn-outline w-2/4 '><FaGoogle></FaGoogle>Login with Goggle</button> 
        </div>
    );
};

export default Social;