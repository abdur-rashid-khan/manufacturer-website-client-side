import React from 'react';
import LoadingProducts from '../../Hook/LoadingProducts';

const Tools = () => {
  const [products] = LoadingProducts();
  return (
    <div className='container mx-auto px-2'>
      <div className='pt-20 py-6'>
        <div className="text-center py-6">
          <h1 className='text-2xl text-blue-600 font-serif font-semibold'>Totals Tools and Parts </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
          {
            products.map(p=>
              
              <div className="bg-slate-200 border shadow-lg rounded-lg" key={p._id}>
                <div className=''>
                  <img src={p.images} alt={p.productsTitle} style={{ width: '100%', height: '350px' }} />
                </div>

                <div className='pt-4 '>
                  <strong className='pt-2 inline-block text-black p-2'>Price : ${p.price}</strong>
                  <strong className='py-2 inline-block text-black p-2'>{p.productTitle}</strong>
                  <p className=' text-slate-700 p-2'>{p.description.slice(0, 100)}</p>
                </div>
                <button className='text-center bg-blue-700 hover:bg-blue-600 w-full py-2 rounded-t mt-4 text-white'>purchase</button>
              </div>
              
              
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Tools;