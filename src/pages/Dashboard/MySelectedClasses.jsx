import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    
    const [axiosSecure] = useAxiosSecure()
    const {data:selectedClass=[],refetch} = useQuery({
        queryKey:['selectclass'],
        queryFn: async()=>{
    const res = await axiosSecure.get('/selectclass')
    console.log(res.data)
    return res.data
        }
    })

    // useEffect(()=>{
    //     const filterprice = selectedClass.find(price=>price?.price)
        
        
    //     setClassPrice(filterprice)
    // },
    // [classPrice,setClassPrice])
    // console.log(classPrice)

    
    

const handleClassRemove =(id)=>{

    fetch(`https://b7a12-server.vercel.app/selectedclass/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
            refetch()
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'class remove',
          showConfirmButton: false,
          timer: 1500
        })
        }
    })
}

    return (
        <div>
            <h2 className='text-2xl font-bold '>All Selected Class</h2>
            

<div className="overflow-x-auto bg-base-200 p-10 mt-8">
  <table className="table " >
    {/* head */}
    <thead>
      <tr >
        <th>#</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Instructor Name</th>
        <th>Remove Class</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                selectedClass.map((item,index)=><tr key={item._id} >
                <th>{index+1}</th>
                <td>{item.className}</td>
                <td>{item.price}</td>
                <td>{item.instructorname}</td>
                <td><button  onClick={()=>handleClassRemove(item._id)} className="btn bg-red-700">Remove</button></td>
                <td>
                    <Link  to={`/dashboard/mypayment/${item._id}`}><button className="btn bg-green-400">Payment</button></Link>
                </td>
              </tr>)
            }
      
      
    </tbody>
  </table>
</div>

           
        </div>
    );
};

export default MySelectedClasses;