import React from "react";
import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  delay = 0,
  direction = null,
  fullWidth = false,
  padding = true,
}) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const initialPosition = direction ? directions[direction] : { opacity: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPosition }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className={`${padding ? "py-2" : ""} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export const Reveal = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.div>
  );
};
