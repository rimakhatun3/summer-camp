import React from 'react';
import useClass from '../../Components/hooks/useClasse';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllClasses = () => {
    const [classes,refetch] = useClass()
    const [axiosSecure] = useAxiosSecure()

    const filterClass = classes.filter(item=>item.status==="approve")
  
const handleSelectedClass =(selectedClass)=>{
    console.log(selectedClass)
    const {className,instructorname,instructorEmail} = selectedClass
    const  selected = {instructorEmail,instructorname,className} 
    console.log(selected)

 fetch('http://localhost:5000/selectedclass',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(selected)

 })
 .then(res=>res.json())
 .then(data=>{
    console.log(data)
    if(data.insertedId){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'data added success',
            showConfirmButton: false,
            timer: 1500
          })
    }
 })
 
  
}

    return (
        <div>
            <div className="overflow-x-auto overflow-y-auto">
  <table className="table mt-36">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seat</th>
        <th>Price</th>
        <th>Select</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        filterClass.map((user,index)=><tr key={user._id}>
            <th>
             {
                index + 1
             }
                      </th>
                      <td>
                      <div className="mask mask-squircle w-12 h-12">
                <img src={user.image} alt="Avatar Tailwind CSS Component" />
              </div>
                      </td>
            <td>
                  <div className="font-bold">{user.className}</div>
            </td>
            <td>
        <p>{user.instructorname}</p>
              
            </td>
            <td>
        <p>{user.seat}</p>
              
            </td>
            <td>
        <p>{user.price}</p>
              
            </td>
            
            <td>
            <button onClick={()=>handleSelectedClass(user)}  className="btn btn-primary ">Select</button>
                </td>

          </tr>)
      }
      
     
     
    </tbody>
   
    
  </table>
</div> 
        </div>
    );
};

export default AllClasses;