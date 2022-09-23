import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from '../../Shear/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import SingleOrder from './SingleOrder';

const MyOrder = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);
  const email = user.email;
  const { isLoading, error, data, refetch } = useQuery('orderDataForUser', () =>
    fetch(`https://manufacturerserverside.onrender.com/my-order/${email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Swal.fire('Forbidden ', '', 'error');
          localStorage.removeItem('token')
          signOut(auth);
          return navigate('/login');
        }
        return res.json();
      }))
  if (isLoading || loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className=""><h1>this my order page </h1></div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Products Name </th>
              <th>Price</th>
              <th>Products Quantity</th>
              <th colSpan={2}>Option</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((order,index) => <SingleOrder orderData={order} index={index} refetch={refetch} key={order._id}></SingleOrder>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;