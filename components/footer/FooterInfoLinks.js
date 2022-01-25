import Link from "next/link";
import ItemLink from "./FooteritemLink";

const InfoLinks = () => {
  return (
    <>
      <div className="w-full lg:w-6/12 p-4">
        <div className="flex flex-col mb-6 lg:flex-row">
          <div className="w-full lg:w-8/12 xl:w-6/12 px-4 ml-auto">
            <span className="block uppercase text-gray-300 text-md font-semibold mb-2">
              Información importante
            </span>
            <ul className="list-unstyled">
              <ItemLink title="Sobre Nosotros"/>
              <ItemLink title="Nuestros productos"/>
            </ul>
          </div>
          <div className="w-full lg:w-6/12 py-3 lg:py-0 px-4">
            <span className="block uppercase text-gray-300 text-md font-semibold mb-2">
              Otra información
            </span>
            <ul className="list-unstyled">
            <ItemLink title="Términos y Condiciones"/>
              <ItemLink title="Politica de Privacidad"/>
              <ItemLink title="Contactanos"/>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLinks;
