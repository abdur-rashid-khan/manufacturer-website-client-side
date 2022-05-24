import React from 'react';
import img from '../../assets/404.webp';
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <section className='container mx-auto'>
      <div id='img' className='text-center'>
        <h2 className='text-5xl text-white font-serif font-semibold'>404</h2>
        <h1 className='text-white text-3xl font-serif font-semibold py-4'>No Page Found</h1>
      </div>
    </section>
  );
};

export default PageNotFound;