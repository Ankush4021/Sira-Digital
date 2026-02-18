import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 overflow-hidden">

      <HeroBackground />

      <HeroContent />

    </section>
  );
};

export default Hero;
