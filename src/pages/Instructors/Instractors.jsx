import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/ins.avif'
import InstructorCard from './InstructorCard';

const Instractors = () => {
    const [instructor,setInstructor] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allusers')
        .then(res=>res.json())
        .then(data=>{
            const instructor = data.filter(instructor=>instructor.role==="instructor")
            console.log(instructor)
           setInstructor(instructor)
        })
    },[])
    return (
        <div >
            
            <img className='w-full opacity-75' src={img1} alt="" />
            <h2 className='text-2xl font-extrabold text-center my-5'>Top 6 Instructor</h2>
            <div className='grid grid-cols-2 gap-5 mt-10'>
            {instructor.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
               
            </div>
        </div>
    );
};

export default Instractors;