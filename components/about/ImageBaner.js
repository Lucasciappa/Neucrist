import React from "react";

const ImageBanner = () => {
  return (
    <>
      <div>
        <div
          className="h-screen bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage: `url('/images/productos/neumaticos2.jpg')`,
          }}
        ></div>
        <div className="-mt-60">
          <h1 className="absolute w-screen px-4 -mt-48">
            <span className=" px-4 -mt-96 text-center absolute right-0 left-0 m-auto">
              <span className="text-white filter brightness-100 z-50  text-5xl">
                ¿Cómo seleccionamos
              </span>
              <span className="text-primary-red text-5xl">
                {" "}
                los mejores productos?
              </span>
            </span>
          </h1>
          <p className="-mt-96 absolute mx-4 text-white font-primary text-center">
            Realizamos análisis con profundos estudios del mercado y
            seleccionamos los 10 mejores negocios con un exigente criterio de
            análisis. Si quieres conocer los criterios de selección haz click en
            el siguiente enlace.
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageBanner;
