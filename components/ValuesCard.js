import React from "react";

const ValuesCard = () => {
    return (
        <>
            <section className="mx-auto pt-28 -mb-20">
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:px-6 max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto">
                    <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2 w-40" src="./images/transparentes/corazon.png" alt="Pasion" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Pasión
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Queremos transmitirte nuestro entusiasmo y conocimiento para que vivas de la misma forma que nosotros la pasión que tenemos por este rubro.
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2 w-40" src="./images/transparentes/vision.png" alt="Visión" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Visión
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center">
                            Nuestro objetivo es innovar día a día para poder brindarte la mejor experiencia.
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm pb-8 bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2 w-40" src="./images/transparentes/calidad.png" alt="Productos de alta calidad" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Productos de alta calidad
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Nos aliamos con las principales marcas del mundo para asegurar la mejor calidad del mercado.
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm pb-8 bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <img className="mx-auto m-2S w-40" src="./images/transparentes/logistica.png" alt="Trabajo en equipo" />
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Trabajo en equipo
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Gracias a las personas que integran esta empresa y su trabajo en conjunto, es que somos capaces de evolucionar todos los días para entregar nada mas que excelencia a nuestros clientes.
                        </p>
                    </article>
                </section>
            </section>
        </>
    )
}

export default ValuesCard;