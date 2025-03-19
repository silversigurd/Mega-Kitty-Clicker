import React from 'react';
import { motion } from 'framer-motion';
import { Accessory, Frame } from '../types';

interface CatProps {
  image: string;
  onClick: (x: number, y: number) => void;
  accessories: Accessory[];
  selectedBed?: string;
  selectedFrame?: Frame;
}

export const Cat: React.FC<CatProps> = ({ image, onClick, accessories, selectedBed, selectedFrame }) => {
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onClick(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className="relative inline-block">
      {selectedBed && (
        <img
          src={selectedBed}
          alt="Cat Bed"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-auto -z-10"
        />
      )}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="cursor-pointer relative"
      >
        <div className={`rounded-full overflow-hidden ${selectedFrame?.className || ''}`}>
          <img 
            src={image} 
            alt="Cat" 
            className="w-64 h-64 object-cover"
          />
        </div>
        {accessories.map((accessory, index) => (
          <img
            key={index}
            src={accessory.image}
            alt={accessory.name}
            className="absolute no-select pointer-events-none"
            style={accessory.position}
          />
        ))}
      </motion.div>
    </div>
  );
};