import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import { FaCommentDots } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
    .then(data=>setReviews(data))
  },[])
  return (
    <section className="md:my-8 my-0">
      <SectionTitle
        heading={"Testimonials"}
        subTitle={"What are Our Client Say"}
      ></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="md:my-16 mx-12 my-6 text-center">
              <h2 className="flex justify-center items-center mb-2">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </h2>
              <p className="flex justify-center items-center ">
                <FaCommentDots className="md:w-12 w-8 text-[#CD9003] my-4 md:h-12 h-8"></FaCommentDots>
              </p>
              <p className="text-justify text-sm md:text-lg md:mb-2 mb-0">
                {review.details}
              </p>
              <h3 className="text-2xl font-semibold text-[#CD9003]">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;