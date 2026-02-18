import MobileServices from "./MobileServices";
import SectionHeader from "./SectionHeader";
import ServicesScroller from "./ServicesScroller";

const WhatWeDo = () => {

    const services = [
        {
            title: "Web Development",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            title: "UI / UX Design",
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
        },
        {
            title: "Digital Presence",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
        },
        {
            title: "Custom Solutions",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
    ];



    return (
        <section className=" min-h-screen bg-white w-full mt-16 mb-16 reveal-up">
            <div className="max-w-full sm:px-4">
                <SectionHeader />
                <ServicesScroller items={services}  />
                <MobileServices items={services} />
            </div>
        </section>
    );
};

export default WhatWeDo;
