import Header from '../components/Header';
import Layout from '../components/Layout';
import MarcasSection from '../components/MarcasSection';

const index = () => {
    return (
        <>
            <Header />

            <Layout>
                <div className="2x1:container bg-primary-white font-primary text-center h-screen w-full">
                    <h1>Index page</h1>
                </div>
                <MarcasSection />
            </Layout>
        </>
    )
}

export default index;