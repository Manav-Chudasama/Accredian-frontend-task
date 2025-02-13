import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReferralModal from "./components/ReferralModal";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import PopularCourses from "./components/PopularCourses";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleReferClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>
        <Navbar onReferClick={handleReferClick} />
        <Hero onReferClick={handleReferClick} />
        <HowItWorks />
        <Benefits />
        <PopularCourses />
        <Testimonials />
        <FAQ />
        <CTA onReferClick={handleReferClick} />
        <Footer />
        <ReferralModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </AnimatePresence>
    </div>
  );
};

export default App;
