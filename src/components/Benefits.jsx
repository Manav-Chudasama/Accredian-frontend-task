import React from "react";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn, Reveal } from "./animations/Motion";

const benefits = [
  {
    icon: "💎",
    title: "Cash Rewards",
    description:
      "Earn up to ₹100 for each successful referral who completes a course",
    stats: "₹100",
    statsLabel: "Per Referral",
    color: "from-purple-600 to-indigo-600",
    highlight: "Instant Payouts",
  },
  {
    icon: "🎓",
    title: "Free Courses",
    description:
      "Get free access to premium courses after 5 successful referrals",
    stats: "5+",
    statsLabel: "Free Courses",
    color: "from-indigo-600 to-blue-600",
    highlight: "Premium Content",
  },
  {
    icon: "🎁",
    title: "Special Bonuses",
    description:
      "Unlock exclusive rewards and merchandise with your referral points",
    stats: "2X",
    statsLabel: "Bonus Points",
    color: "from-blue-600 to-cyan-600",
    highlight: "Extra Perks",
  },
  {
    icon: "⭐",
    title: "VIP Status",
    description:
      "Achieve VIP status with priority support and exclusive benefits",
    stats: "24/7",
    statsLabel: "VIP Support",
    color: "from-cyan-600 to-teal-600",
    highlight: "Elite Benefits",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Benefits
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Refer Friends?
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the amazing benefits you get when you refer friends to
              our platform
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn
              key={index}
              delay={0.2 * (index + 1)}
              direction={index % 2 === 0 ? "up" : "down"}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-[420px]"
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />

                {/* Card Content Container */}
                <div className="relative flex flex-col h-full p-8">
                  {/* Icon with Gradient */}
                  <ScaleIn delay={0.4 * (index + 1)}>
                    <div className="mb-6">
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl relative z-10">
                          {benefit.icon}
                        </span>
                      </div>
                    </div>
                  </ScaleIn>

                  {/* Content */}
                  <div className="flex-grow">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-xl font-semibold mb-3"
                    >
                      {benefit.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-gray-600 mb-6"
                    >
                      {benefit.description}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-3xl font-bold text-purple-600 mb-2"
                    >
                      {benefit.stats}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm text-gray-500"
                    >
                      {benefit.statsLabel}
                    </motion.div>
                  </div>

                  {/* Highlight Tag */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-6"
                  >
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${benefit.color} text-white`}
                    >
                      {benefit.highlight}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
