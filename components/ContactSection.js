import React from 'react'

const ContactSection = () => {
    return (
        <div className="pt-28" id="contacto">
            {/* <!-- form - start --> */}
            <div className="max-w-screen-2xl bg-primary-red-light p-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4">Contactanos</h2>

                    <p className="max-w-screen-md text-gray-700 md:text-lg text-center mx-auto">Te ayudamos en lo que necesites</p>
                </div>

                <form action="https://formsubmit.co/161756dcc2db09f9ba4bef9362f39ba7" method="POST" className="max-w-screen-md flex flex-col gap-4 mx-auto">
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full'>
                            <label for="first-name" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Nombre completo</label>
                            <input name="first-name" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-primary-black rounded outline-none transition duration-100 px-3 py-2" />
                        </div>
                        <div className="sm:col-span-2 w-full">
                            <label for="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
                            <input name="email" className="w-full bg-gray-200 text-gray-800 border focus:ring ring-primary-black rounded outline-none transition duration-100 px-3 py-2" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label for="message" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Mensaje</label>
                        <textarea name="message" className="w-full h-28 md:h-36 bg-gray-200 text-gray-800 border focus:ring ring-primary-black rounded outline-none transition duration-100 px-3 py-2 resize-none"></textarea>
                    </div>

                    <div className='flex flex-row items-center gap-1'>
                        <input type="checkbox" name="terms" id="" className="inline-block" />
                        <p className="text-gray-900 text-xs">Aceptar los términos y condiciones.</p>
                    </div>

                    <div className="sm:col-span-2 flex justify-between items-center">
                        <button type='submit' className="inline-block bg-primary-red hover:bg-primary-red-hover active:bg-primary-red-hover focus-visible:ring ring-primary-red-hover text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Enviar</button>
                    </div>
                </form>
                {/* <!-- form - end --> */}
            </div>
        </div>
    )
}

export default ContactSection