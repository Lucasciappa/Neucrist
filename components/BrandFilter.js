import React from 'react';

const BrandFilter = ({ filterCategory, category }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center mb-10 rounded mx-4 my-3'>
      {category.map((categoryBtn, index) => {
        return (
          <button
            className='
            text-gray-800 
            uppercase 
            font-semibold 
            text-sm 
            cursor-pointer 
            bg-gray-300 
            py-2 2xl:py-3
            px-2
            md:px-10
            border 
            rounded 
            hover:bg-primary-red 
            hover:text-white 
            '
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