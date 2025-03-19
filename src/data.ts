import { Cat, Accessory, HouseStyle, Bed, Frame } from './types';

export const cats: Cat[] = [
  {
    id: 'default',
    name: 'Mittens',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400',
    price: 0,
    unlocked: true,
    description: 'Your first furry friend',
    multiplier: 1
  },
  {
    id: 'siamese',
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=400',
    price: 1000,
    unlocked: false,
    description: 'A graceful Siamese cat with mysterious eyes',
    multiplier: 2
  },
  {
    id: 'persian',
    name: 'Oliver',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=400',
    price: 2000,
    unlocked: false,
    description: 'A fluffy Persian cat with royal attitude',
    multiplier: 3
  },
  {
    id: 'bengal',
    name: 'Tiger',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=400',
    price: 3000,
    unlocked: false,
    description: 'A wild-looking Bengal cat with amazing patterns',
    multiplier: 4
  }
];

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
  },
  {
    id: 'bowtie',
    name: 'Fancy Bowtie',
    image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=100',
    price: 200,
    type: 'bowtie',
    owned: false,
    description: 'For the distinguished gentleman cat',
    position: { bottom: '20%', left: '50%', transform: 'translateX(-50%)', width: '30px' }
  },
  {
    id: 'collar',
    name: 'Diamond Collar',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=100',
    price: 1000,
    type: 'collar',
    owned: false,
    description: 'A sparkly collar for the fancy feline',
    position: { top: '60%', left: '50%', transform: 'translateX(-50%)', width: '50px' }
  },
  {
    id: 'outfit',
    name: 'Sailor Outfit',
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&w=100',
    price: 800,
    type: 'outfit',
    owned: false,
    description: 'Adorable sailor costume',
    position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px' }
  }
];

export const houseStyles: HouseStyle[] = [
  {
    id: 'default',
    name: 'Cozy Home',
    backgroundImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000',
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
  },
  {
    id: 'royal',
    name: 'Royal Palace',
    backgroundImage: 'https://images.unsplash.com/photo-1533008093099-e2681382639a?auto=format&fit=crop&w=2000',
    price: 1000,
    owned: false,
    description: 'Fit for a king or queen'
  },
  {
    id: 'garden',
    name: 'Garden Paradise',
    backgroundImage: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=2000',
    price: 1500,
    owned: false,
    description: 'A refreshing natural setting'
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
  },
  {
    id: 'luxury',
    name: 'Luxury Pod',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=400',
    thumbnail: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=100',
    price: 500,
    owned: false,
    description: 'A modern pod-style bed'
  },
  {
    id: 'castle',
    name: 'Cat Castle',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400',
    thumbnail: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=100',
    price: 1000,
    owned: false,
    description: 'A majestic castle for your royal pet'
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
  },
  {
    id: 'silver',
    name: 'Silver Frame',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=100',
    thumbnail: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=100',
    price: 600,
    owned: false,
    description: 'A sleek silver frame',
    className: 'border-8 border-gray-300 shadow-lg'
  },
  {
    id: 'wooden',
    name: 'Rustic Wood Frame',
    image: 'https://images.unsplash.com/photo-1579544757872-0b6c8670fe5c?auto=format&fit=crop&w=100',
    thumbnail: 'https://images.unsplash.com/photo-1579544757872-0b6c8670fe5c?auto=format&fit=crop&w=100',
    price: 400,
    owned: false,
    description: 'A charming wooden frame',
    className: 'border-8 border-amber-800 shadow-lg'
  }
];