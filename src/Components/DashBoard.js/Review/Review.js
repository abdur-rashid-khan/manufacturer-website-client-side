import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Review = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    
    const userData = {
      name:user.displayName,
      rating:e.rating,
      review:e.review
    }
    console.log(userData)
    fetch('http://localhost:5000/add-review',{
      method:'POST',
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        Swal.fire('Thank you for the rating','','success');
        reset()
      }
    })
  }
  return (
     <div className="w-96 m-auto bg-slate-100 shadow-xl p-4 rounded">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="">
            <label htmlFor="userName" className="text-slate-700 pt-2">
              User Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              autoComplete="userName"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              value={user.displayName}
              disabled
              // placeholder="User Name"
              // {...register("userName", {
              //   required: {
              //     value: true,
              //     message: "Please enter your name",
              //   }
              // })}
            />
            <label className="">
              {errors.userName?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.userName.message}
                </span>
              )}
            </label>
          </div>
          <div className="pt-3">
            <label htmlFor="rating" className="text-slate-700 pt-2">
              Rating
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              autoComplete="rating"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="product for rating  "
              {...register("rating", {
                required: {
                  value: true,
                  message: "Give a rating ",
                },
                min:{
                  value : 1,
                  message: "Give a rating between 1 and 5"
                } ,
                max: {
                  value:5,
                  message: "Give a rating between 1 and 5"
                },
              })}
            />
            <label className="">
              {errors.rating?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.rating.message}
                </span>
              )}
              {errors.rating?.type === "min" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.rating.message}
                </span>
              )}
              {errors.rating?.type === "max" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>
          <div className="pt-3">
            <label htmlFor="review" className="text-slate-700 pt-2">
            Review
            </label>
            <textarea 
            id="review"
            name="review"
            type="text"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            cols="30" 
            rows="4"
            placeholder="Review"
              {...register("review", {
                required: {
                  value: true,
                  message: "Please type here",
                },
              })}
            ></textarea>
            <label className="">
              {errors.review?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-bold hoverBtnSpacing"
        >
         Add Review
        </button>
      </form>
    </div>
  );
};

export default Review;