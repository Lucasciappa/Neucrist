import React from "react";

const ValuesCard = () => {
    return (
        <>

            {/* about  */}
            <section className='my-5'>

                <h2 class="text-gray-800 text-4xl font-bold text-center my-5">Sobre Nosotros</h2>

                <div
                    class="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-4 max-w-7xl"
                >

                    <div class="my-auto flex flex-col gap-3">
                        <p class="text-primary-black">
                            Somos una empresa que nace con grandes sueños en plena pandemia,
                            con el compromiso de hacer las cosas bien desde el comienzo y
                            siempre.
                        </p>
                        <p class="text-primary-black">Por eso y para ello las personas que componen NEUCRIST
                            comparten la pasión, visión y el deseo de satisfacer las
                            necesidades de los clientes.

                        </p>
                        <p class="text-primary-black">
                            A través de un servicio diferencial,
                            con productos de alta calidad, avalados por marcas prestigiosas y
                            servicio de logística propia.
                        </p>
                        <p class="text-primary-black">
                            Te invitamos a ponerte en contacto con nosotros o bien a través
                            de nuestras redes sociales, teléfono, o lo que sea
                            más cómodo para ti.
                        </p>
                    </div>
                    <div class="relative">
                        <div class="h-full rounded-full overflow-hidden">
                            <img src="/images/neumaticos/neu1.jpg" loading="lazy" alt="quienes somos picture" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>

            {/* fin about */}
            <section className="mx-auto my-10">
                <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto">
                    <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2 w-40" src="./images/transparentes/corazon.png" alt="Pasion" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Pasión
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2 w-40" src="./images/transparentes/vision.png" alt="" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Visión
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm pb-8 bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2 w-40" src="./images/transparentes/calidad.png" alt="" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Productos de alta calidad
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm pb-8 bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2S w-40" src="./images/transparentes/logistica.png" alt="Logistica" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Servicio de logística propia
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </article>
                </section>
            </section>
        </>
    )
}

export default ValuesCard;