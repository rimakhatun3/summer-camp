import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useClass from '../../Components/hooks/useClasse';
import { useLoaderData, useParams } from 'react-router-dom';

const Payment = () => {
    
    const data = useLoaderData()
    console.log(data)
    const price = data.price
   
//  

   
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY);
   
    return (
        <div>
           <h2 className='text-2xl font-bold text-center'>Please Pay</h2> 
           <div className=' w-2/4 mx-auto my-20'>
           <Elements stripe={stripePromise}>
      <CheckOutForm data={data} price={price}></CheckOutForm>
    </Elements>
           </div>
        </div>
    );
};

export default Payment;