import React from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  x: number;
  y: number;
  emoji: string;
}

export const Particle: React.FC<ParticleProps> = ({ x, y, emoji }) => {
  const randomDirection = () => (Math.random() - 0.5) * 100;

  return (
    <motion.div
      className="absolute text-2xl pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: 0,
        scale: 0,
        x: randomDirection(),
        y: randomDirection() - 100,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {emoji}
    </motion.div>
  );
};