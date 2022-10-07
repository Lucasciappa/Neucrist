import React from 'react'
import Image from 'next/image'

const ErrorPage = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="w-full sm:w-96 h-96 flex justify-center items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden relative mx-auto">
                    <Image
                        class="w-full h-full object-cover object-center absolute inset-0"
                        src="/images/neumaticos/neu6.jpg"
                        alt="404 Pictures"
                        layout='fill'
                    />
                    <div class="flex flex-col justify-center items-center relative p-8 md:p-16">
                        <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">404</h1>

                        <p class="text-primary-white md:text-xl text-center mb-8 font-bold">La página que quieres buscar no existe</p>

                        <a href="/" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-primary-red active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Volver al Inicio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage