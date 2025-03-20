import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cat } from './components/Cat';
import { Shop } from './components/Shop';
import { Particle } from './components/Particle';
import { cats as initialCats, accessories as initialAccessories, houseStyles as initialHouseStyles, beds as initialBeds, frames as initialFrames } from './data';
import type { Cat as CatType, Accessory, HouseStyle, Bed, Frame } from './types';

function App() {
  const [points, setPoints] = useState(0);
  const [cats, setCats] = useState(initialCats);
  const [accessories, setAccessories] = useState(initialAccessories);
  const [houseStyles, setHouseStyles] = useState(initialHouseStyles);
  const [beds, setBeds] = useState(initialBeds);
  const [frames, setFrames] = useState(initialFrames);
  const [selectedCat, setSelectedCat] = useState(cats[0]);
  const [selectedStyle, setSelectedStyle] = useState(houseStyles[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<Accessory[]>([]);
  const [selectedBed, setSelectedBed] = useState<string | undefined>();
  const [selectedFrame, setSelectedFrame] = useState<Frame | undefined>();
  const [clickMultiplier, setClickMultiplier] = useState(1);
  const [showPoints, setShowPoints] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

    const emojis = ['✨✨', '✨✨', '✨✨', '✨✨', '✨✨', '✨✨'];
  const numberOfMice = 5;

  const handleCatClick = (x: number, y: number) => {
    const pointsToAdd = Math.round(clickMultiplier * selectedCat.multiplier);
    setPoints(prev => prev + pointsToAdd);
    setShowPoints(true);
    setTimeout(() => setShowPoints(false), 500);

    const newParticles = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  const handleBuyCat = (cat: CatType) => {
    if (points >= cat.price) {
      setPoints(prev => prev - cat.price);
      setCats(prev => prev.map(c => 
        c.id === cat.id ? { ...c, unlocked: true } : c
      ));
      setSelectedCat(cat);
    }
  };

  const handleBuyAccessory = (accessory: Accessory) => {
    if (points >= accessory.price) {
      setPoints(prev => prev - accessory.price);
      setAccessories(prev => prev.map(a => 
        a.id === accessory.id ? { ...a, owned: true } : a
      ));
      setSelectedAccessories(prev => [...prev, accessory]);
      setClickMultiplier(prev => prev + 0.5);
    }
  };

  const handleBuyHouseStyle = (style: HouseStyle) => {
    if (points >= style.price) {
      setPoints(prev => prev - style.price);
      setHouseStyles(prev => prev.map(s => 
        s.id === style.id ? { ...s, owned: true } : s
      ));
      setSelectedStyle(style);
    }
  };

  const handleBuyBed = (bed: Bed) => {
    if (points >= bed.price) {
      setPoints(prev => prev - bed.price);
      setBeds(prev => prev.map(b => 
        b.id === bed.id ? { ...b, owned: true } : b
      ));
      setSelectedBed(bed.image);
    }
  };

  const handleBuyFrame = (frame: Frame) => {
    if (points >= frame.price) {
      setPoints(prev => prev - frame.price);
      setFrames(prev => prev.map(f => 
        f.id === frame.id ? { ...f, owned: true } : f
      ));
      setSelectedFrame(frame);
    }
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-cover bg-fixed bg-center p-8 transition-all duration-500"
      style={{ backgroundImage: `url(${selectedStyle.backgroundImage})` }}
    >
      
      

      <div className="relative mx-auto mb-20 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="font-fredoka mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-7xl font-bold text-transparent drop-shadow-lg">
            Mega Kitty Clicker
          </h1>
          <motion.div
            animate={{
              scale: showPoints ? 1.2 : 1,
            }}
            className="font-fredoka text-3xl text-purple-800"
          >
            {points} points
          </motion.div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            <Cat
              image={selectedCat.image}
              onClick={handleCatClick}
              accessories={selectedAccessories}
              selectedBed={selectedBed}
              selectedFrame={selectedFrame}
            />
            {particles.map(particle => (
              <Particle
                key={particle.id}
                x={particle.x}
                y={particle.y}
                emoji={particle.emoji}
              />
            ))}
            <AnimatePresence>
              {showPoints && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0 }}
                  className="no-select pointer-events-none absolute top-1/2 text-2xl font-bold text-green-500"
                >
                  +{Math.round(clickMultiplier * selectedCat.multiplier)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Shop
        points={points}
        cats={cats}
        accessories={accessories}
        houseStyles={houseStyles}
        beds={beds}
        frames={frames}
        onBuyCat={handleBuyCat}
        onBuyAccessory={handleBuyAccessory}
        onBuyHouseStyle={handleBuyHouseStyle}
        onBuyBed={handleBuyBed}
        onBuyFrame={handleBuyFrame}
      />
    </div>
  );
}

export default App;