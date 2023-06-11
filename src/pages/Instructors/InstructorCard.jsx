import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const InstructorCard = ({instructor}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='h-80' src={instructor.image} alt="Shoes" /></figure>
  <div className="card-body text-center ">
    <h2 className=" text-center">
     {instructor.name}
      
    </h2>
    <p>{instructor.email}</p>
    
  </div>
</div>
        </div>
    );
};

export default InstructorCard;