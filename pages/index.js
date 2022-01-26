import Header from '../components/Header';
import HeroImage from '../components/home/HeroImage';
import Layout from '../components/Layout';
import MarcasSection from '../components/MarcasSection';
import ProductsSection from '../components/ProductsSection';
import ServicesSection from '../components/ServicesSection';

const index = () => {
    return (
        <>
            <Header />

            <Layout>
                <div className="2x1:container bg-white font-primary">
                    <HeroImage />
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