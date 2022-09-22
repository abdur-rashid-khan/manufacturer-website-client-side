import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shear/Loading/Loading';
import DisplayManageProducts from './DisplayManageProducts';




const ManageProducts = () => {
  const navigate = useNavigate();

  const { isLoading, error, data: manageProducts, refetch } = useQuery('userData', () =>
    fetch('https://shy-hoodie.cyclic.app/manage-products', {
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
    <section className='py-2'>
      <div className="text-center  pb-8">
        <h1 className='text-xl text-slate-600'>Manage Products </h1>
      </div>
      <div className="">
        <table className="table table-compact w-full m-auto">
          <thead>
            <tr className='active text-center'>
              <th>Serial</th>
              <th>Products Name</th>
              <th>Products Price</th>
              <th>Products Quantity</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-base md:text-2xl '>
              {
                manageProducts?.length === 0 && 'No Data Found '
              }
            </tr>
            {
              manageProducts.map((manageProducts, index) =>
                <DisplayManageProducts
                  key={index}
                  manageProducts={manageProducts}
                  index={index}
                  refetch={refetch}
                ></DisplayManageProducts>
              )
            }

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;