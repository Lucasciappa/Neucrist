import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const Contacto = () => {
    return (
        <>
            <Header />

            <Layout>
                <div className="max-w-3xl mx-auto bg-primary-white font-primary text-center h-full w-full">
                    <ContactForm />
                </div>
            </Layout>
        </>
    )
}

export default Contacto;