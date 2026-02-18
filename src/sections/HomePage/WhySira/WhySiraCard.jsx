const WhyCard = ({ item }) => {
  return (
    <div className="group relative rounded-3xl p-px bg-linear-to-br from-black/20 via-gray-300/20 to-black/20 hover:from-black hover:to-gray-700 transition-all duration-500 reveal-up">
      
      <div className="relative h-full rounded-3xl bg-white/70 backdrop-blur-xl p-8 overflow-hidden">

        {/* Accent number */}
        <span className="absolute -top-6 -right-6 text-[120px] font-extrabold text-black/5 group-hover:text-black/10 transition">
          {item.accent}
        </span>

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition border border-purple-900">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-black/10 blur-3xl" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4 relative z-10">
          {item.title}
        </h3>

        <p className="text-gray-600 leading-relaxed relative z-10">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
