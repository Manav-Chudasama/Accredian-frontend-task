import React from "react";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "./animations/Motion";

const steps = [
  {
    icon: "📧",
    title: "Invite Friends",
    description:
      "Share your unique referral link with friends and family interested in learning",
    color: "from-purple-600 to-indigo-600",
  },
  {
    icon: "✍️",
    title: "They Sign Up",
    description:
      "When they register using your link, they get a special discount on their first course",
    color: "from-indigo-600 to-blue-600",
  },
  {
    icon: "📚",
    title: "Friends Learn",
    description:
      "Your friends start their learning journey with our premium courses",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: "🎉",
    title: "Earn Rewards",
    description:
      "Get exciting rewards for each successful referral who completes a course",
    color: "from-cyan-600 to-teal-600",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Simple Steps
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start earning rewards in just a few simple steps
            </p>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting Lines Container - Positioned Behind Cards */}

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-[50%] left-0 right-0 hidden lg:block"
            >
              <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
            </motion.div>

            {steps.map((step, index) => (
              <FadeIn key={index} delay={0.2 * (index + 1)} direction="up">
                <div className="relative">
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 z-10"
                  >
                    {/* Step Number with Animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3 * index,
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon with Pulse Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      className="mb-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-16 h-16 mx-auto"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100 to-blue-100"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center text-2xl">
                          {step.icon}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 * index }}
                      className="text-xl font-semibold mb-3 text-center"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 * index }}
                      className="text-gray-600 text-center"
                    >
                      {step.description}
                    </motion.p>

                    {/* Vertical connector for mobile */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 40 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:hidden absolute left-1/2 bottom-0 transform translate-y-full -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-blue-600"
                      />
                    )}
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Call to Action */}
          <FadeIn delay={1.2}>
            <div className="mt-16 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-px rounded-full">
                  <div className="bg-white rounded-full p-1">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-3">
                      <span className="text-white font-semibold">
                        Start Your Referral Journey Today!
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
