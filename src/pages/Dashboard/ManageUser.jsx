import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {
  
const {data :users=[],refetch} =useQuery({
    queryKey:['user'],
    queryFn:async ()=>{
        const res = await axios.get('http://localhost:5000/allusers')
        return res.data
    }
    
})


const handleMakeAdmin = (user)=>{
  console.log(user)
  fetch(`http://localhost:5000/alluser/admin/${user._id}`,{
    method:'PATCH',
    
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount){
      refetch()
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
  }
  })
}
const handleMakeInstructor = (user)=>{
  console.log(user)
  fetch(`http://localhost:5000/alluser/instructor/${user._id}`,{
    method:'PATCH',
    
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount){
      refetch()
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an instructor Now!`,
          showConfirmButton: false,
          timer: 1500
        })
  }
  })
}

    return (
        <div>
            <h2 className='text-xl font-bold my-4'>Manage all User:{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Action(admin)</th>
        <th>Action(instractor)</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        users.map((user,index)=><tr key={user._id}>


            <th>
             {
                index + 1
             }
                      </th>
            <td>
              <div className="flex items-center space-x-3">
                
                <div>
                  <div className="font-bold">{user.name}</div>
                  
                </div>
              </div>
            </td>
            <td>
        {user.email}
              
            </td>
            
            <td>
            {
                user.role==="admin" ?<button disabled className="btn btn-primary btn-xs">Admin</button>:<button onClick={()=>handleMakeAdmin(user)} className="btn btn- btn-xs">Admin</button>
            }
                
                </td>
                <td>
                {
                user.role==="instructor" ?<button disabled className="btn btn-primary btn-xs">Instructor</button>:<button onClick={()=>handleMakeInstructor(user)} className="btn btn- btn-xs">Instructor</button>
            }
                
                </td>
          </tr>)
      }
      
     
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default ManageUser;