//import React, { useState, useEffect } from 'react';
import { Cat, Accessory, HouseStyle, Bed, Frame } from './types';

export const cats: Cat[] = Array.from({ length: 10 }, (_, index) => ({
    id: `frame_${index}`,
    name: `Mittens Frame ${index + 1}`,
    image: `/src/components/dist/img/Cat/Cat sprites/Sprite/Frame${index + 1}.png`, // Corrección de rutas
    price: 0,
    unlocked: true,
    description: `Frame ${index + 1} of your furry friend`,
    multiplier: 1
} as Cat)); // Aserción de tipo

export const accessories: Accessory[] = [
    {
        id: 'crown',
        name: 'Royal Crown',
        image: 'https://images.unsplash.com/photo-1590032255089-a0a843c3c6b4?auto=format&fit=crop&w=100',
        price: 500,
        type: 'hat',
        owned: false,
        description: 'A majestic crown for your royal kitty',
        position: { top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '40px' }
    },
    {
        id: 'sunglasses',
        name: 'Cool Shades',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=100',
        price: 300,
        type: 'glasses',
        owned: false,
        description: 'Keep your cat looking cool',
        position: { top: '30%', left: '50%', transform: 'translateX(-50%)', width: '60px' }
    }
];

export const houseStyles: HouseStyle[] = [
    {
        id: 'default',
        name: 'Cozy Home',
        backgroundImage: '/src/components/dist/img/Cat/background2.jpg', // Rutas corregidas
        price: 0,
        owned: true,
        description: 'A warm and welcoming space'
    },
    {
        id: 'modern',
        name: 'Modern Pad',
        backgroundImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=2000',
        price: 500,
        owned: false,
        description: 'Sleek and contemporary vibes'
    }
];

export const beds: Bed[] = [
    {
        id: 'basic',
        name: 'Comfy Cushion',
        image: 'https://images.unsplash.com/photo-1592951668528-d98e8c5e6e08?auto=format&fit=crop&w=400',
        thumbnail: 'https://images.unsplash.com/photo-1592951668528-d98e8c5e6e08?auto=format&fit=crop&w=100',
        price: 200,
        owned: false,
        description: 'A simple but comfortable bed'
    }
];

export const frames: Frame[] = [
    {
        id: 'golden',
        name: 'Golden Frame',
        image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=100',
        thumbnail: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=100',
        price: 800,
        owned: false,
        description: 'An elegant golden frame',
        className: 'border-8 border-yellow-400 shadow-lg'
    }
];


