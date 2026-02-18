import FeaturedProject from "./FeatureProject";
import ProjectCard from "./ProjectsCard";


const OurWork = () => {
    return (
        <section id="OurWork" className="bg-[#f8f8f8] text-slate-900 py-28 px-6 reveal-up">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-5xl font-semibold tracking-tight">
                        Our <span className="text-purple-900">Work</span>
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        A selection of projects that reflect our approach to design, clarity, and execution.
                    </p>
                </div>

                {/* Featured Project */}
                <FeaturedProject />

                {/* Other Projects */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <ProjectCard
                        title="Fitness Trainer Website"
                        description="Concept website built to demonstrate clean UI and responsive layout."
                    />
                    <ProjectCard
                        title="SaaS Landing Page"
                        description="Modern dark themed SaaS landing page focused on conversion and clarity."
                    />
                </div>

            </div>
        </section>
    );
};

export default OurWork;
