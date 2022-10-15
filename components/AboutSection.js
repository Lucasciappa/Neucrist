import React from 'react'
import ValuesCard from './ValuesCard'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <>
            {/* about  */}
            <section className='pt-28 -mb-20' id="about">
                <h2 className="text-gray-800 text-4xl font-primary font-bold text-center my-6">Sobre Nosotros</h2>
                <div className="container font-primary mx-auto p-10 flex flex-col lg:flex-row items-center gap-4 max-w-6xl bg-gray-100" >
                    <div className="relative">
                        <div className="h-full overflow-hidden">
                            <Image
                                src="/images/iconos/logo-neucrist.png"
                                alt="Logo de Neucrist"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="my-auto flex flex-col gap-3">
                        <p className="text-primary-black">
                            Somos una empresa que nace con grandes sueños en plena pandemia,
                            con el compromiso de hacer las cosas bien desde el comienzo y
                            siempre.
                        </p>
                        <p className="text-primary-black">Por eso y para ello las personas que componen NEUCRIST
                            comparten la pasion, vision y el deseo de satisfacer las
                            necesidades de los clientes.

                        </p>
                        <p className="text-primary-black">
                            A traves de un servicio diferencial,
                            con productos de alta calidad, avalados por marcas prestigiosas y
                            servicio de logistica propia.
                        </p>
                        <p className="text-primary-black">
                            Te invitamos a ponerte en contacto con nosotros o bien a traves
                            de nuestras redes sociales, telefono, o lo que sea
                            mas comodo para ti.
                        </p>
                    </div>
                    
                </div>
            </section>
            {/* fin about */}
            <ValuesCard />
        </>
    )
}

export default AboutSection