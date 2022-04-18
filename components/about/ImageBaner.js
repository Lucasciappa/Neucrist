import React from "react";

const ImageBanner = () => {
  return (
    <>
        <div
          className="h-96 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage: `url('/images/fotos/neumaticos2.jpg')`,
          }}
        ></div>
        <div className="flex flex-row md:justify-center">
          <h1 className="-mt-8">
            <span className="md:-mt-80 px-2 md:px-10 2xl:px-40 -mt-80 text-center absolute right-0 left-0 m-auto">
              <span className="text-primary-white filter brightness-100 z-50 text-4xl">
                ¿Cómo seleccionamos
              </span>
              <span className="text-primary-red text-4xl">
                {" "}
                los mejores productos?
              </span>
            </span>
          </h1>
          <p className="-mt-48 md:-mt-60 absolute mx-4 text-primary-white text-xl md:text-2xl md:w-8/12 font-primary text-center">
            Realizamos análisis con profundos estudios del mercado y
            seleccionamos los 10 mejores negocios con un exigente criterio de
            análisis. Si quieres conocer los criterios de selección haz click en
            el siguiente enlace.
          </p>
        </div>
    </>
  );
};

export default ImageBanner;
