import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    const products ={
      productTitle:e.productTitle,
      price:e.price,
      quantity:e.quantity,
      images:e.images,
      description:e.description
      
    }
    fetch('http://localhost:5000/products',{
      method:'POST',
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`,
      },
      body:JSON.stringify(products)
    })
    .then(res => {
      if(res.status===403){
        Swal.fire('unauthorized user' ,' ','error');
        signOut(auth);
        localStorage.removeItem('token');
        return navigator('/login');
      }
      return res.json()
    })
    .then(data=>{
      if(data.acknowledged){
        Swal.fire('Data insert success','','success');
        reset();
      }
    })
  }
  return (
    <div className="md:max-w-lg w-96 bg-slate-200 p-4 rounded mx-auto ">
      <div className="header text-center pt-6 ">
        <h1 className='text-2xl  font-serif text-slate-700'>Add Product</h1>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="">
            <label htmlFor="productTitle" className="text-slate-700 pt-2">
              Product Title
            </label>
            <input
              id="productTitle"
              name="productTitle"
              type="text"
              autoComplete="productTitle"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="Product Title"
              {...register("productTitle", {
                required: {
                  value: true,
                  message: "Please enter your product title",
                },
              })}
            />
            <label className="">
              {errors.productTitle?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.productTitle.message}
                </span>
              )}
            </label>
          </div>
          <div className="pt-3">
            <label htmlFor="price" className="text-slate-700 pt-2">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              autoComplete="price"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="price "
              {...register("price", {
                required: {
                  value: true,
                  message: "Please enter your product price",
                },
              })}
            />
            <label className="">
              {errors.price?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="pt-3">
            <label htmlFor="quantity" className="text-slate-700 pt-2">
              product quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="quantity"
              autoComplete="quantity"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder=" product quantity"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Please enter your product quantity",
                }
              })}
            />
            <label className="">
              {errors.quantity?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="pt-3">
            <label htmlFor="images" className="text-slate-700 pt-2">
              Images
            </label>
            <input
              id="images"
              name="images"
              type="images"
              autoComplete="images"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder=" product images"
              {...register("images", {
                required: {
                  value: true,
                  message: "Please enter your product images",
                }
              })}
            />
            <label className="">
              {errors.images?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.images.message}
                </span>
              )}
            </label>
          </div>
          <div className="pt-3">
            <label htmlFor="description" className="text-slate-700 pt-2">
              Product Description
            </label>
            <textarea
            style={{width:"100%"}}
            name="description" 
            id="description" 
            cols="62" rows="4"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder=" Product Description"
            {...register("description", {
              required: {
                value: true,
                message: "Please enter your product description",
              }
            })}
            ></textarea>
            <label className="">
              {errors.description?.type === "required" && (
                <span className="text-red-500 text-sm pt-2">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-bold hoverBtnSpacing"
          >
            Add a new product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;