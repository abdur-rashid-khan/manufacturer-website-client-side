import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({ orderProducts }) => {
  const { price } = orderProducts;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [paymentMethodMess, setPaymentMethodMess] = useState('');
  const [clientSecret , setClientSecret] =  useState('');
console.log(price)

  useEffect(() => {
    if(price){
      fetch(`http://localhost:5000/create-payment-intent`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ price })
      })
        .then(res => res.json())
        .then(data => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
            console.log(data);
          }
        })
    }

  }, [price])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (paymentMethod) {
      console.log(paymentMethod)
      setPaymentMethodMess(paymentMethod)
    }

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '18px',
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
      {
        cardError && <p className='text-red-600 pt-4'>{cardError}</p>
      }
      {
        cardError && <p>{paymentMethodMess}</p>
      }
      <button className='mt-6 bg-blue-700 px-10 py-1 text-white hover:bg-blue-600 rounded' type="submit" disabled={!stripe || clientSecret}> Pay
      </button>
    </form>
  );
};

export default CheckoutForm;