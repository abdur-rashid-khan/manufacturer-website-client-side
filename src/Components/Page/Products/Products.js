import React from 'react';
import { Link } from 'react-router-dom';
import LoadingProducts from '../../Hook/LoadingProducts';

const Products = () => {
  const [products] = LoadingProducts();
  const productsSlice = products.slice(0, 8);
  return (
    <div className='container mx-auto px-4 py-4'>
      <h1 className='text-center text-3xl text-blue-700 py-8 font-serif font-semibold'>Tots and parch</h1>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:grid-cols-2  gap-4'>
          {
            productsSlice.map(p =>
              <div className="bg-slate-200 border shadow-lg rounded-lg" key={p._id}>
                <div className='m-auto' style={{width:'100%',height:'auto'}}>
                  <img className='p-4 rounded' src={p.images} alt={p.productsTitle} style={{width:'100%',}} />
                </div>

                <div className='pt-4 '>
                  <strong className='pt-2 inline-block text-black p-2'>Price : ${p.price}</strong><br />
                  <strong className='py-2 inline-block text-black p-2'>{p.productTitle.slice(0,30)}...</strong>
                  <p className=' text-slate-700 p-2'>{p.description.slice(0, 100)}</p>
                </div>
                <Link to={`/purchase/${p._id}`}  className='text-center bg-blue-700 hover:bg-blue-600 w-full py-2 rounded-t mt-4 text-white inline-block'>purchase</Link>
              </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Products;