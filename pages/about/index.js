import React from "react";
import ImageFixed from "../../components/about/ImageFixed";
import ImageBanner from "../../components/about/ImageBaner";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import ValuesCard from "../../components/about/ValuesCard";

const About = () => {
  return (
    <>
      <Header />
      <Layout>
        <ImageFixed />
        <ValuesCard />
        <div className="m-4 my-16 md:ml-20 md:mr-20 lg:flex font-primary">
          <div className="lg:w-2/5 lg:mr-10">
            <h2 className="text-center text-5xl font-semibold lg:mb-12">
              ¿Que hacemos en{" "}
              <span className="text-primary-red">Neucrist?</span>
            </h2>
            <p className="text-xl font-normal mt-4">
              Nos dedicamos a asesorar, gestionar y buscar a través de nuestra
              página web los mejores productos para tu rodado
            </p>
            <p className="text-xl font-normal mt-4">
            Nuestra prioridad y nuestro firme compromiso es ofrecer a nuestros clientes calidad sin cortapisas.
            </p>
          </div>
          <div className="lg:w-2/4">
            <p className="text-xl font-normal mt-4">
              Nos diferenciamos porque apostamos por la implantación de
              herramientas online que mejoran su experiencia{" "}
            </p>
            <p className="text-xl font-normal mt-4">
              Te animo a que eches un rápido vistazo a nuestra web y verás
              porqué somos diferentes.
            </p>
            <p className="text-xl font-normal mt-4">
              <span>
                Te invitamos a ponerte en contacto con nosotros o bien a través
                de nuestras redes sociales, teléfono .. o lo que sea
                más cómodo para ti.
              </span>
            </p>
            <p className="mt-5 font-primary text-xl">
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
