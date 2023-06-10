import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const ManageClasses = () => {
  
    const [axiosSecure] = useAxiosSecure()
const {data:classes=[],refetch} = useQuery({
    queryKey:['allclasses'],
    queryFn: async()=>{
const res = await axiosSecure.get('/allclasses')
console.log(res.data)
return res.data
    }
})

const handleStatusApprove =(id)=>{
    console.log(id)
    fetch(`http://localhost:5000/allclass/${id}`,{
    method:'PATCH',
    
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount){
      refetch()
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'status approve',
          showConfirmButton: false,
          timer: 1500
        })
  }
  })
}
const handleStatusDeny =(id)=>{
    console.log(id)
    fetch(`http://localhost:5000/classdeny/${id}`,{
    method:'PATCH',
    
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount){
      refetch()
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'status approve',
          showConfirmButton: false,
          timer: 1500
        })
  }
  })
}

    return (
        <div>
            <h2 className='text-2xl my-4 font-bold'>Manage All Classes : {classes.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           #
          </label>
        </th>
        <th>Class Info</th>
        
        <th>Instructor Info</th>
        <th>Available Seat</th>
        <th>Price</th>
        <th>Approve</th>
        <th>Deny</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
     
{
 classes.map((singleClass,index)=><tr key={singleClass._id}>
    <th>
      {index+1}
    </th>
    <td>
      <div className="flex-col items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{singleClass.className}</div>
        </div>
      </div>
    </td>
    <td>
    <div>
              <div className="font-bold">{singleClass.instructorname}</div>
              <div className="text-sm opacity-50">{singleClass.instructorEmail}</div>
            </div>
    </td>
    <td>{singleClass.seat}</td>
    <td className='text-right'>{singleClass.price}</td>
    <td>
        {
            singleClass.status==="approve"?"approve":<button disabled={singleClass.status==="denied"} onClick={()=>handleStatusApprove(singleClass._id)} className="btn bg-green-400">Pending</button>
        }
        </td>
        
    <th>
    {
            singleClass.status==="denied"?"denied":<button disabled={singleClass.status==="approve"} onClick={()=>handleStatusDeny(singleClass._id)} className="btn bg-red-600">Deny</button>
        }
      
    </th>
    <th>
        <Link to='/dashboard/feedback'><button className="btn bg-pink-600">Update</button></Link>
    </th>
  </tr>)
}

      
     
      
     
    </tbody>
    
    
  </table>
</div>


        </div>
    );
};

export default ManageClasses;