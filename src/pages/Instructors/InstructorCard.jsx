import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Fade, Slide } from 'react-awesome-reveal';

const InstructorCard = ({instructor}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>


      
            <div className="card w-full bg-base-100 shadow-xl">
            <Slide>
            <figure><img className='h-80' src={instructor.image} alt="Shoes" /></figure>
      </Slide>
  
  <div className="card-body text-center ">
  <Fade delay={1e3} cascade damping={1e-1}>
  <h2 className=" text-center">
     {instructor.name}
      
    </h2>
    <p>{instructor.email}</p>
      </Fade>
    
    
  </div>
</div>
        </div>
    );
};

export default InstructorCard;