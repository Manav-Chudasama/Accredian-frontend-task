import React from "react";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "./animations/Motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "images/testi2.jpg",
    quote:
      "Thanks to the referral program, I earned over ₹500 in rewards while helping my friends start their coding journey. It's a win-win!",
    reward: "₹500 in Cash Rewards",
    company: "Google",
    companyLogo: "/company-logos/google.png",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    image: "images/testi1.jpg",
    quote:
      "I referred 5 friends and got free access to premium courses. The courses have been instrumental in advancing my career.",
    reward: "5 Free Premium Courses",
    company: "Microsoft",
    companyLogo: "/company-logos/microsoft.png",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "images/testi2.jpg",
    quote:
      "The referral process was smooth, and my friends were happy with their discounts. I've already earned VIP status!",
    reward: "VIP Status Achieved",
    company: "Apple",
    companyLogo: "/company-logos/apple.png",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    image: "images/testi1.jpg",
    quote:
      "The platform made it easy to share courses with my team. We've all benefited from the high-quality content and rewards.",
    reward: "Team Rewards Earned",
    company: "Amazon",
    companyLogo: "/company-logos/amazon.png",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Members Say
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our referral program has helped members earn rewards
              while growing their network
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={index}
              delay={0.2 * (index + 1)}
              direction={index % 2 === 0 ? "up" : "down"}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between h-full"
              >
                {/* Quote Icon */}
                <ScaleIn delay={0.4 * (index + 1)}>
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 text-purple-600 transform rotate-180"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.437 21.122 10.043 23 8 23v2c3.314 0 6-2.686 6-6V8h-4zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C25.437 21.122 24.043 23 22 23v2c3.314 0 6-2.686 6-6V8h-4z" />
                      </svg>
                    </motion.div>
                  </div>
                </ScaleIn>

                {/* Quote Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600 mb-6 italic relative z-10"
                >
                  &quot;{testimonial.quote}&quot;
                </motion.p>

                {/* Profile Section */}
                <div className="flex items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5 * index,
                    }}
                    className="relative"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-purple-50"
                    />
                  </motion.div>
                  <div className="ml-4">
                    <motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="font-semibold text-gray-900"
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm text-gray-500"
                    >
                      {testimonial.role}
                    </motion.div>
                  </div>
                </div>

                {/* Reward Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-4 right-4"
                >
                  <span className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
                    {testimonial.reward}
                  </span>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
