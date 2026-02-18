import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const AboutHero = () => {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".about-hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(".about-hero-btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-4xl text-center">
        <h1 className="about-hero-title text-4xl md:text-6xl font-bold leading-tight">
          We Build Digital Experiences That Matter.
        </h1>

        <p className="about-hero-text mt-6 text-lg text-gray-400">
          SIRA Digital helps small businesses, startups, and creators
          build a strong and credible digital presence through strategy,
          design, and execution.
        </p>

        <button className="about-hero-btn mt-8 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition-all duration-300">
          Let's Work Together
        </button>
      </div>
    </section>
  )
}

export default AboutHero
