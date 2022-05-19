import Header from '../components/Header';
import HeroCarrusel from '../components/home/HeroCarrusel';
import Layout from '../components/Layout';
import MarcasSection from '../components/MarcasSection';
import ProductsSection from '../components/ProductsSection';
import ServicesSection from '../components/ServicesSection';
import SmallCards from '../components/home/SmallCards';
import CardWithImg from '../components/home/CardWithImg';

const index = ({ cardsWithImg }) => {
    return (
        <>
            <Header />

            <Layout>
                <div className="2x1:container bg-gradient-to-r from-primary-dark via-primary-black to-primary-dark ... font-primary">
                    <HeroCarrusel />
                    <SmallCards />
                    <div className="mx-auto py-10 max-w-7xl 2lg:px-8">

                        <h3 className='text-center text-2xl text-primary-black font-semibold py-8'>Conocenos más...</h3>
                        {cardsWithImg.map((data, i) => {
                            return <CardWithImg key={i} {...data} />;
                        })}
                        <ServicesSection />
                        <ProductsSection />
                        <MarcasSection />
                    </div>

                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            cardsWithImg: [
                {
                    title: "Te Recomendamos lo que Necesitas no lo que quieres oir",
                    body: [
                        "Somos un emprendimiento dinámico e innovador, con una alta proyección a nivel nacional, con la que contamos con una amplia red de proveedores para tu entera disposición."
                    ],
                    textColor: "text-primary-white",
                    image: {
                        url: "/images/neumaticos/neumaticos.jpg",
                        left: false,
                        alt: "Compra tus neumáticos en Neucrist"
                    },
                    background: "bg-black",
                    btnDark: false,
                    btnMsg: "Saber más"
                },
                {
                    title: "+ 1000 familias ayudadas",
                    body: [
                        "Te ayudamos dando la atención y el respeto que te mereces. Nuestro objetivo es mejorar su calidad de confiabilidad, apostando por el bienestar y confort"
                    ],
                    textColor: "text-primary-black",
                    image: {
                        url: "/images/neumaticos/neumaticos.jpg",
                        left: true,
                        alt: "Compra tus cristales en Neucrist"
                    },
                    background: "bg-white",
                    btnDark: false,
                    btnMsg: "Saber más"
                },
                {
                    title: "Expertos ayudándote",
                    body: [
                        "Contamos con personas capacitadas que te ayudarán a tomar la mejor decisión."
                    ],
                    textColor: "text-primary-white",
                    image: {
                        url: "/images/neumaticos/neumaticos.jpg",
                        left: false,
                        alt: "Te ayudamos en lo que necesitas"
                    },
                    background: "bg-primary-red",
                    btnDark: true,
                    btnMsg: "Saber más"
                }
            ]
        }
    };
}

export default index;