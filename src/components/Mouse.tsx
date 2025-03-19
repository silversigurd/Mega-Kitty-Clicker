import React from 'react';
import { motion } from 'framer-motion';

export const Mouse: React.FC = () => {
  const randomPosition = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  });

  const randomDuration = () => 10 + Math.random() * 10;

  return (
    <motion.div
      className="absolute text-gray-400 opacity-20 pointer-events-none"
      initial={randomPosition()}
      animate={{
        x: [null, randomPosition().x, randomPosition().x, randomPosition().x],
        y: [null, randomPosition().y, randomPosition().y, randomPosition().y],
      }}
      transition={{
        duration: randomDuration(),
        repeat: Infinity,
        ease: "linear"
      }}
    >
      🐁
    </motion.div>
  );
};