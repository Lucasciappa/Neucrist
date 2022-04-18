import React from 'react';

const BrandFilter = ({ filterCategory, category }) => {
  return (
    <div className='flex justify-center items-center mb-10'>
      {category.map((categoryBtn, index) => {
        return (
          <button
            className='p-5 bg-transparent border-transparent border-solid border-b-2 cursor-pointer text-base p-3 uppercase bg-green font-semibold transition duration-300 ease-in-out"'
            onClick={() => filterCategory(categoryBtn)}
            key={index}
          >
            {categoryBtn}
          </button>
        );
      })}
    </div>
  );
};

export default BrandFilter;