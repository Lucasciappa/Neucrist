import React, { useState } from 'react'
import { ContactForm } from './ContactForm';


const ContactSection = () => {

    return (
        <div className="pt-28" id="contacto">

            {/* <!-- form - start --> */}
            <div className="max-w-screen-2xl bg-primary-red-light p-4 md:px-8 mx-auto">
                <div className="mb-10">
                    <h2 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4">Contactanos</h2>
                    <p className="max-w-screen-md text-gray-700 md:text-lg text-center mx-auto">Te ayudamos en lo que necesites</p>
                </div>
                <ContactForm />
                {/* <!-- form - end --> */}
            </div>
        </div>
    )
}

export default ContactSection