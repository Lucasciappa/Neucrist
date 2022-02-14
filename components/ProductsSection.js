import React from 'react';
import ProductCard from './ProductCard';
import SeeMoreBtn from './SeeMoreBtn';

const ProductsSection = () => {
    return (<section className="flex flex-col justify-center mx-2 py-6 xl:mx-6">
        <div className="px-3">
            <h5 className="text-primary-red text-center leading-none text-3xl py-4 font-semibold">
                Productos destacados
            </h5>
            <hr />
            <p className="text-primary-black text-center py-4 md:text-normal">
                descripcion deasdsadas lorem+3
            </p>
        </div>
        <div className="mx-auto lg:pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* {nursingHomes.map((data, i) => {
                    return <CardResidence key={i} {...data} />;
                })} */}
        </div>
        <SeeMoreBtn/>
        {/* <div className="lg:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">          
            {nursingHomes.map((data, i) => {
                    return <CardResidence key={i} {...data} />;
                })}
        </div> */}
    </section>)
};

export default ProductsSection;