import BgImgHero from "../../../assets/images/BgImgHero.webp";

const HeroBackground = () => {
  return (
    <>
<img
  src={BgImgHero}
  alt="hero"
  className="absolute inset-0 w-full h-full object-cover -z-10"
  loading="eager"
/>


      <div className="absolute inset-0 bg-[#0f0a1dcc]/70 -z-10"></div>
    </>
  );
};

export default HeroBackground;
