import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const infoCards = [
    {
      image: "/images/transparentes/neu1.jpg",
      icon: "M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z",
      title: "Cotización en línea",
      desc: "Presentamos una manera fácil de garantizar precios, favoreciendo, a su vez, la difusión de presupuestos y compras en su negocio",
    },
    {
      image: "/images/ejemplo/neu2.jpg",
      icon: "M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z",
      title: "Colocaciones y Arreglos",
      desc: "Gracias a nuestros expertos realizamos cambio de parabrisas, polarizados y neumáticos en el momento para que puedas volver al ruedo en el momento deseado",
    },
    {
      image: "/images/ejemplo/neu3.jpg",
      icon: "M0 48C0 21.49 21.49 0 48 0H368C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48zM544 256V237.3L466.7 160H416V256H544zM160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464zM480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368zM256.1 95.03C247.6 85.66 232.4 85.66 223 95.03C213.7 104.4 213.7 119.6 223 128.1L262.1 168H96C82.75 168 72 178.7 72 192C72 205.3 82.75 216 96 216H262.1L223 255C213.7 264.4 213.7 279.6 223 288.1C232.4 298.3 247.6 298.3 256.1 288.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175L256.1 95.03z",
      title: "Logística",
      desc: "Nos comprometemos a un servicio de logística propia para garantizar entregas eficaces y sin problemas",
    },
    {
      image: "/images/ejemplo/neu4.jpg",
      icon: "M191.1 224c0-17.72-14.34-32.04-32-32.04L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368H160c17.66 0 32-14.36 32-32.06L191.1 224zM256 0C112.9 0 4.583 119.1 .0208 256L0 296C0 309.3 10.75 320 23.1 320S48 309.3 48 296V256c0-114.7 93.34-207.8 208-207.8C370.7 48.2 464 141.3 464 256v144c0 22.09-17.91 40-40 40h-110.7C305 425.7 289.7 416 272 416H241.8c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0zM368 368c35.34 0 64-28.7 64-64.13V256.1C432 220.7 403.3 192 368 192l-16 0c-17.66 0-32 14.34-32 32.04L320 335.9C320 353.7 334.3 368 352 368H368z",
      title: "Asesoramiento",
      desc: "Recibimos tu contacto e información a traves de nuestro Whatsapp para que podamos ayudarte de la manera mas rápida y eficiente",
    },
  ];
  return (
    <section className="body-font">
      <div className="px-5 py-10 mx-auto">
        <div className="px-3">
            <h3 className="text-primary-red text-center leading-none text-3xl py-4 font-semibold">
            Servicios que brindamos
            </h3>
            <hr />
            <p className="text-primary-black text-center py-4 md:text-normal">
            Ofrecemos servicios y soluciones para mejorar su experiencia tanto en el ámbito empresarial como personal. 
            Estamos en constante evolución, trabajando al 100%, para que sus necesidades sean cubiertas. 
            Por eso es que brindamos excelencia en los siguientes rubros: 
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3 px-2 mt-10 m-auto text-primary-red max-w-3xl">
            {infoCards.map((data, i) => {
            return <ServiceCard key={i} {...data} />;
          })}
            
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;