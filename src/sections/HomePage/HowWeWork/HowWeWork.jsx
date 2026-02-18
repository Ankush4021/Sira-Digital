import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Steps from "./Steps"
import Visual from "./Visual"
import { stepsData } from "./Data"

gsap.registerPlugin(ScrollTrigger)

const HowWeWork = () => {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // DESKTOP ANIMATION
      if (window.matchMedia("(min-width: 1024px)").matches) {

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: true,
          anticipatePin: 1,

          onUpdate: (self) => {
            const index = Math.min(
              stepsData.length - 1,
              Math.floor(self.progress * stepsData.length)
            )
            setActiveStep(index)
          },
        })
      }

      // MOBILE ANIMATION
      else {

        const steps = gsap.utils.toArray(".work-step")

        steps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          })
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <section ref={sectionRef} className="bg-white text-black reveal-up">
      <div className="mx-auto max-w-7xl min-h-screen px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Steps steps={stepsData} activeStep={activeStep} />
        <Visual activeStep={activeStep} />
      </div>
    </section>
  )
}

export default HowWeWork
