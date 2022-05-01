import React from 'react';
import ProductCard from './ProductCard';

const BrandMenu = ({ menuList }) => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:gap-8'>
        {menuList.map((menu) => {
          const { id, category, name, img } = menu;
          return (
            <a href={img} key={id}>
                <ProductCard />
            </a>
          );
        })}
    </div>
  );
};

export default BrandMenu;