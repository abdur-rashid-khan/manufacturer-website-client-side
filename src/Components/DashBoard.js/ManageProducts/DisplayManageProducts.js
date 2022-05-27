import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const DisplayManageProducts = ({ manageProducts, index, refetch }) => {
  // delete
  const deleteBtn = () => {
    fetch(`https://mighty-everglades-10453.herokuapp.com/manage-products/${manageProducts._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          Swal.fire('unauthorized user', ' ', 'error');
          signOut(auth);
          localStorage.removeItem('token');
          return navigator('/login');
        }
        return res.json()
      })
      .then(data => {
        Swal.fire('delete successfully', ' ', 'success');
        refetch()
      })
  }
  return (
    <tr key={index} className="text-center">
      <th>{index + 1}</th>
      <td>{manageProducts.productTitle}</td>
      <td>${manageProducts.price}</td>
      <td>{manageProducts.quantity}</td>
      <td><button onClick={deleteBtn} className='bg-red-600 hover:bg-red-500 p-2 px-6 text-white rounded'>Delete</button></td>
    </tr>
  );
};

export default DisplayManageProducts;