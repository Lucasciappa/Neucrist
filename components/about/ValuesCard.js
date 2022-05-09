import React from "react";

const ValuesCard = () => {
    return (
        <section className="mx-auto p-8 lg:p-24 md:py-20 antialiased ">
            <h2 className="text-center uppercase text-primary-red text-4xl font-semibold p-0 mb-8">Nuestros Valores</h2>
            <section class="grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-3xl mx-auto">
                <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                    <img className="mx-auto mb-10 mt-10 w-40" src="./images/transparentes/corazon.png" alt="Pasion" />
                    <h2 className="text-center text-2xl mt-8 font-bold min-h-18 px-12">
                        Pasión
                    </h2>
                    <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </article>

                <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                    <img className="mx-auto mb-10 mt-10 w-40" src="./images/transparentes/vision.png" alt="" />
                    <h2 className="text-center text-2xl mt-8 font-bold min-h-18 px-12">
                        Visión
                    </h2>
                    <p className="m-4 text-lg p-4 leading-relaxed text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </article>

                <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                    <img className="mx-auto mb-10 mt-10 w-40" src="./images/transparentes/calidad.png" alt="" />
                    <h2 className="text-center text-2xl mt-8 font-bold min-h-18 px-12">
                        Productos de alta calidad
                    </h2>
                    <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </article>

                <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                    <img className="mx-auto mb-10 mt-10 w-40" src="./images/transparentes/logistica.png" alt="Logistica" />
                    <h2 className="text-center text-2xl mt-8 font-bold min-h-18 px-12">
                        Servicio de logística propia
                    </h2>
                    <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </article>
            </section>
        </section>
    )
}

export default ValuesCard;