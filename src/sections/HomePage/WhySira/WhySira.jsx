import WhyHeader from "./WhySiraHeader";
import WhyCard from "./WhySiraCard";
import { whySiraData } from "./WhySiraData";

const WhySira = () => {


    return (
        <section className="relative py-32 overflow-hidden bg-[#f8f8f8] px-4 reveal-up"
        >
            

            {/* Background blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-40" />
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">
                <WhyHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {whySiraData.map((item, i) => (
                        <WhyCard key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySira;
