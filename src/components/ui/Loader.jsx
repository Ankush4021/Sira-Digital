import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ setLoading }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // intro fade
    tl.from(loaderRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })

      // welcome text
      .from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })

      // sub text
      .from(
        subTextRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )

      // sweeping light line
      .to(lineRef.current, {
        x: "200%",
        duration: 1.2,
        ease: "power2.inOut",
      })

      // hold
      .to({}, { duration: 0.6 })

      // curtain exit
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1.4,
        ease: "power4.inOut",
      });
  }, [setLoading]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 loader-bg z-9999 flex items-center justify-center overflow-hidden"
    >
      {/* moving shine line */}
      <div ref={lineRef} className="loader-shine"></div>

      <div className="text-center space-y-4">
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold tracking-wide glow-text"
        >
          SIRA DIGITAL
        </h1>

        <p
          ref={subTextRef}
          className="text-gray-400 text-lg md:text-xl tracking-widest uppercase"
        >
          Welcome to Sira Digital
        </p>
      </div>
    </div>
  );
};

export default Loader;
