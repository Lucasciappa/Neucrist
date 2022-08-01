import AboutSection from '../components/AboutSection';
import BrandsSection from '../components/BrandsSection';
import ContactSection from '../components/ContactSection';
import FeaturesSection from '../components/FeaturesSection';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import Layout from '../components/Layout';
import ProductsSection from '../components/ProductsSection';
import SmallCards from '../components/SmallCards';

const IndexPage = () => {
    return (
        <>
            <Header />
            <Layout>
                <HeroImage />
                <SmallCards />
                <FeaturesSection />
                <ProductsSection />
                <AboutSection />
                <BrandsSection />
                <ContactSection />
            </Layout>
        </>
    )
}

export default IndexPage;