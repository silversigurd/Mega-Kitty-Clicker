import React, { useState, useEffect } from 'react';
import { cats } from '../data';

interface CatanimationProps {
    image: string;
}

const Catanimation: React.FC<CatanimationProps> = ({ image }) => {
    const [currentFrame, setCurrentFrame] = useState(0);

    // Datos de frames con sus anchos específicos
    const frameWidths = [
        24, 24, 26, 28, 30, 32, 30, 28, 26, 24
    ];

    // Manejo seguro de la búsqueda de frames
    const relatedFrames = cats.filter(cat => {
        const imageName = image.split('/').pop() || '';
        return cat.image.includes(imageName.split('Frame')[0]);
    });

    // Si no hay frames relacionados, usa todos los frames
    const framesToUse = relatedFrames.length > 0 ? relatedFrames : cats;
    const totalFrames = framesToUse.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % totalFrames);
        }, 280);

        return () => clearInterval(interval);
    }, [totalFrames]);

    // Calcular el desplazamiento
    const calculateOffset = (currentIndex: number) => {
        const maxWidth = Math.max(...frameWidths);
        const currentWidth = frameWidths[currentIndex];
        return (maxWidth - currentWidth) / 20;
    };

    return (
        <div
            className="relative h-[195px] w-[195px] overflow-hidden"
            
        >
            <img
                src={framesToUse[currentFrame].image}
                alt="Animated Cat"
                style={{
                    position: 'absolute',
                    left: `${calculateOffset(currentFrame)}px`,
                    
                    maxWidth: 'none',
                    maxHeight: '200px',
                    width: 'auto',
                    height: '200px'
                }}
            />
        </div>
    );
};

export default Catanimation;