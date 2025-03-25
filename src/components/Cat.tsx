import React from 'react';
import { Accessory, Frame } from '../types';
import Catanimation from './Catanimation';

interface CatProps {
    image: string;
    onClick: (x: number, y: number) => void;
    accessories: Accessory[];
    selectedBed?: string;
    selectedFrame?: Frame;
}

export const Cat: React.FC<CatProps> = ({ image, onClick, accessories, selectedBed }) => {
    const handleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onClick(e.clientX - rect.left, e.clientY - rect.top);
    };

    return (
        <div className="right-30 relative top-40 inline-block">  {/* Aquí se agrega mt-10 para moverlo hacia abajo */}
            {selectedBed && (
                <img
                    src={selectedBed}
                    alt="Cat Bed"
                    className="-translate-x-1/2 absolute bottom-0 left-1/2 -z-10 h-auto w-96 transform"
                />
            )}
            <div // Cambiar de motion.div a div normal
                onClick={handleClick}
                className="relative cursor-pointer"
            >
                <div className="scale-50">
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
            </div>
        </div>
    );
};