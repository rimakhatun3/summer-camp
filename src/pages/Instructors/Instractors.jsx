import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/ins.avif'
import InstructorCard from './InstructorCard';
import { Slide } from 'react-awesome-reveal';

const Instractors = () => {
    const [instructor,setInstructor] = useState([])
    useEffect(()=>{
        fetch('https://b7a12-server.vercel.app/allusers')
        .then(res=>res.json())
        .then(data=>{
            const instructor = data.filter(instructor=>instructor.role==="instructor")
            
           setInstructor(instructor)
        })
    },[])
    return (
        <div >
            <Slide><img className='w-full opacity-75' src={img1} alt="" /></Slide>
            
            <h2 className='text-2xl font-extrabold text-center my-5'>Top 6 Instructor</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {instructor.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
               
            </div>
        </div>
    );
};

export default Instractors;