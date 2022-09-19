import React, { Component } from "react";
import Slider from "react-slick";
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shear/Loading/Loading';
import DisplayReview from './DisplayReview';
import './Review.css'

const ReviewSecction = () => {
  const navigate = useNavigate();
  const { isLoading, error, data: review, refetch } = useQuery('reviewSection', () =>
    fetch('https://mighty-everglades-10453.herokuapp.com/review', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Swal.fire('Forbidden ', '', 'error');
          localStorage.removeItem('token')
          signOut(auth);
          return navigate('/login');
        }
        return res.json();
      }))
  if (isLoading) {
    return <Loading></Loading>
  }
  const reviewTotalLength = review.length;
  const latestReview = review.slice(reviewTotalLength - 8, reviewTotalLength);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    lazyLoad: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="review">
      <div className='container mx-auto px-4'>
        <div className='text-center py-10 text-4xl font-serif font-medium text-blue-700'>
          <h1>Latest Review</h1>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {
          latestReview.map(r => <DisplayReview review={r} key={r._id}></DisplayReview>)
        }
      </div> */}
        <div >
          <Slider {...settings}>
            {
              latestReview.map(r => <DisplayReview review={r} key={r._id}></DisplayReview>)
            }
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReviewSecction;