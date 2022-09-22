import React from 'react';
import Footer from '../Page/Footer/Footer';
import BestSell from '../Page/LatestProducts/LatestProducts';
import Products from '../Page/Products/Products';
import Slider from '../Slider/Slider';
import ReviewSecction from '../Page/ReviewSecction/ReviewSecction';
import Blog from '../Page/Blog/Blog';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <BestSell></BestSell>
      <Products></Products>
      <Blog></Blog>
      <ReviewSecction></ReviewSecction>
      <Footer></Footer>
    </div>
  );
};

export default Home;