import React from 'react';
import { Link } from 'react-router-dom';

const SingleManageOrder = ({manageOrder , index , refetch}) => {
  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td className='text-left'>{manageOrder.productTitle}</td>
      <td>{manageOrder.price}</td>
      <td>{manageOrder.quantity}</td>
      {
        manageOrder?.paid ? <td > <button  disabled className='bg-slate-800 text-slate-500 p-2 rounded'>payed</button> </td>:<td><button disabled className='bg-slate-800 border text-slate-500 p-2 rounded' >unpaid</button></td>
      }
      {
        !manageOrder?.paid ?<td > <button  disabled className='bg-slate-800 text-slate-500 p-2 rounded'>shping</button> </td> : 
        <td > <button className='bg-blue-700 p-2  text-white rounded text-center hover:bg-blue-600'>shping</button> </td>
      }
    </tr>
  );
};

export default SingleManageOrder;