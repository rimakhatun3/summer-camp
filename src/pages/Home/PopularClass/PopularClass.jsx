import React from 'react';
import useClass from '../../../Components/hooks/useClasse';
import PopularClassCard from './PopularClassCard';

const PopularClass = () => {
    const [classes] = useClass()
    // console.log(classes)
    return (
        <div className='bg-red-100 py-10 mt-10 px-16'>
            <h2 className='text-2xl font-extrabold text-center my-10'>Popular Class Section</h2>
            <div className='grid  lg:grid-cols-3 gap-5'>
                {classes.slice(6,12).map(popular=><PopularClassCard key={popular._id} popular={popular}></PopularClassCard>)}
            </div>
        </div>
    );
};

export default PopularClass;