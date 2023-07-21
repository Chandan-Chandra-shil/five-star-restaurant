import React from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import featured from "../../../assets/home/featured.jpg"
import './FeaturedSection.css'
const FeaturedSection = () => {
  return (
    <div className="Featured-image bg-fixed pt-4 px-4 text-white">
      <SectionTitle
        heading={"From Our Menu"}
        subTitle={"Check it Out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center  md:px-10 bg-slate-500 bg-opacity-40  md:pb-20  pb-10 ">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 md:space-y-4">
          <h2 className="text-lg ">July 21 , 2023 </h2>
          <h3 className="uppercase text-lg "> Where i get some ?</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            facilis ipsum similique voluptates voluptatibus! Recusandae ducimus
            excepturi dignissimos atque quae, minus assumenda inventore. Illo
            dolorum ex cumque ab vel sunt reiciendis, ipsam nemo totam quo,
            rerum doloremque tempora assumenda, ea voluptate perferendis modi
            libero ipsa? Quam officia pariatur modi quos!
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;