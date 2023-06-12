import React, { useEffect, useState } from 'react';
import InstructorCard from '../../Instructors/InstructorCard';

const PopularInstructor = () => {
    const [instructor,setInstructor] = useState([])
    useEffect(()=>{
        fetch('https://b7a12-server.vercel.app/allusers')
        .then(res=>res.json())
        .then(data=>{
            const instructor = data.filter(instructor=>instructor.role==="instructor")
            console.log(instructor)
           setInstructor(instructor)
        })
    },[])
    return (
        <div className='bg-pink-50 px-16 py-10 mt-10'>
            <h2 className='text-2xl font-extrabold text-center mt-10'>Popular  Instructor Section</h2>
            <div className='grid grid-cols-2 gap-5 mt-10'>
            {instructor.slice(0,6).map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
               
            </div>
        </div>
    );
};

export default PopularInstructor;