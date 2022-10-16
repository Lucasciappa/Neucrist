import React from 'react'
import Image from 'next/image'

const BrandsSection = () => {
    return (
        <>
            {/* <!-- logo cloud - start --> */}
            <section className="pt-28 -mb-20">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-gray-800 text-3xl font-bold text-center mb-8">Marcas que confían</h2>

                    <div className="xs:h-40 grid grid-cols-2 md:grid-cols-4 sm:content-evenly bg-gray-100 rounded-lg gap-6 p-6">
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/bf-goodrich.png'
                                alt="Bf-goodrich Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/continental.png'
                                alt="Continental Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/dunlop.png'
                                alt="Dunlop Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/goodyear.png'
                                alt="Goodyear Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/bridgestone.png'
                                alt="Bridgestone Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                        
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/firestone.png'
                                alt="Firestone Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                        
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/michelin.png'
                                alt="Michelin Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                        
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/pirelli.png'
                                alt="Pirelli Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                        
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/pilkington.png'
                                alt="Pilkington Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                        
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/saint-gobain.png'
                                alt="Saint-gobain Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                        
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/yokohama.png'
                                alt="Yokohama Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <Image
                                src='/marcas/fate.png'
                                alt="Fate Brand"
                                width={650}
                                height={220}
                            />
                        </div>
                        {/* <!-- logo - end --> */}
                    </div>
                </div>
            </section>
            {/* <!-- logo cloud - end --> */}
        </>
    )
}

export default BrandsSection;