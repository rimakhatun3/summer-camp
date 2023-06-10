import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Components/hooks/UseAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOutForm = ({price,data}) => {
    console.log(price,data)
    const {user} = useContext(AuthContext)
   const [axiosSecure] = useAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();
const [cardError,setCardError] = useState('')
const [clientSecret,setClientSecret] = useState('')
const [transitionId,setTransitionId] = useState('')
const [processing,setProcessing] = useState(false)

useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price})
    .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
},[price,axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          
          return;
        }
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
          }
          setProcessing(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.name || "anonious",
                  email:user?.email || "invalid email"
                },
              },
            },
          );
          
          if(confirmError){
            setCardError(confirmError.message)
            
          }
        

         
          console.log('paymentInten',paymentIntent)
  setProcessing(false)
  if(paymentIntent.status=="succeeded"){
setTransitionId(paymentIntent.id)
const payment ={
    transationId :paymentIntent.id,
    email:user?.email,
    price,
    classId : data._id,
    className: data.className,
    date:new Date(),
  
  }

  axiosSecure.post('/payment',payment)
.then(res=>{
  console.log(res.data)
  

  if(res.data.result.insertedId){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'class added success',
      showConfirmButton: false,
      timer: 1500
    })
  }
})

  }

 
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm bg-pink-600 mt-4' type="submit" disabled={!stripe  }>
        Pay
      </button>
    </form>
    {cardError && <p className='text-red-500 ml-5'>{cardError}</p>}
    {
  transitionId && <p className='text-green-800 m-3'>Transaction complete with transactionId: {transitionId}</p>
}
        </div>
    );
};

export default CheckOutForm;