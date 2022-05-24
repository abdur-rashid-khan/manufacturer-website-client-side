import React from 'react';
import LoadingProducts from '../../Hook/LoadingProducts';

const LatestProducts = () => {
  const [products] = LoadingProducts();
  const latest1 = products.length - 4;
  console.log(products.slice(latest1 , products.length))
  const newProducts = products.slice(latest1 , products.length);
  return (
    <div className='container mx-auto px-2 '>
        <div className="header text-center py-6 text-3xl text-blue-500 font-serif font-semibold">
          Latest Products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            newProducts.map((p) =>
              <div className="bg-slate-200 border shadow-lg rounded-lg" key={p._id}>
                <div className='' style={{height:'380px'}}>
                <img src={p.images} alt={p.productsTitle} style={{width:'100%',margin:'auto'}}  />
                </div>
                
                <div className='pt-4 '>
                  <strong className='pt-2 inline-block text-black p-2'>Price : ${p.price}</strong>
                  <strong className='py-2 inline-block text-black p-2'>{p.productTitle}</strong>
                  <p className=' text-slate-700 p-2'>{p.description.slice(0,100)}</p>
                </div>
                <button className='text-center bg-blue-700 hover:bg-blue-600 w-full py-2 rounded-t mt-4 text-white'>purchase</button>
              </div>
            )
          }
        </div>
    </div>
  );
};

export default LatestProducts; 