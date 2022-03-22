import Header from '../components/Header';
import HeroCarrusel from '../components/home/HeroCarrusel';
import Layout from '../components/Layout';
import MarcasSection from '../components/MarcasSection';
import ProductsSection from '../components/ProductsSection';
import ServicesSection from '../components/ServicesSection';
import SmallCards from '../components/home/SmallCards';

const index = () => {
    return (
        <>
            <Header />

            <Layout>
                <div className="2x1:container bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 ... font-primary">
                    <HeroCarrusel />
                    <SmallCards />
                    <div className="mx-auto py-10 max-w-7xl 2lg:px-8">
                        
                        <ProductsSection />
                        <ServicesSection />
                        <MarcasSection />

                        {/* {cardsWithImg.map((data, i) => {
              return <CardWithImg key={i} {...data} />;
            })} */}
                    </div>

                </div>
            </Layout>
        </>
    )
}

export default index;