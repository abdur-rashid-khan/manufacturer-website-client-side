import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import './Review.css'


const DisplayReview = ({ review }) => {
  const { name, rating, review: userReview } = review;
  return (
    <div className='p-4 py-6 '>
      <div class="card w-full bg-[#ffff] border border-white shadow-2xl cursor-pointer rounded">
        <div className="card-body">
          <div className="user_img">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 m-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="text-center pb-4">
            <h2 className=" text-slate-700 font-serif capitalize text-xl "> {name}</h2>
          </div>
          <p className='flex items-center'>Rating : <span className='inline-block' style={{ width: '20px' }}><StarIcon className='text-yellow-500' /></span>{rating}</p>
          {

          }
          <p className='text-slate-500 capitalize font-sans'>{userReview.slice(0, 115)}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayReview;