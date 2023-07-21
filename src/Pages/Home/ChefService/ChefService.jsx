import React from 'react';
import chef from "../../../assets/home/chef-service.jpg"
const ChefService = () => {
  return (
    <div className="mb-24">
      <div className=" relative">
        <img src={chef} alt="" />
      </div>
      <div className='absolute  bg-slate-950'>
        <p className="flex justify-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          sunt perspiciatis laborum enim optio! Labore tenetur dolor eligendi
          iste animi!
        </p>
      </div>
    </div>
  );
};

export default ChefService;