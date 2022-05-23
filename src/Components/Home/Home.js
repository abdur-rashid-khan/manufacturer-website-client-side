import React from 'react';
import BestSell from '../Page/LatestProducts/LatestProducts';
import Products from '../Page/Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <BestSell></BestSell>
      <Products></Products>
    </div>
  );
};

export default Home;