import React from 'react';
import useClass from '../../Components/hooks/useClasse';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import ClassCard from '../Dashboard/ClassCard';
import useEnrolClass from '../../Components/useEnrollClasse';

const AllClasses = () => {
    const [classes,refetch] = useClass()
    const [axiosSecure] = useAxiosSecure()

    const filterClass = classes.filter(item=>item.status==="approve")

    
    const [enrollClass] = useEnrolClass()
   console.log(enrollClass)
    
  
const handleSelectedClass =(selectedClass)=>{
    console.log(selectedClass)
    const {className,instructorname,instructorEmail,price} = selectedClass
    const  selected = {instructorEmail,instructorname,className,price} 
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