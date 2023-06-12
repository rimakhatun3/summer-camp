import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PopularClassCard = ({popular}) => {
    const {image,className,price} = popular
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl image-full">
            <Fade delay={1e3} shake damping={1e-1}>
            <figure><img src={image} alt="Shoes" /></figure>
      </Fade>
            
  <div className="card-body">
    <h2 className="card-title">{className}</h2>
    <p><span className='text-xl font-bold'>Price</span>{price}</p>
    
    <div className="card-actions justify-end">
      <Link to='/allclasses'><button className="btn btn-primary bg-red-500 me-2">go to Select Page <FaArrowRight></FaArrowRight></button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularClassCard;