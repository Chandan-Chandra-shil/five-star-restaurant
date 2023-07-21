import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from 'swiper/modules';
import image1 from  "../../../assets/home/slide1.jpg"
import image2 from  "../../../assets/home/slide2.jpg"
import image3 from "../../../assets/home/slide3.jpg"
import image4 from "../../../assets/home/slide4.jpg"
import image5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Component/SectionTitle';


const Category = () => {
  return (
    <section>
      <SectionTitle heading={"order online"} subTitle={"From 11.00am to 10:00pm"}>
        
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <p className="text-white text-center md:text-4xl text-2xl md:-mt-24 -mt-12 uppercase shadow-lg ">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <p className="text-white text-center md:text-4xl text-2xl md:-mt-24 -mt-12 uppercase shadow-lg ">
            pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <p className="text-white text-center md:text-4xl text-2xl md:-mt-24 -mt-12 uppercase shadow-lg ">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <p className="text-white text-center md:text-4xl text-2xl md:-mt-24 -mt-12 uppercase shadow-lg ">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <p className="text-white text-center md:text-4xl text-2xl md:-mt-24 -mt-12 uppercase shadow-lg ">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;