import React from 'react';
import {  StarIcon } from '@heroicons/react/solid'

const DisplayReview = ({ review }) => {
  const {name ,rating, review:userReview} = review;
  return (
    <div className=''>
      <div class="card w-full bg-slate-50 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-slate-700 font-serif capitalize">Name : {name}</h2>
          <p className='flex items-center'> <span className='inline-block' style={{width:'20px'}}><StarIcon className='text-yellow-500'/></span>{rating}</p>
          <p className='text-slate-500 capitalize font-sans'>{userReview.slice(0,115)}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayReview;