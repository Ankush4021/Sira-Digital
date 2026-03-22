import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden flex items-center justify-center px-4 pt-24 sm:pt-28 lg:pt-32"
    >
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default Hero;