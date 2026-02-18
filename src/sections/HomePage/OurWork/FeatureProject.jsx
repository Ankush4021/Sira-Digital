import FeaturedProjectImg from "../../../assets/images/our-work/FeaturedProjectImg.png"; // change image path

const FeaturedProject = () => {
    return (
        <div className="bg-slate-500 rounded-2xl  overflow-hidden hover:scale-[1.02] transition duration-500 reveal-up">
            <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="overflow-hidden">
                    <img
                        src={FeaturedProjectImg}
                        alt="Dinesh Caterer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"

                    />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center">
                    <span className="text-white text-xs tracking-widest uppercase">
                        Featured Project
                    </span>

                    <h3 className="text-3xl text-purple-900 font-bold mt-4 [text-shadow:0px_3px_8px_rgba(0,0,0,0.25)] ">
                        Dinesh Caterer Website
                    </h3>

                    <p className="text-gray-200 mt-4">
                        Modern responsive website built to elevate brand presence and increase inquiries.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                        <span className="px-3 py-1 text-sm bg-white/50 rounded-full">HTML/CSS</span>
                        <span className="px-3 py-1 text-sm bg-white/50 rounded-full">JavaScript</span>
                        <span className="px-3 py-1 text-sm bg-white/50 rounded-full">Responsive</span>
                    </div>

                    <a
                        href="https://www.dineshcaterers.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 w-fit px-6 py-3 text-gray-200 border border-purple-900 rounded-full hover:bg-purple-600 hover:text-black transition duration-300 inline-block"
                    >
                        View Project
                    </a>

                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
