import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;