import React from "react";

const ValuesCard = () => {
    return (
        <section className="mx-auto my-10">
            <h2 className="text-center uppercase text-primary-black text-2xl font-semibold my-4 lg:my-8">Nuestros Valores</h2>
            <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto">
                <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                    <img className="mx-auto m-2 w-40" src="./images/transparentes/corazon.png" alt="Pasion" />
                    <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                        PasiÃ³n
                    </h2>
                    <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    </p>
                </article>

                <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                    <img className="mx-auto m-2 w-40" src="./images/transparentes/vision.png" alt="" />
                    <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                        VisiÃ³n
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
                        Servicio de logÃ­stica propia
                    </h2>
                    <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    </p>
                </article>
            </section>
        </section>
    )
}

export default ValuesCard;