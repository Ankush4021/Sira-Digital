import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

import Hero from "../../sections/HomePage/Hero/Hero";
import WhySira from "../../sections/HomePage/WhySira/WhySira";
import WhatWeDo from "../../sections/HomePage/WhatWeDo/WeDo";
import HowWeWork from "../../sections/HomePage/HowWeWork/HowWeWork";
import OurWork from "../../sections/HomePage/OurWork/OurWork";
import Testimonials from "../../sections/HomePage/Testimonial/Testimonials";
import Contact from "../../sections/HomePage/Contact/Contact";

import { useLayoutEffect, useRef } from "react";
import { initScrollReveal } from "../../utils/scrollReveal";

const HomePage = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    initScrollReveal(pageRef.current);
  }, []);

  return (
    <main ref={pageRef}>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhySira />
      <HowWeWork />
      <OurWork />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default HomePage;
