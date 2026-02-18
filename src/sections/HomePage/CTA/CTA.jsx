const CTA = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-16 relative overflow-hidden reveal-up mt-6">

            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900">
                    Ready to Elevate Your <br /> Digital Presence?
                </h2>

                <p className="text-gray-600 text-lg mb-10">
                    Let's create something that not only looks good
                    but drives real results for your business.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">

                    <button className="bg-black text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-900">
                        Start Your Project
                    </button>

                    <button className="border border-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-black hover:text-white">
                        Schedule a Call
                    </button>

                </div>

            </div>
        </section>
    );
};

export default CTA;
