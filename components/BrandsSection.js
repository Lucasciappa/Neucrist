import React from 'react'

const BrandsSection = () => {
    return (
        <>
            {/* <!-- logo cloud - start --> */}
            <section className="pt-28 -mb-20">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-gray-800 text-3xl font-bold text-center mb-8">Marcas que confían</h2>

                    <div className="sm:h-40 grid grid-cols-2 md:grid-cols-4 sm:content-evenly bg-gray-100 rounded-lg gap-6 p-6">
                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <img src='/marcas/bfgoodrich-bn.jpeg' />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <img src='/marcas/continental-bn.jpeg' />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <img src='/marcas/dunlop-bn.jpeg' />
                        </div>
                        {/* <!-- logo - end --> */}

                        {/* <!-- logo - start --> */}
                        <div className="flex justify-center text-gray-400">
                            <img src='/marcas/goodyear-bn.jpeg' />
                        </div>
                        {/* <!-- logo - end --> */}
                    </div>
                </div>
            </section>
            {/* <!-- logo cloud - end --> */}
        </>
    )
}

export default BrandsSection