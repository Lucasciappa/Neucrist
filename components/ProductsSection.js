import React from "react";
import Image from "next/image";

const ProductsSection = () => {
  return (
    <section className="pt-36 -mb-24 font-primary" id="productos">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-4xl font-bold text-center my-4">
          Productos
        </h2>

        <p className="max-w-screen-md text-primary-black md:text-lg text-center mx-auto">
          Trabajamos con los mejores productos del mercado, respaldados por las
          principales marcas.{" "}
        </p>
        <div className="pb-1 my-6 rounded-lg">
          <section className="max-w-screen-2xl p-4 md:px-8 mx-auto bg-primary-black rounded-xl">
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-28 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                <h6 className="text-primary-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">
                  Autopartes
                </h6>

                <p className="max-w-md text-primary-white xl:text-lg leading-relaxed">
                  Lo que necesitas es nuestra prioridad cotizaciones directas de
                  autopartes, productos importados y nacionales.
                </p>
              </div>

              <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                <div className="shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                  <Image
                    className="rounded-lg"
                    src="/images/autopartes/puerta.png"
                    alt="Foto de autopartes"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="shadow-lg overflow-hidden">
                  <Image
                    className="rounded-lg"
                    src="/images/autopartes/motor.png"
                    alt="Foto de autopartes"
                    width={650}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-1 my-6 sm:pb-8 lg:pb-12 rounded-lg">
          <section className="max-w-screen-2xl p-4 md:px-8 mx-auto bg-primary-black rounded-xl">
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-28 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                <h6 className="text-primary-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">
                  Cristales
                </h6>

                <p className="max-w-md text-primary-white xl:text-lg leading-relaxed">
                  Amplia variedad de parabrisas, lunetas, laterales. Todas las
                  marcas, nacionales e importados y originales de fabrica.
                  Favicur, Cristem y Pilkington
                </p>
              </div>

              <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                <div className="shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                  <Image
                    className="rounded-lg"
                    src="/images/cristales/cristal2.png"
                    alt="Foto de cristal"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="shadow-lg overflow-hidden">
                  <Image
                    className="rounded-lg"
                    src="/images/cristales/parabrisas.png"
                    alt="Foto de parabrisas"
                    width={650}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-1 my-6 sm:pb-8 lg:pb-12 rounded-lg">
          <section className="max-w-screen-2xl p-4 md:px-8 mx-auto bg-primary-black rounded-xl">
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-28 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                <h6 className="text-primary-white text-3xl md:text-5xl font-bold mb-4 md:mb-8">
                  Neumaticos
                </h6>

                <p className="max-w-md text-primary-white xl:text-lg leading-relaxed">
                  Amplia variedad de neumaticos, todas las marcas y modelos
                  Trabajamos con marcas nacionales e importadas.
                </p>
              </div>

              <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                <div className="shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                  <Image
                    className="rounded-lg"
                    src="/images/neumaticos/neu5.png"
                    alt="Foto de neumáticos"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="shadow-lg overflow-hidden">
                  <Image
                    className="rounded-lg"
                    src="/images/neumaticos/neu4.png"
                    alt="Foto de neumáticos"
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
  );
};

export default ProductsSection;
