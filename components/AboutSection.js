import React from 'react'
import ValuesCard from './ValuesCard'

const AboutSection = () => {
    return (
        <>
            {/* about  */}
            <section className='pt-28 -mb-20' id="about">
                <h2 className="text-gray-800 text-4xl font-bold text-center my-5">Sobre Nosotros</h2>
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-4 max-w-7xl" >
                    <div className="my-auto flex flex-col gap-3">
                        <p className="text-primary-black">
                            Somos una empresa que nace con grandes sueños en plena pandemia,
                            con el compromiso de hacer las cosas bien desde el comienzo y
                            siempre.
                        </p>
                        <p className="text-primary-black">Por eso y para ello las personas que componen NEUCRIST
                            comparten la pasión, visión y el deseo de satisfacer las
                            necesidades de los clientes.

                        </p>
                        <p className="text-primary-black">
                            A través de un servicio diferencial,
                            con productos de alta calidad, avalados por marcas prestigiosas y
                            servicio de logística propia.
                        </p>
                        <p className="text-primary-black">
                            Te invitamos a ponerte en contacto con nosotros o bien a través
                            de nuestras redes sociales, teléfono, o lo que sea
                            más cómodo para ti.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="h-full rounded-full overflow-hidden">
                            <img src="/images/neumaticos/neu1.jpg" loading="lazy" alt="quienes somos picture" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>
            {/* fin about */}
            <ValuesCard />
        </>
    )
}

export default AboutSection