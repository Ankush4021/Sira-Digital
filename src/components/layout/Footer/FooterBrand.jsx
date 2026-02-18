import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const FooterBrand = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-white mb-6">
                SIRA <span className="text-purple-500">Digital</span>
            </h3>

            <p className="leading-relaxed mb-6">
                We design and build digital experiences that feel simple,
                fast, and human.
            </p>

            <div className="flex gap-4 text-lg">
                <FaInstagram className="hover:text-purple-500 transition cursor-pointer" ></FaInstagram>
                <FaLinkedinIn className="hover:text-purple-500 transition cursor-pointer" />
                <FaTwitter className="hover:text-purple-500 transition cursor-pointer" />
            </div>
        </div>
    );
};

export default FooterBrand;
