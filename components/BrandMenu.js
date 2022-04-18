import React from 'react';
import ProductCard from './ProductCard';

const BrandMenu = ({ menuList }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        {menuList.map((menu) => {
          const { id, category, name, img } = menu;
          return (
            <a href={img} key={id}>
              <article className='rounded-sm bg-green w-full h-60'>
                <ProductCard />
              </article>
            </a>
          );
        })}
    </div>
  );
};

export default BrandMenu;