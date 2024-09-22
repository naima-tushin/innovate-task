import React from 'react';
import Image from 'next/image';

const Explore = () => {
    return (
        <div className="mt-40">
            <div className="container mx-auto w-[85%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* Left Section */}
                    <div className='max-w-xl'>
                        <p className="text-[#000000] text-2xl font-medium mb-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex justify-center">
                            <button className="px-8 py-4 border-[3px] border-[#2D0399] text-[#2D0399] font-semibold rounded-2xl hover:bg-[#2D0399] hover:text-white transition duration-300">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative -mt-96">
                        {/* First Card */}
                        <div className="absolute top-0 right-0 h-[315px] w-[315px] bg-[#31096A] rounded-2xl transform -translate-x-5 translate-y-9"></div>

                        {/* Second Card */}
                        <div className="absolute top-0 right-0 h-[360px] w-[360px] bg-[#980FA7] rounded-2xl transform -translate-x-12 translate-y-4"></div>

                        {/* Third Card */}
                        <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-[#1F3B68] rounded-2xl px-12 py-6 flex flex-col justify-between transform -translate-x-20 -translate-y-1 z-10">
                            <div>
                                <h2 className="text-white text-4xl font-bold mb-4 italic">Lorem ipsum</h2>
                                <div className="flex items-center mb-4">
                                    <Image
                                        src="/images/Ellipse 12.png"
                                        alt="Wade Warren"
                                        width={22}
                                        height={22}
                                        className="rounded-full"
                                    />
                                    <span className="text-white ml-3 font-medium">Wade Warren</span>
                                </div>
                            </div>
                            <div className="bg-[#FFFFFF3D] py-2 px-4 rounded-lg border-[#FFF] border">
                                <p className="text-white text-xl font-medium leading-10">Lawrance Stroll</p>
                                <p className="text-white text-sm font-medium">Hegifueshho dhfsui foiehhsio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;