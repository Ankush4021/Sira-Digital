const ContactForm = () => {
    return (
        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">

            <form className="space-y-6">

                <div>
                    <label className="block text-sm text-slate-800 font-medium mb-2">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                </div>

                <div>
                    <label className="block text-sm text-slate-800 font-medium mb-2">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                </div>

                <div>
                    <label className="block text-sm text-slate-800 font-medium mb-2">Project Details</label>
                    <textarea
                        rows="4"
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-800 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:bg-purple-700 cursor-pointer hover:scale-[1.02]"
                >
                    Send Message
                </button>

            </form>
        </div>
    );
};

export default ContactForm;
