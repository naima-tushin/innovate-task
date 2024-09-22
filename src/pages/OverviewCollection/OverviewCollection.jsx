'use client';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OverviewCollection = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [clickedIndex, setClickedIndex] = useState(0);
    const [largeBoxColor, setLargeBoxColor] = useState('#0FA958');
    const [selectedSmallBoxIndex, setSelectedSmallBoxIndex] = useState(3);

    const boxes = [
        { color: '#FF9A9A' },
        { color: '#CFAAFF' },
        { color: '#A0FCD9' },
        { color: '#B126DB' },
        { color: '#1F3B68' },
        { color: 'orange' }
    ];

    const handleNext = () => {
        if (visibleCount < boxes.length) {
            setVisibleCount(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (visibleCount > 3) {
            setVisibleCount(prev => prev - 1);
        }
    };

    const handleBoxClick = (index) => {
        setClickedIndex(index);
        setLargeBoxColor(boxes[index].color);
    };

    const handleSmallBoxClick = (index, color) => {
        setLargeBoxColor(color);
        setSelectedSmallBoxIndex(index);
    };

    return (
        <div className="mt-96">
            <div className="relative">
                <div className="absolute -top-52 left-0 right-0 z-10 overflow-hidden">
                    <div className={`flex justify-end gap-10 transition-transform duration-500 ease-in-out`}>
                        {boxes.slice(0, visibleCount).map((box, index) => (
                            <div
                                key={index}
                                onClick={() => handleBoxClick(index)}
                                className={`transition-all duration-500 ease-in-out transform cursor-pointer ${clickedIndex === index ? 'w-[350px] h-[400px]' : 'w-[250px] h-[300px]'
                                    }`}
                                style={{
                                    backgroundColor: box.color,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[800px] bg-gradient-to-b from-[#3C805D] to-[#6BE6A8] flex justify-center items-center"
                    style={{
                        clipPath: 'ellipse(70% 100% at 50% 0%)'
                    }}>
                    <section className="absolute left-28 bottom-[450px]">
                        <h2 className="text-5xl font-bold text-[#000000]">Overview</h2>
                        <p className="mt-4 w-[450px] text-xl text-[#000000]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </section>

                    <div className="absolute right-5 bottom-[500px] flex gap-16">
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 flex justify-center items-center rounded-full bg-black text-white"
                        >
                            <FaChevronRight />
                        </button>
                        {clickedIndex !== null && (
                            <button
                                onClick={handlePrev}
                                className="w-14 h-14 flex justify-center items-center rounded-full bg-black text-white"
                            >
                                <FaChevronLeft />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="relative w-[85%] mx-auto p-8">
                    <div className="absolute inset-x-0 top-0 h-40 bg-green-200 rounded-b-full -z-10"></div>
                    <div className="flex">
                        <div className="w-1/2 p-4 flex gap-4 -mt-72">
                            <div className="flex flex-col gap-4">
                                <div className="w-[410px] h-[410px] rounded-3xl transition-colors duration-500 ease-in-out"
                                    style={{
                                        backgroundColor: largeBoxColor,
                                    }}
                                ></div>
                                <div className="flex flex-row gap-8">
                                    <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 0 ? 'border-8 border-black' : ''}`}
                                        onClick={() => handleSmallBoxClick(0, '#2E4E3E')}
                                        style={{ backgroundColor: '#2E4E3E' }}
                                    ></div>
                                    <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 1 ? 'border-8 border-black' : ''}`}
                                        onClick={() => handleSmallBoxClick(1, '#26DBDB')}
                                        style={{ backgroundColor: '#26DBDB' }}
                                    ></div>
                                    <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 2 ? 'border-8 border-black' : ''}`}
                                        onClick={() => handleSmallBoxClick(2, '#B126DB')}
                                        style={{ backgroundColor: '#B126DB' }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[29px]">
                                <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 3 ? 'border-8 border-black' : ''}`}
                                    onClick={() => handleSmallBoxClick(3, '#0FA958')}
                                    style={{ backgroundColor: '#0FA958' }}
                                ></div>
                                <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 4 ? 'border-8 border-black' : ''}`}
                                    onClick={() => handleSmallBoxClick(4, '#BE92FB')}
                                    style={{ backgroundColor: '#BE92FB' }}
                                ></div>
                                <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 5 ? 'border-8 border-black' : ''}`}
                                    onClick={() => handleSmallBoxClick(5, '#FFACAC')}
                                    style={{ backgroundColor: '#FFACAC' }}
                                ></div>
                                <div className={`w-28 h-28 rounded-3xl cursor-pointer ${selectedSmallBoxIndex === 6 ? 'border-8 border-black' : ''}`}
                                    onClick={() => handleSmallBoxClick(6, '#DB4126')}
                                    style={{ backgroundColor: '#DB4126' }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-[40%] p-4 -mt-28 ml-24">
                            <h2 className="text-5xl font-bold mb-8">Collection Featured</h2>
                            <p className="text-[#000000] text-2xl font-medium mt-2">
                                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tet ut labore et dolore magna aliqrit in  vol uptate velit esse cillumsunt in culpa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewCollection;