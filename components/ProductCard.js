import React from 'react';
import Image from 'next/image'


const ProductCard = () => {
    return (
        <>
            <div className="max-w-full bg-primary-gray-light shadow-xl rounded-lg border border-primary-gray-light hover:shadow-2xl overflow-hidden my-4">
                <div className="px-4 py-2">
                    <h1 className="text-gray-900 font-bold text-2xl uppercase">Neumatico GoodYear</h1>
                    <p className="text-primary-gray text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                </div>
                <div className="h-44 md:h-48 relative">

                    <Image className="h-56 w-full object-cover mt-2" src="/images/productos/neumaticos.jpg" alt="NIKE AIR" layout="fill"
                        objectFit="cover" />
                </div>
                <div className="flex items-center justify-between px-4 py-2 bg-primary-red">
                    <h1 className="text-gray-200 font-bold text-xl">$129</h1>
                    <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Ver Producto</button>
                </div>
            </div>
        </>)
};

export default ProductCard;
