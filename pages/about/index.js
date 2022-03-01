import React from "react";
import ImageFixed from "../../components/about/ImageFixed";
import ImageBanner from "../../components/about/ImageBaner";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <>
      <Header />
      <Layout>
        <ImageFixed />
        <div className="m-4 my-24 md:ml-20 md:mr-20 lg:flex">
          <div className="lg:w-2/5 lg:mr-10">
            <h2 className="text-center text-5xl">
              ¿Que hacemos en{" "}
              <span className="text-primary-red">Neucrist?</span>
            </h2>
            <p className="italic text-xl font-light mt-7">
              Nos dedicamos a asesorar, gestionar y buscar a través de nuestra
              página web los mejores productos para tu rodado
            </p>
            <p className="italic text-xl font-light mt-7">
            Nuestra prioridad y nuestro firme compromiso es ofrecer a nuestros clientes calidad sin cortapisas.
            </p>
          </div>
          <div className="lg:w-2/4">
            <p className="mt-5 font-primary text-lg">
              Nos diferenciamos porque apostamos por la implantación de
              herramientas online que mejoran su experiencia{" "}
            </p>
            <p className="mt-5 font-primary text-lg">
              Te animo a que eches un rápido vistazo a nuestra web y verás
              porqué somos diferentes.
            </p>
            <p className="mt-5 font-primary text-lg">
              <span>
                Te invitamos a ponerte en contacto con nosotros o bien a través
                de nuestras redes sociales, teléfono .. o lo que sea
                más cómodo para ti.
              </span>
            </p>
            <p className="mt-5 font-primary text-lg">
              <span>
                Estaremos muy agradecidos, por ayudarnos en este reto.
              </span>
            </p>
          </div>
        </div>
        <ImageBanner />
      </Layout>
    </>
  );
};

export default About;
