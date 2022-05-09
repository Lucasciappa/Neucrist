// import ProductCard from "./ProductCard";
// import SeeMoreBtn from "./SeeMoreBtn";
import React from "react";
import { useState } from "react/cjs/react.development";
import BrandFilter from "./BrandFilter";
import BrandMenu from "./BrandMenu";
import { data } from '../data/data';

// duplicate category
const ButtonCategory = ['All', ...new Set(data.map((item) => item.category))];

const ProductsSection = () => {

  const [menuList, SetMenuList] = useState(data);
  const [category, setCategory] = useState(ButtonCategory);

  const filterCategory = (category) => {
    const newCategory = data.filter(
      (categoryList) => categoryList.category === category
    );
    // but if category same with all please add all original array
    if (category === 'All') {
      return SetMenuList(data);
    }
    // update new menuList use newCategory
    SetMenuList(newCategory);
  };

  return (
    <>
      <section className="flex flex-col justify-center mx-2 py-6 xl:mx-6">
        <div className="px-3">
        {/* <img
          className="fixed right-0 top-0 m-auto border-none"
          src="/images/camino.png"
          alt="Neucrist Logo Picture"
          width={500}
          height={500}
        /> */}
          <h5 className="text-primary-red text-center leading-none text-3xl py-4 font-semibold">
            Productos destacados
          </h5>
          <hr />
          <p className="text-primary-black text-center py-4 md:text-normal">
            Estos son algunos de nuestros productos mas demandados
          </p>
        </div>

        <BrandFilter filterCategory={filterCategory} category={category} />
          <BrandMenu menuList={menuList} />


        {/* <div className="mx-2 lg:pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {nursingHomes.map((data, i) => {
                    return <CardResidence key={i} {...data} />;
                })}
        </div>
        <SeeMoreBtn /> */}
        {/* <div className="lg:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">          
            {nursingHomes.map((data, i) => {
                    return <CardResidence key={i} {...data} />;
                })}
        </div> */}
      </section>
    </>
  );
};

export default ProductsSection;
