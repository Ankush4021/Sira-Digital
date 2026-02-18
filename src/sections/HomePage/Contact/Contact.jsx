import CTA from "../CTA/CTA";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <section id="Contact" className="bg-white py-24 px-6 lg:px-16 reveal-up">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Side */}
                <ContactInfo />

                {/* Right Side */}
                <ContactForm />

            </div>
            <CTA />
        </section>
    );
};

export default Contact;
