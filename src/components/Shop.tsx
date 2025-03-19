import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cat as CatIcon, Shirt, Home, Bed as BedIcon, Frame } from 'lucide-react';
import { Cat, Accessory, HouseStyle, Bed, Frame as FrameType } from '../types';

interface ShopProps {
  points: number;
  cats: Cat[];
  accessories: Accessory[];
  houseStyles: HouseStyle[];
  beds: Bed[];
  frames: FrameType[];
  onBuyCat: (cat: Cat) => void;
  onBuyAccessory: (accessory: Accessory) => void;
  onBuyHouseStyle: (style: HouseStyle) => void;
  onBuyBed: (bed: Bed) => void;
  onBuyFrame: (frame: FrameType) => void;
}

export const Shop: React.FC<ShopProps> = ({
  points,
  cats,
  accessories,
  houseStyles,
  beds,
  frames,
  onBuyCat,
  onBuyAccessory,
  onBuyHouseStyle,
  onBuyBed,
  onBuyFrame
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'cats' | 'accessories' | 'styles' | 'beds' | 'frames'>('cats');

  const tabs = [
    { id: 'cats', icon: CatIcon, label: 'Cats' },
    { id: 'accessories', icon: Shirt, label: 'Accessories' },
    { id: 'styles', icon: Home, label: 'Styles' },
    { id: 'beds', icon: BedIcon, label: 'Beds' },
    { id: 'frames', icon: Frame, label: 'Frames' }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full md:relative md:w-auto">
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : '60px' }}
        className="bg-white rounded-t-lg shadow-lg overflow-hidden"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        >
          <span className="text-xl font-fredoka">Shop ({points} points)</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <tab.icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {activeTab === 'cats' && (
                  <div className="grid grid-cols-1 gap-4">
                    {cats.filter(cat => !cat.unlocked).map(cat => (
                      <div key={cat.id} className="border rounded-lg p-4 flex items-center space-x-4">
                        <img src={cat.image} alt={cat.name} className="w-20 h-20 object-cover rounded-full" />
                        <div className="flex-1">
                          <h3 className="font-bold">{cat.name}</h3>
                          <p className="text-sm text-gray-600">{cat.description}</p>
                          <p className="text-sm text-purple-600">Multiplier: x{cat.multiplier}</p>
                        </div>
                        <button
                          onClick={() => onBuyCat(cat)}
                          disabled={points < cat.price}
                          className="px-4 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50"
                        >
                          {cat.price} pts
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'accessories' && (
                  <div className="grid grid-cols-2 gap-4">
                    {accessories.filter(acc => !acc.owned).map(accessory => (
                      <div key={accessory.id} className="border rounded-lg p-4 text-center">
                        <img src={accessory.image} alt={accessory.name} className="w-16 h-16 mx-auto mb-2 object-cover rounded-lg" />
                        <h3 className="font-bold">{accessory.name}</h3>
                        <p className="text-sm text-gray-600">{accessory.description}</p>
                        <button
                          onClick={() => onBuyAccessory(accessory)}
                          disabled={points < accessory.price}
                          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg w-full disabled:opacity-50"
                        >
                          {accessory.price} pts
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'styles' && (
                  <div className="grid grid-cols-2 gap-4">
                    {houseStyles.filter(style => !style.owned).map(style => (
                      <div key={style.id} className="border rounded-lg p-4">
                        <div 
                          className="w-full h-24 rounded-lg mb-2 bg-cover bg-center"
                          style={{ backgroundImage: `url(${style.backgroundImage})` }}
                        />
                        <h3 className="font-bold">{style.name}</h3>
                        <p className="text-sm text-gray-600">{style.description}</p>
                        <button
                          onClick={() => onBuyHouseStyle(style)}
                          disabled={points < style.price}
                          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg w-full disabled:opacity-50"
                        >
                          {style.price} pts
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'beds' && (
                  <div className="grid grid-cols-2 gap-4">
                    {beds.filter(bed => !bed.owned).map(bed => (
                      <div key={bed.id} className="border rounded-lg p-4">
                        <img src={bed.thumbnail} alt={bed.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                        <h3 className="font-bold">{bed.name}</h3>
                        <p className="text-sm text-gray-600">{bed.description}</p>
                        <button
                          onClick={() => onBuyBed(bed)}
                          disabled={points < bed.price}
                          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg w-full disabled:opacity-50"
                        >
                          {bed.price} pts
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'frames' && (
                  <div className="grid grid-cols-2 gap-4">
                    {frames.filter(frame => !frame.owned).map(frame => (
                      <div key={frame.id} className="border rounded-lg p-4">
                        <div className={`w-32 h-32 mx-auto mb-2 rounded-lg ${frame.className} overflow-hidden`}>
                          <img src={frame.thumbnail} alt={frame.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold">{frame.name}</h3>
                        <p className="text-sm text-gray-600">{frame.description}</p>
                        <button
                          onClick={() => onBuyFrame(frame)}
                          disabled={points < frame.price}
                          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg w-full disabled:opacity-50"
                        >
                          {frame.price} pts
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};