import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const MadeAdmin = ({ user, refetch, index }) => {
  const adminBtn = () => {

    fetch(`http://localhost:5000/admin/${user.email}`, {
      method: 'PUT',
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
        Swal.fire('created admin successfully', ' ', 'success');
        refetch()
      })
  }
  // delete
  const deleteBtn = () => {
    window.confirm('are you sure delete user info')
    fetch(`http://localhost:5000/user/delete/${user.email}`, {
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
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      {
        user.role === 'admin' ?
          <td><button disabled className='p-2 px-6 bg-slate-800 rounded'>Admin</button></td>
          :
          <td><button onClick={adminBtn} className='p-2 px-6 bg-blue-700 hover:bg-blue-600 text-white rounded'>Admin</button></td>
      }
      <td><button onClick={deleteBtn} className='bg-red-600 hover:bg-red-500 p-2 px-6 text-white rounded'>Delete</button></td>
    </tr>
  );
};

export default MadeAdmin;