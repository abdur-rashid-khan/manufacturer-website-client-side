import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Shear/Loading/Loading';
import './Purchase.css'

const Purchase = () => {
  const [user, loading, UserError] = useAuthState(auth);
  const [count, setCount] = useState(50)
  const { id } = useParams();
  const navigate = useNavigate()
  const { isLoading, error, data: products } = useQuery('singleProducts', () =>
    fetch(`https://mighty-everglades-10453.herokuapp.com/purchase/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
  )
  if (isLoading || loading) {
    return <Loading></Loading>
  }

  const { images, price, productTitle, description, quantity } = products;

  const plushBtn = () => {
    let number1 = parseInt(count)
    setCount(number1 + 1);
  }
  const maineBtn = () => {
    let number2 = parseInt(count)
    setCount(number2 - 1);
  }
  // orderBtn
  const orderBtn = () =>{
    const order ={
      images:images,
      price:price * count,
      productTitle:productTitle,
      description:description,
      quantity:count,
      email:user.email,
      productsId:id,
    }
    fetch(`https://mighty-everglades-10453.herokuapp.com/order/${id}`,{
      method:"post",
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(orderData =>{
      if(orderData){
        Swal.fire('Order success','Now pay ','success');
        return navigate(`/payment/${id}`)
      }
    })
  }
  return (
    <div className='container mx-auto px-2 pt-16 '>
      <div className="singlePageSize ">
        <div id='totalContent' className="grid grid-cols-1 md:grid-cols-2 items-center justify-center justify-items-center">
          <div className="productImg">
            <img src={images} alt={productTitle} />
          </div>
          <div className="productsContent">
            <div>
              <h1 className='text-2xl text-slate-800'>Products Name : {productTitle}</h1>
              <strong className='block text-lg pt-2 text-slate-800'> Stock Available : {quantity}</strong>
              <strong className='block text-lg pt-1 text-slate-800'>Price : ${price}</strong>
              <p className='py-4 text-slate-500'>Description : {description}</p>
            </div>
            {/* update quantity */}
            <div className="form-control pt-6">
              <div className="input-group ">
                {
                  parseInt(count) >= 50 ?
                    <button onClick={maineBtn} className='bg-blue-500 hover:bg-blue-700 px-3 pb-1 text-white text-3xl'>-</button>
                    :
                    <button disabled className='bg-blue-400 px-3 pb-1 text-white text-3xl'>-</button>
                }
                <input type="number" disabled value={count} className="text-center bg-slate-200 text-black" />

                {
                  parseInt(quantity) > parseInt(count) ?<button onClick={plushBtn} className='bg-blue-500 hover:bg-blue-700 px-3 pb-1 text-white text-3xl'>+</button> 
                  :
                  <button disabled  className='bg-blue-300 px-3 pb-1 text-white text-3xl'>+</button>
                }

                
              </div>
              <div>
                <p className='text-red-600 py-4'>
                  {
                    parseInt(count) <= 49 && 'min seleted products 50 up'
                  }
                  {
                    parseInt(quantity) < parseInt(count+1) && 'have not many products'
                  }
                </p>
              </div>
            </div>
            <div className="mt-6">
              {
                parseInt(count) >= 50 ? <button onClick={orderBtn} className='hover:bg-blue-700 bg-blue-600 text-center w-full text-lg py-1 text-white font-mono rounded inline-block'>Pay Now ${parseInt(price) * count}</button>
                  :
                  <button disabled className=' bg-blue-400 text-center w-full text-lg py-1 text-white font-mono rounded '>Pay Now ${parseInt(price) * count}</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;