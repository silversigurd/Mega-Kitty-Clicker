import React from 'react';
import { motion } from 'framer-motion';
import { Accessory, Frame } from '../types';
import Catanimation from './Catanimation'; // Importa el nuevo componente

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
                    className="-translate-x-1/2 absolute bottom-0 left-1/2 -z-10 h-auto w-96 transform"
                />
            )}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                className="relative cursor-pointer"
            >
                <div className={`rounded-full overflow-hidden ${selectedFrame?.className || ''}`}>
                    {/* Usa Catanimation en lugar de la imagen estática */}
                    <Catanimation image={image} />
                </div>
                {accessories.map((accessory, index) => (
                    <img
                        key={index}
                        src={accessory.image}
                        alt={accessory.name}
                        className="no-select pointer-events-none absolute"
                        style={accessory.position}
                    />
                ))}
            </motion.div>
        </div>
    );
};
