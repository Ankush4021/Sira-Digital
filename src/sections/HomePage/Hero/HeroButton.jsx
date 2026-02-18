const HeroButtons = () => {
  return (
    <div className="mt-10 flex gap-4 justify-center flex-wrap">

      <a
        href="#Contact"
        className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-slate-200 transition active:scale-98"
      >
        Start a Project
      </a>

      <a
        href="#OurWork"
        className="border border-white/40 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-purple-700 hover:text-white transition active:scale-98"
      >
        See our work
      </a>

    </div>
  );
};

export default HeroButtons;
