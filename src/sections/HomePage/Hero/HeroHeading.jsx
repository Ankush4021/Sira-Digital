import { useRef, useEffect } from "react";

const text =
  "We design and build websites that feel simple, fast, and human.";

const HeroHeading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll(".letter");

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const letterCenter = letterRect.left - rect.left + letterRect.width / 2;

        const distance = Math.abs(mouseX - letterCenter);
        const maxDistance = 120;

        let scale = 1;

        if (distance < maxDistance) {
          scale = 1.45 - distance / maxDistance;
        }

        scale = Math.max(1, scale);
        letter.style.transform = `scale(${scale})`;
      });
    };

    const reset = () => {
      letters.forEach((letter) => {
        letter.style.transform = "scale(1)";
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <h1
      ref={containerRef}
      className="text-4xl md:text-5xl lg:text-6xl mx-auto font-semibold text-slate-100 leading-[1.15] text-center cursor-default select-none tracking-tight"
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.35em]">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="letter inline-block transition-transform duration-200 ease-out will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default HeroHeading;
