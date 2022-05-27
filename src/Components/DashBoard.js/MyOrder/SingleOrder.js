import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({ orderData , index , refetch}) => {
  const deleteOrderItems = (id) =>{

    fetch(`http://localhost:5000/cancel-order-item/${id}`,{
      method:"DELETE",
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      refetch();
    })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td className='text-left'>{orderData.productTitle}</td>
      <td>{orderData.price}</td>
      <td>{orderData.quantity}</td>
      {
        orderData?.paid ? <td > tr id </td>:<td><Link to={`/payment/${orderData.productsId}`}
        className='bg-blue-700 p-2  text-white rounded text-center hover:bg-blue-600'>pay now</Link></td>
      }
      {
        !orderData?.paid ? <td ><button onClick={()=>deleteOrderItems(orderData.productsId)} className='bg-red-600 p-2  text-white rounded text-center hover:bg-red-400'>Cancel</button></td> : <td > <button  disabled className='bg-slate-800 text-slate-500 p-2 rounded'>payed</button> </td>
      }
    </tr>

  );
};

export default SingleOrder;