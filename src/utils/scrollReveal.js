import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initScrollReveal = (scope = document.body) => {
  if (!scope) return;

  // Kill ALL existing triggers before re-init to prevent stacking
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  const elements = scope.querySelectorAll(".reveal-up");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  ScrollTrigger.refresh();
};
