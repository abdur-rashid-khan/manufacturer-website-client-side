import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';


// 
const stripePromise = loadStripe('pk_test_51L2znXHuuoIoDJuCqwOm3Bcud8nW8JhBjhvbJfJylL46l8mW7rENlWSwFPGeeN0NjTgSlLpl5M553bEjFf3LeWmZ00xI8q8tS3');


const Payment = () => {
  const [orderProducts, setOrderProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://mighty-everglades-10453.herokuapp.com/order/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setOrderProducts(data)
        }
      })
  }, [id])

  return (
    <section className='pt-16 container mx-auto px-2 h-screen'>
      <div className='py-6'>
        <div className="card max-w-2xl bg-white rounded-lg shadow-2xl border-t m-auto">
          <div className="card-body">
            <div className="block sm:flex mx-auto items-center justify-start gap-4">
              <div className='mx-auto' style={{ width: '150px', height: 'auto' }}>
                <img className='rounded' src={orderProducts.images} style={{ width: "100%" }} alt="" />
              </div>
              <div>
                <strong className="card-title text-slate-700">{orderProducts.productTitle}</strong>
                <p className='py-2 text-xl text-slate-700'>Price : ${orderProducts.price}</p>
                <p className='text-xl text-slate-700'>Products Quantity : {orderProducts.quantity}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card max-w-2xl bg-white shadow-2xl border-t rounded-lg py-6 px-6  m-auto mt-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm orderProducts={orderProducts}/>
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;