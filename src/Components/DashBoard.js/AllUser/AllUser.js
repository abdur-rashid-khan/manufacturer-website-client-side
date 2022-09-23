import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import MadeAdmin from '../MadeAdmin/MadeAdmin';
import { useQuery } from 'react-query';
import Loading from '../../Shear/Loading/Loading';

const AllUser = () => {
  const navigate = useNavigate();

  const { isLoading, error, data: user, refetch } = useQuery('userData', () =>
        fetch('https://manufacturerserverside.onrender.com/user', {
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
      <div className='text-center'>
        <h1 className='text-2xl pb-6'>Total user </h1>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr className='active'>
            <th>Serial</th>
            <th>Email</th>
            <th>Role</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-base md:text-2xl '>
            {
              user?.length === 0 && 'No Data Found '
            }
          </tr>
          {
            user.map((user, index) =>
              <MadeAdmin
              key={index}
              user={user}
              index={index}
              refetch={refetch}
              ></MadeAdmin>
            )
          }

        </tbody>
      </table>
    </div>
  );
};

export default AllUser;