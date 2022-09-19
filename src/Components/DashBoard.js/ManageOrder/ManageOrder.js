import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shear/Loading/Loading';
import SingleManageOrder from './SingleManageOrder';




const ManageOrder = () => {
  const navigate = useNavigate();

  const { isLoading, error, data: manageOrder, refetch } = useQuery('userData', () =>
    fetch('https://mighty-everglades-10453.herokuapp.com/manage-order', {
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
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="text-start">
        <h1 className='text-3xl text-slate-600 pb-3 font-serif font-semibold'>Manage Order</h1>

      </div>
      <div className="">
        <table className="table table-compact w-full m-auto">
          <thead>
            <tr className='active text-center'>
              <th>Serial</th>
              <th>Products Name</th>
              <th>Products Price</th>
              <th>Products Quantity</th>
              <th colSpan={2}>option</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-base md:text-2xl '>
              {
                manageOrder?.length === 0 && 'No Data Found '
              }
            </tr>
            {
              manageOrder.map((manageOrder, index) =>
                <SingleManageOrder
                  key={index}
                  manageOrder={manageOrder}
                  index={index}
                  refetch={refetch}
                ></SingleManageOrder>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;