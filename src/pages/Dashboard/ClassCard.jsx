import React from 'react';
import useEnrolClass from '../../Components/useEnrollClasse';

const ClassCard = ({singleClass,handleSelectedClass}) => {
  const [enrollClass] = useEnrolClass()

   console.log(enrollClass)
    const {image,className,instructorname,price,seat,_id} = singleClass
    const filter = enrollClass.filter(item=>item.classId==_id)
    console.log(filter)
    
    
    return (
        <div>
            
            <div className="card w-full bg-base-100 mt-36 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{className}</h2>
    <h2 className="card-title">{instructorname}</h2>
    <p><span className='text-xl font-bold'>Price:</span>{price}</p>
    <p><span className='text-xl font-bold'>Seat:</span>{seat}</p>
    <div className="card-actions">
    <button onClick={()=>handleSelectedClass(singleClass)}  className="btn btn-primary ">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;