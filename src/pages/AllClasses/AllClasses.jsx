import React from 'react';
import useClass from '../../Components/hooks/useClasse';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';

import Swal from 'sweetalert2';
import ClassCard from '../Dashboard/ClassCard';
import useEnrolClass from '../../Components/useEnrollClasse';

const AllClasses = () => {
    const [classes,refetch] = useClass()
    const [axiosSecure] = useAxiosSecure()

    const filterClass = classes.filter(item=>item.status==="approve")
  
const handleSelectedClass =(selectedClass)=>{
    console.log(selectedClass)
    const {className,instructorname,instructorEmail,price,seat} = selectedClass
    const  selected = {instructorEmail,instructorname,className,price,seat} 
    console.log(selected)

 fetch('https://b7a12-server.vercel.app/selectedclasses',{
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
{/* <h2 className=' font-bold text-2xl text-center'> All The Classes</h2> */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5   '>
        {
            filterClass.map(singleClass=><ClassCard handleSelectedClass={handleSelectedClass} key={singleClass._id} singleClass={singleClass}></ClassCard>)
          }
        </div>
         
        </div>
    );
};

export default AllClasses;