import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-primary-dark">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
