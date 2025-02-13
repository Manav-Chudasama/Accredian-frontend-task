import React from "react";
import { motion } from "framer-motion";
import { FadeIn, Reveal } from "./animations/Motion";

const CTA = ({ onReferClick }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-blue-900/95" />
      </motion.div>

      {/* Decorative circles with animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="text-white/90 text-sm font-medium">
                Join Our Community Today
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Journey to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Earning Rewards
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied members who are earning while helping
              their friends discover new learning opportunities
            </p>
          </FadeIn>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <FadeIn delay={0.8} direction="up">
              <Reveal>
                <button
                  onClick={onReferClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg 
                    bg-gradient-to-r from-purple-500 to-blue-500 text-white
                    hover:from-purple-600 hover:to-blue-600
                    transform transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900"
                >
                  Start Referring Now
                </button>
              </Reveal>
            </FadeIn>

            <FadeIn delay={1} direction="up">
              <Reveal>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg
                    border-2 border-white/20 text-white
                    hover:bg-white/10 backdrop-blur-sm
                    transform transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Learn More
                </a>
              </Reveal>
            </FadeIn>
          </div>

          <FadeIn delay={1.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>No limits on referrals</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Instant rewards</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
                <span>Easy withdrawals</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTA;
