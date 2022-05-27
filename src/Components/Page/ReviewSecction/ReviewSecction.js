import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shear/Loading/Loading';
import DisplayReview from './DisplayReview';

const ReviewSecction = () => {
  const navigate = useNavigate();
  const { isLoading, error, data: review, refetch } = useQuery('reviewSection', () =>
    fetch('https://mighty-everglades-10453.herokuapp.com/review', {
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
  const reviewTotalLength = review.length ;
  // console.log(reviewTotalLength);
  // console.log();
  const latestReview = review.slice(reviewTotalLength - 8 , reviewTotalLength);
  return (
    <div className='container mx-auto px-4 my-6'>
      <div className='text-center py-10 text-4xl font-serif font-medium text-blue-700'>
        <h1>Latest Review</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {
          latestReview.map(r => <DisplayReview review={r} key={r._id}></DisplayReview>)
        }
      </div>

    </div>
  );
};

export default ReviewSecction;