const ContactInfo = () => {
    return (
        <div>
            <p className="text-lg uppercase tracking-widest text-purple-800 font-bold mb-4">
                Contact Us
            </p>

            <h1 className="text-4xl text-slate-900 lg:text-5xl font-(--font-body) leading-tight mb-6">
                Let's Build Something <br /> Meaningful Together
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Have a project in mind? We'd love to hear about it.
                Tell us about your idea and we'll help you bring it to life with
                clear strategy, design, and execution.
            </p>

            <div className="space-y-4 text-gray-700 cursor-pointer">
                <p> <span className="font-bold text-gray-900" >Email: </span> contact.siradigital@gmail.com </p>
                
            </div>
        </div>
    );
};

export default ContactInfo;
