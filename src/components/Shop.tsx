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
        <div className="fixed left-4 top-4 z-50 w-80">
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : '40px' }}
                className="overflow-hidden rounded-lg border-4 border-[#4A2818] bg-[#2C1810] shadow-[4px_4px_0px_0px_#1a0f0a]"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-2 flex items-center justify-between bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-[#FFE4B5]"
                >
                    <span className="font-fredoka text-sm">Shop ({points} points)</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-2"
                        >
                            <div className="mb-2 flex space-x-1 overflow-x-auto pb-1">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors text-xs whitespace-nowrap border-2 ${activeTab === tab.id
                                            ? 'bg-[#8B4513] text-[#FFE4B5] border-[#A0522D]'
                                            : 'bg-[#3C1F14] text-[#DEB887] border-[#4A2818] hover:bg-[#4A2818]'
                                            }`}
                                    >
                                        <tab.icon size={12} />
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="scrollbar-thin scrollbar-thumb-[#8B4513] scrollbar-track-[#2C1810] max-h-[400px] overflow-y-auto">
                                {activeTab === 'cats' && (
                                    <div className="grid grid-cols-1 gap-2">
                                        {cats.filter(cat => !cat.unlocked).map(cat => (
                                            <div key={cat.id} className="flex items-center space-x-2 rounded border-2 border-[#4A2818] bg-[#3C1F14] p-2">
                                                <img src={cat.image} alt={cat.name} className="h-12 w-12 rounded-lg border-2 border-[#8B4513] object-cover" />
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-bold text-[#FFE4B5]">{cat.name}</h3>
                                                    <p className="text-xs text-[#DEB887]">{cat.description}</p>
                                                    <p className="text-xs text-[#FFA07A]">x{cat.multiplier}</p>
                                                </div>
                                                <button
                                                    onClick={() => onBuyCat(cat)}
                                                    disabled={points < cat.price}
                                                    className="rounded border-2 border-[#A0522D] bg-[#8B4513] px-2 py-1 text-xs text-[#FFE4B5] shadow-[2px_2px_0px_0px_#1a0f0a] transition-all active:shadow-none active:translate-y-[2px] active:translate-x-[2px] disabled:opacity-50"
                                                >
                                                    {cat.price}p
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'accessories' && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {accessories.filter(acc => !acc.owned).map(accessory => (
                                            <div key={accessory.id} className="rounded border-2 border-[#4A2818] bg-[#3C1F14] p-2 text-center">
                                                <img src={accessory.image} alt={accessory.name} className="mx-auto mb-1 h-10 w-10 rounded-lg border-2 border-[#8B4513] object-cover" />
                                                <h3 className="text-xs font-bold text-[#FFE4B5]">{accessory.name}</h3>
                                                <p className="line-clamp-1 text-xs text-[#DEB887]">{accessory.description}</p>
                                                <button
                                                    onClick={() => onBuyAccessory(accessory)}
                                                    disabled={points < accessory.price}
                                                    className="mt-1 w-full rounded border-2 border-[#A0522D] bg-[#8B4513] px-2 py-1 text-xs text-[#FFE4B5] shadow-[2px_2px_0px_0px_#1a0f0a] transition-all active:shadow-none active:translate-y-[2px] active:translate-x-[2px] disabled:opacity-50"
                                                >
                                                    {accessory.price}p
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'styles' && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {houseStyles.filter(style => !style.owned).map(style => (
                                            <div key={style.id} className="rounded border-2 border-[#4A2818] bg-[#3C1F14] p-2">
                                                <div
                                                    className="mb-1 h-16 w-full rounded border-2 border-[#8B4513] bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${style.backgroundImage})` }}
                                                />
                                                <h3 className="text-xs font-bold text-[#FFE4B5]">{style.name}</h3>
                                                <p className="line-clamp-1 text-xs text-[#DEB887]">{style.description}</p>
                                                <button
                                                    onClick={() => onBuyHouseStyle(style)}
                                                    disabled={points < style.price}
                                                    className="mt-1 w-full rounded border-2 border-[#A0522D] bg-[#8B4513] px-2 py-1 text-xs text-[#FFE4B5] shadow-[2px_2px_0px_0px_#1a0f0a] transition-all active:shadow-none active:translate-y-[2px] active:translate-x-[2px] disabled:opacity-50"
                                                >
                                                    {style.price}p
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'beds' && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {beds.filter(bed => !bed.owned).map(bed => (
                                            <div key={bed.id} className="rounded border-2 border-[#4A2818] bg-[#3C1F14] p-2">
                                                <img src={bed.thumbnail} alt={bed.name} className="mb-1 h-16 w-full rounded border-2 border-[#8B4513] object-cover" />
                                                <h3 className="text-xs font-bold text-[#FFE4B5]">{bed.name}</h3>
                                                <p className="line-clamp-1 text-xs text-[#DEB887]">{bed.description}</p>
                                                <button
                                                    onClick={() => onBuyBed(bed)}
                                                    disabled={points < bed.price}
                                                    className="mt-1 w-full rounded border-2 border-[#A0522D] bg-[#8B4513] px-2 py-1 text-xs text-[#FFE4B5] shadow-[2px_2px_0px_0px_#1a0f0a] transition-all active:shadow-none active:translate-y-[2px] active:translate-x-[2px] disabled:opacity-50"
                                                >
                                                    {bed.price}p
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'frames' && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {frames.filter(frame => !frame.owned).map(frame => (
                                            <div key={frame.id} className="rounded border-2 border-[#4A2818] bg-[#3C1F14] p-2">
                                                <div className={`w-16 h-16 mx-auto mb-1 rounded border-2 border-[#8B4513] overflow-hidden`}>
                                                    <img src={frame.thumbnail} alt={frame.name} className="h-full w-full object-cover" />
                                                </div>
                                                <h3 className="text-xs font-bold text-[#FFE4B5]">{frame.name}</h3>
                                                <p className="line-clamp-1 text-xs text-[#DEB887]">{frame.description}</p>
                                                <button
                                                    onClick={() => onBuyFrame(frame)}
                                                    disabled={points < frame.price}
                                                    className="mt-1 w-full rounded border-2 border-[#A0522D] bg-[#8B4513] px-2 py-1 text-xs text-[#FFE4B5] shadow-[2px_2px_0px_0px_#1a0f0a] transition-all active:shadow-none active:translate-y-[2px] active:translate-x-[2px] disabled:opacity-50"
                                                >
                                                    {frame.price}p
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