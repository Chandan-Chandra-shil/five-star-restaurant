import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import MenuItem from '../Home/Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu,setMenu] = useState([])
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => { 
        const popularItems = data.filter(item =>item.category === "popular")
        setMenu(popularItems)
      })

  }, [])
  
  console.log("......16",menu)
  return (
    <section className='mb-12 mx-4 md:mx-0'>
      <SectionTitle heading={"From Our Menu"} subTitle={"Check it Out"}></SectionTitle>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        {
          menu.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;