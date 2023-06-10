import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const InstructorCard = ({instructor}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={user?.photoURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {instructor.name}
      <div className="badge badge-secondary">{instructor.email}</div>
    </h2>
    
  </div>
</div>
        </div>
    );
};

export default InstructorCard;