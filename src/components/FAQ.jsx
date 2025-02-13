import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/Motion";

const faqs = [
  {
    question: "How does the referral program work?",
    answer:
      "When you refer a friend using your unique link, they get a special discount on their first course. Once they complete the course, you earn rewards that can be redeemed for cash or free courses.",
  },
  {
    question: "What rewards can I earn?",
    answer:
      "You can earn cash rewards up to $100 per referral, free access to premium courses, exclusive merchandise, and VIP status with special benefits.",
  },
  {
    question: "How long does it take to receive rewards?",
    answer:
      "Cash rewards are processed within 48 hours of your friend completing their course. Course access and other benefits are credited instantly to your account.",
  },
  {
    question: "Is there a limit to how many friends I can refer?",
    answer:
      "No, there's no limit! You can refer as many friends as you want and earn rewards for each successful referral.",
  },
  {
    question: "How do I track my referrals?",
    answer:
      "You can track all your referrals, pending rewards, and successful conversions in your personalized dashboard.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              FAQ
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our referral program
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.2 * (index + 1)}>
              <motion.div initial={false} className="mb-4">
                <motion.button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.3,
                          },
                          opacity: {
                            duration: 0.3,
                            delay: 0.1,
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.3,
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.3,
                            delay: 0.1,
                          },
                        }}
                        exit={{ y: -10, opacity: 0 }}
                        className="p-6 pt-2 text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
