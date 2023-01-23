import React from "react";
import Image from "next/image";
import ValueCard from "./ValueCard";

const ValuesCard = () => {
  const infoValuesCards = [
    {
      id: 1,  
      image: "/images/transparentes/corazon.png",
      title: "Pasión",
      alt: "Pasion",
      desc: "Queremos transmitirte nuestro entusiasmo y conocimiento para que vivas de la misma forma que nosotros la pasión que tenemos por este rubro.",
    },
    {
      id: 2,
      image: "/images/transparentes/vision.png",
      title: "Visión",
      alt: "Visión",
      desc: "Nuestro objetivo es innovar día a día para poder brindarte la mejor experiencia.",
    },
    {
      id: 3,
      image: "/images/transparentes/calidad.png",
      title: "Productos de alta calidad",
      alt: "Productos de alta calidad",
      desc: "Nos aliamos con las principales marcas del mundo para asegurar la mejor calidad del mercado.",
    },
    {
      id: 4,
      image: "/images/transparentes/logistica.png",
      title: "Trabajo en equipo",
      alt: "Trabajo en equipo",
      desc: "Gracias a las personas que integran esta empresa y su trabajo en conjunto, es que somos capaces de evolucionar todos los dias para entregar nada mas que excelencia a nuestros clientes.",
    },
  ];

  return (
    <>
      <section className="mx-auto pt-28 -mb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:px-6 max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto font-primary px-5">
          {infoValuesCards.map((data, i) => {
            return <ValueCard key={i} {...data} />;
          })}
        </section>
      </section>
    </>
  );
};

export default ValuesCard;
{
  /* <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <div className="flex justify-center items-center">

                            <Image
                                src="/images/transparentes/corazon.png"
                                alt="Pasion"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Pasión
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Queremos transmitirte nuestro entusiasmo y conocimiento para que vivas de la misma forma que nosotros la pasión que tenemos por este rubro.
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/transparentes/vision.png"
                                alt="Visión"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12 mt-5">
                            Visión
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center">
                            Nuestro objetivo es innovar día a día para poder brindarte la mejor experiencia.
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm pb-8 bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/images/transparentes/calidad.png"
                                    alt="Productos de alta calidad"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Productos de alta calidad
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Nos aliamos con las principales marcas del mundo para asegurar la mejor calidad del mercado.
                        </p>
                    </article>

                    <article className="mx-auto max-w-sm pb-8 bg-white bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl hover:shadow-shadow-top">
                        <div className="flex justify-center items-center">

                            <Image
                                src="/images/transparentes/logistica.png"
                                alt="Trabajo en equipo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h2 className="text-center text-2xl font-bold min-h-18 px-12">
                            Trabajo en equipo
                        </h2>
                        <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                            Gracias a las personas que integran esta empresa y su trabajo en conjunto, es que somos capaces de evolucionar todos los dias para entregar nada mas que excelencia a nuestros clientes.
                        </p>
                    </article> */
}
