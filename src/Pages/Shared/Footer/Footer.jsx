import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="md:flex justify-center  align-center text-white ">
        <div className="bg-[#1F2937] md:w-1/2  p-8 text-center">
          <h2 className="text-2xl  mb-2 font-semibold uppercase">Contact US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] p-8 md:w-1/2 space-y-4 text-center">
          <h2 className="text-2xl  mb-2 font-semibold uppercase">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex gap-2 justify-center ">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </div>
      <div className="text-center bg-black text-white">
        <p className="p-4">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;