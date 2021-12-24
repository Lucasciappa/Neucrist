const ContactForm = () => {
  return (
    <form action="" className="form bg-white p-6 my-10 mb-32 relative">
      <h3 className="text-4xl xl:text-5xl text-gray-900 font-semibold">¡Contactanos!</h3>
      <p className="text-gray-600 xl:text-lg py-3">Te ayudamos en lo que necesites</p>
      <div className="flex flex-col py-3 space-y-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Tu Nombre"
          className="focus:ring-2 focus:ring-primary-red focus:outline-none w-full text-md leading-6 text-black placeholder-gray-400 rounded-sm py-2 pl-5 ring-1 ring-gray-200 shadow-sm"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Tu Email"
          className="focus:ring-2 focus:ring-primary-red focus:outline-none w-full text-md leading-6 text-black placeholder-gray-400 rounded-sm py-2 pl-5 ring-1 ring-gray-200 shadow-sm"
        />

        <textarea
          name=""
          id=""
          cols="10"
          rows="3"
          placeholder="Escríbenos un mensaje"
          className="focus:ring-2 focus:ring-primary-red focus:outline-none w-full text-md leading-6 text-black placeholder-gray-400 rounded-sm py-2 pl-5 ring-1 ring-gray-200 shadow-sm resize-none"
        ></textarea>
      </div>
      <p className="font-bold text-md mt-3 text-left">Términos y condiciones</p>
      <div className="flex items-baseline space-x-2 mt-2">
        <input type="checkbox" name="" id="" className="inline-block" />
        <p className="text-gray-600 text-sm">
          Acepto los términos y condiciones
        </p>
      </div>
      <input
        type="submit"
        value="Submit"
        className="w-full mt-6 rounded-md bg-primary-red hover:bg-opacity-90 text-white font-semibold p-3"
      />
    </form>
  );
};

export default ContactForm;
