import FooterBrand from "../../layout/Footer/FooterBrand";
import FooterLinks from "../../layout/Footer/FooterLinks";
import FooterServices from "../../layout/Footer/FooterServices";
import FooterContact from "../../layout/Footer/FooterContact";
import FooterBottom from "../../layout/Footer/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] text-gray-300 pt-24 pb-10 px-6 lg:px-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          <FooterBrand />
          <div className="flex justify-between px-6">
            <FooterLinks />
            <FooterServices />
          </div>
          <FooterContact />
        </div>

        <FooterBottom />

      </div>
    </footer>
  );
};

export default Footer;




