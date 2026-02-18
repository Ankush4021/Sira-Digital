
import { whySiraData } from "./WhySiraData";
import WhyCard from "./WhySiraCard";

const WhyGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {whySiraData.map((item, index) => (
        <WhyCard key={index} item={item} />
      ))}
    </div>
  );
};

export default WhyGrid;
