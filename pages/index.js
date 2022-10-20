import Head from 'next/head';
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
            
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            
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