import { memo } from "react";
import HeroVideo from "../../../assets/videos/HeroVideo1.webm";

const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#05030a]">

      <video
        className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={HeroVideo} type="video/webm" />
      </video>

      {/* LIGHTER overlay (fix) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0715]/40 via-[#0f0a1d]/45 to-[#090510]/60" />

      {/* subtle glow only (reduced) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.06),transparent_40%)]" />

    </div>
  );
});

export default HeroBackground;