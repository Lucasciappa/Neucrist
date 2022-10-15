import React from "react";

const FeaturesSection = () => {
  return (
    <>
      {/* <!-- features - start --> */}
      <section className="pt-32 -mb-20 font-primary" id="servicios">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-4">
            <h2 className="text-gray-800 text-3xl font-bold text-center mb-4 md:mb-6">
              Nuestras ventajas competitivas 
            </h2>

            <p className="max-w-screen-md text-primary-black md:text-lg text-center mx-auto">
            Llegamos con la fuerza eminente de ser una empresa joven para competir y estar a la vanguardia, te brindamos la mejor experiencia. 
            Trabajamos con dedicacion y conocimientos en el rubro de Cristales/ Neumaticos y Autopartes. {" "}
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            <div className="flex gap-4 md:gap-6">
              <div className="p-1 w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-primary-red text-white rounded-lg md:rounded-xl shadow-lg">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 490 490"
                  fill="#fff"
                  stroke="currentColor"
                >
                  <g id="bold_copy_6_">
                    <path
                      d="M228.738,249.984c-3.553-4.686-5.987-10.259-7.289-16.737l-31.651,3.399c2.419,15.925,7.993,28.267,16.737,36.995
		c8.743,8.728,20.09,13.95,34.101,15.649v22.065h17.579v-22.678c15.772-2.251,28.083-8.407,36.949-18.436
		c8.851-10.03,13.276-22.372,13.276-36.995c0-13.092-3.507-23.842-10.55-32.217c-7.028-8.376-20.258-15.175-39.675-20.442v-47.423
		c7.855,3.399,12.694,9.876,14.562,19.416l30.686-4.012c-2.098-12.128-6.952-21.82-14.547-29.048
		c-7.61-7.243-17.839-11.622-30.702-13.153v-12.02h-17.579v12.005c-13.904,1.378-25.051,6.569-33.427,15.588
		c-8.376,9.034-12.556,20.167-12.556,33.427c0,13.107,3.706,24.255,11.117,33.443c7.396,9.172,19.018,16.032,34.867,20.565v50.822
		C236.272,258.085,232.306,254.685,228.738,249.984z M258.215,214.566c7.289,2.113,12.51,5.13,15.711,9.05
		c3.2,3.92,4.777,8.606,4.777,14.011c0,6.064-1.899,11.331-5.696,15.818c-3.797,4.486-8.728,7.304-14.807,8.437v-47.316H258.215z
		 M228.861,165.857c-2.588-3.675-3.874-7.656-3.874-11.944c0-4.686,1.409-8.973,4.226-12.862c2.848-3.874,6.646-6.63,11.408-8.238
		v41.956C235.368,172.518,231.448,169.532,228.861,165.857z"
                    />
                    <path
                      d="M467.031,43.709H22.969C10.336,43.709,0,54.045,0,66.678v273.068c0,12.633,10.336,22.969,22.969,22.969h183.75v52.951
		h-69.856v30.625h216.289v-30.625h-69.871v-52.951h183.75c12.633,0,22.969-10.336,22.969-22.969V66.678
		C490,54.045,479.664,43.709,467.031,43.709z M459.375,332.105H30.625V74.335h428.75V332.105z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Cotizacion en linea
                </h3>
                <p className="text-primary-black mb-2">
                  Presentamos una manera facil de garantizar precios,
                  favoreciendo, a su vez, la difusion de presupuestos y compras
                  en su negocio.
                </p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="p-1 w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-primary-red text-white rounded-lg md:rounded-xl shadow-lg">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="white"
                  stroke="currentColor"
                  viewBox="0 0 128 128"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M125.33705,27.01578a1.05621,1.05621,0,0,0-1.76179-.462L106.37554,43.75354a5.98262,5.98262,0,0,1-8.46069,0L84.20513,30.04382a5.98262,5.98262,0,0,1,0-8.46069L101.40485,4.3834a1.05621,1.05621,0,0,0-.462-1.76179A35.68012,35.68012,0,0,0,57.66309,49.448L5.6855,101.42558a14.95454,14.95454,0,0,0-.00221,21.21183,14.75874,14.75874,0,0,0,20.66488-.1795L78.51055,70.29553a35.68013,35.68013,0,0,0,46.82651-43.27975Z"
                    id="id_102"
                  ></path>
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Colocaciones y Arreglos
                </h3>
                <p className="text-primary-black mb-2">
                  Gracias a nuestros expertos realizamos cambio de parabrisas,
                  polarizados y neumaticos en el momento para que puedas volver
                  al ruedo en el momento deseado.
                </p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="p-1 w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-primary-red text-white rounded-lg md:rounded-xl shadow-lg">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 612 612"
                  className="w-6 h-6"
                  fill="white"
                  stroke="currentColor"
                >
                  <g>
                    <path
                      d="M12.57,385.084h316.849c4.735,0,8.61-3.875,8.61-8.609V119.809c0-14.266-11.564-25.83-25.83-25.83H29.791
		c-14.266,0-25.83,11.564-25.83,25.83v256.664C3.96,381.209,7.835,385.084,12.57,385.084z M76.417,212.128
		c0-5.902,4.784-10.687,10.687-10.687h84.528v-30.118c0-9.521,11.514-14.289,18.245-7.554l72.838,72.873
		c4.171,4.173,4.171,10.938,0,15.11l-72.838,72.861c-6.732,6.734-18.245,1.967-18.245-7.555v-30.125H87.103
		c-5.902,0-10.687-4.785-10.687-10.687V212.128z M113.48,454.221H8.61c-4.736,0-8.61-3.873-8.61-8.609v-26.174
		c0-4.736,3.874-8.611,8.61-8.611h128.634C124.673,421.762,115.977,437.002,113.48,454.221z M603.39,410.828h-20.922V293.817
		c0-13.689-4.133-27.121-11.796-38.486l-52.434-77.663c-12.83-18.942-34.183-30.307-57.085-30.307h-81.278
		c-9.558,0-17.221,7.749-17.221,17.22v246.247H229.543c12.657,10.934,21.353,26.174,23.85,43.395h140.343
		c4.994-34.182,34.44-60.615,70-60.615s64.919,26.434,69.913,60.615h69.741c4.736,0,8.61-3.875,8.61-8.611v-26.174
		C612,414.703,608.126,410.828,603.39,410.828z M517.634,270.828h-107.28c-4.735,0-8.61-3.789-8.61-8.61v-59.495
		c0-4.735,3.875-8.61,8.61-8.61h65.351c2.841,0,5.424,1.377,7.06,3.616l41.931,59.582
		C528.654,262.994,524.608,270.828,517.634,270.828z M183.394,410.828c-29.532,0-53.555,24.021-53.555,53.641
		c0,29.531,24.022,53.553,53.555,53.553c29.618,0,53.554-24.021,53.554-53.553C236.947,434.85,213.012,410.828,183.394,410.828z
		 M183.394,491.246c-14.81,0-26.777-12.055-26.777-26.777c0-14.811,11.968-26.777,26.777-26.777
		c14.809,0,26.777,11.967,26.777,26.777C210.171,479.191,198.202,491.246,183.394,491.246z M463.735,410.828
		c-29.618,0-53.555,24.021-53.555,53.641c0,29.531,23.937,53.553,53.555,53.553c29.532,0,53.554-24.021,53.554-53.553
		C517.29,434.85,493.269,410.828,463.735,410.828z M463.735,491.246c-14.81,0-26.777-12.055-26.777-26.777
		c0-14.811,11.968-26.777,26.777-26.777c14.809,0,26.777,11.967,26.777,26.777C490.513,479.191,478.545,491.246,463.735,491.246z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Logistica
                </h3>
                <p className="text-primary-black mb-2">
                  Nos comprometemos a un servicio de logistica propia para
                  garantizar entregas eficaces y sin problemas.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="p-1 w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-primary-red text-white rounded-lg md:rounded-xl shadow-lg">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                >
                  {/* <path d="M0 0h24v24H0z"/> */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z "
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Asesoramiento
                </h3>
                <p className="text-primary-black mb-2">
                  Recibimos tu contacto e informacion a traves de nuestro
                  Whatsapp para que podamos ayudarte de la manera mas rapida y
                  eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- features - end --> */}
    </>
  );
};

export default FeaturesSection;
