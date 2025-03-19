export interface Cat {
  id: string;
  name: string;
  image: string;
  price: number;
  unlocked: boolean;
  description: string;
  multiplier: number;
}

export interface Accessory {
  id: string;
  name: string;
  image: string;
  price: number;
  type: 'hat' | 'glasses' | 'bowtie' | 'collar' | 'outfit';
  owned: boolean;
  description: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    width?: string;
    transform?: string;
  };
}

export interface HouseStyle {
  id: string;
  name: string;
  backgroundImage: string;
  price: number;
  owned: boolean;
  description: string;
}

export interface Bed {
  id: string;
  name: string;
  image: string;
  thumbnail: string;
  price: number;
  owned: boolean;
  description: string;
}

export interface Frame {
  id: string;
  name: string;
  image: string;
  thumbnail: string;
  price: number;
  owned: boolean;
  description: string;
  className: string;
}