import React from 'react'
import Image from 'next/image'

const ProductsSection = () => {
    return (
        <section className='pt-28 -mb-20' id="productos">
            <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>

                <h2 className="text-gray-800 text-4xl font-bold text-center my-4">Productos</h2>

                <p className="max-w-screen-md text-primary-black md:text-lg text-center mx-auto">Llegamos para competir y así­ poder estar a la vanguardia y
                    poder brindar la mejor experiencia posible. Mucha dedicación
                    para el servicio de Cristales y Neumáticos.{" "}</p>
                <div className=" pb-1 my-6 rounded-lg">
                    <section className="max-w-screen-2xl p-4 md:px-8 mx-auto bg-primary-black rounded-xl">
                        <div className="flex flex-wrap justify-between mb-4">
                            <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-28 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                                <h6 className="text-primary-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">Autopartes</h6>

                                <p className="max-w-md text-primary-white xl:text-lg leading-relaxed">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                            </div>

                            <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                                <div className="rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                                    <Image
                                        src="/images/neumaticos/neu3.jpg"
                                        alt="Autopartes Foto"
                                        width={650}
                                        height={500}
                                    />
                                </div>

                                <div className="rounded-lg shadow-lg overflow-hidden">
                                    <Image
                                        src="/images/neumaticos/neu4.jpg"
                                        alt="Autopartes Foto"
                                        width={650}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className=" pb-1 my-6 sm:pb-8 lg:pb-12 rounded-lg">
                    <section className="max-w-screen-2xl p-4 md:px-8 mx-auto bg-primary-black rounded-xl">
                        <div className="flex flex-wrap justify-between mb-4">
                            <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-28 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                                <h6 className="text-primary-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">Cristales</h6>

                                <p className="max-w-md text-primary-white xl:text-lg leading-relaxed">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                            </div>

                            <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                                <div className="rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                                    <Image
                                    src="/images/cristales/cristal2.jpg"
                                        alt="Autopartes Foto"
                                        width={650}
                                        height={500}
                                    />
                                </div>

                                <div className="rounded-lg shadow-lg overflow-hidden">
                                    <Image
                                    src="/images/cristales/cristal1.jpg"
                                        alt="Autopartes Foto"
                                        width={650}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className=" pb-1 my-6 sm:pb-8 lg:pb-12 rounded-lg">
                    <section className="max-w-screen-2xl p-4 md:px-8 mx-auto bg-primary-black rounded-xl">
                        <div className="flex flex-wrap justify-between mb-4">
                            <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-28 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                                <h6 className="text-primary-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">Neumáticos</h6>

                                <p className="max-w-md text-primary-white xl:text-lg leading-relaxed">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                            </div>

                            <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                                <div className="rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                                    <Image
                                    src="/images/neumaticos/neu1.jpg"
                                        alt="Autopartes Foto"
                                        width={650}
                                        height={500}
                                    />
                                </div>

                                <div className="rounded-lg shadow-lg overflow-hidden">
                                    <Image
                                    src="/images/neumaticos/neu2.jpg" 
                                        alt="Autopartes Foto"
                                        width={650}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        </section>
    )
}

export default ProductsSection