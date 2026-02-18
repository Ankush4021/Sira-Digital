import HeroButtons from "./HeroButton";
import HeroHeading from "./HeroHeading";


const HeroContent = () => {
    return (
        <div className="max-w-5xl text-center reveal-up">

            <p className="text-purple-500 font-medium mb-5 text-xl md:text-xl">
                Digital Design & Development Studio
            </p>

            <HeroHeading />

            <p className="mt-6 text-slate-300 text-lg md:text-base max-w-2xl mx-auto">
                SIRA Digital helps startups and small businesses create clean,
                scalable websites that actually support growth.
            </p>

            <HeroButtons />
        </div>
    );
};

export default HeroContent;
