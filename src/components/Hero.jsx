import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn, Reveal } from "./animations/Motion";
import { referralService } from "../services/api";

const Hero = ({ onReferClick }) => {
  const [stats, setStats] = useState({
    users: {
      totalUniqueUsers: 0,
      uniqueReferrers: 0,
      uniqueReferees: 0,
    },
    referrals: {
      emailsSent: 0,
    },
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userStats, referralStats] = await Promise.all([
          referralService.getUserStats(),
          referralService.getReferralStats(),
        ]);

        setStats({
          users: userStats,
          referrals: referralStats,
          loading: false,
          error: null,
        });
      } catch (error) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load statistics",
        }));
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="pt-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Earn Rewards by Referring Your Friends!
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none">
                Share the joy of learning and earn exciting rewards for every
                successful referral. Join our community of learners and earners
                today!
              </p>
            </FadeIn>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <FadeIn delay={0.6} direction="up">
                <Reveal>
                  <button
                    onClick={onReferClick}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition duration-300 shadow-lg w-full sm:w-auto"
                  >
                    Start Referring Now
                  </button>
                </Reveal>
              </FadeIn>
            </div>

            <FadeIn delay={0.8}>
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600">
                    {stats.users.uniqueReferrers}
                  </div>
                  <div className="text-gray-600">Active Users</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600">
                    {stats.referrals.emailsSent}
                  </div>
                  <div className="text-gray-600">Referrals</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right Image/Illustration */}
          <div className="lg:w-1/2 lg:pl-12">
            <FadeIn delay={0.5} direction="left">
              <div className="relative">
                <motion.div
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 3 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl transform opacity-10"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  src="/hero-illustration.png"
                  alt="Referral Program"
                  className="relative rounded-3xl shadow-lg"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
