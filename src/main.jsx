import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.15,
  smoothWheel: true,
  smoothTouch: false,
  lerp: 0.08,
});

// GSAP + Lenis Sync (REAL SOLUTION)
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")).render(<App />);
