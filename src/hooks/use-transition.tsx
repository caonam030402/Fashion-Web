import React from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function UseTransition({ children, className }: Props) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
