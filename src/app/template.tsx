'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 15 },
  enter: { opacity: 1, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'easeOut', duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
