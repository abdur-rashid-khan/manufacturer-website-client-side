import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingProducts from '../../Hook/LoadingProducts';

const Products = () => {
  const navigate = useNavigate();
  const [products] = LoadingProducts();
  const productsSlice = products.slice(0, 8);
  return (
    <div className='container mx-auto px-4 py-4'>
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold px-4 leading-10 pt-20 uppercase  text-center title_line pb-8">
        Tots and parch
      </h1>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:grid-cols-2 gap-4'>
          {
            productsSlice.map(p =>
              <div className="bg-[#fff] border border-white border-b-0 shadow-2xl rounded-lg" key={p._id}>
                <div className='m-auto' style={{ width: '220px', height: 'auto' }}>
                  <img className='rounded' style={{ width: '100%', height: 'auto' }} src={p.images} alt={p.productsTitle} />
                </div>
                <div className="px-2"><hr className='bg-[#00c7492a] w-full h-[2px] rounded' /></div>
                <div className='pt-4 '>
                  <strong className='pt-1 inline-block text-slate-700 p-2'>Price : ${p.price}</strong><br />
                  <strong className='inline-block text-slate-700 px-2'>{p.productTitle.slice(0, 30)}...</strong>
                  {
                    p.description.length < 95 ?
                      <p className=' text-slate-700 p-2'>{p.description}</p>
                      :
                      <p className=' text-slate-700 p-2 '>{p.description.slice(0, 95)} <Link to={`/purchase/${p._id}`} className='underline font-serif font-semibold text-slate-600' >See More</Link></p>
                  }

                </div>
                <Link to={`/purchase/${p._id}`} className='text-center bg-[#00c749] hover:bg-[#00c749d7] w-full py-2 rounded-b mt-4 text-white inline-block hover:tracking-[2px] ease-in-out duration-500'>Purchase</Link>
              </div>)
          }
        </div>
        <div className="text-center my-12">
          <button onClick={() => {
            navigate('/tools-parts')
          }} className="btnc btn-gradient gradient2 text-center">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;