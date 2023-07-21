import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-4 md:mb-4 mb-2 ">
      <img  style={{borderRadius: '0 150px 150px'}} className=" md:w-[120px] w-[80px]" src={image} alt="" />
      <div className=" ">
        <h2 className=" uppercase md:text-lg">{name} --------</h2>
        <p className="text-justify">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
