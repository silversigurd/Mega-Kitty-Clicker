import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CatanimationProps {
    image: string;
}

const Catanimation: React.FC<CatanimationProps> = ({ image }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const totalFrames = 4; // Número de imágenes en la animación

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % totalFrames);
        }, 200); // Velocidad del cambio de imagen

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.img
            src={image}
            alt="Animated Cat"
            className="h-64 w-64 object-cover"
        />
    );
};

export default Catanimation;
