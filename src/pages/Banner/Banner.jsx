import React from 'react';

const Banner = () => {
    return (
        <div className="relative">
            {/* Banner */}
            <div
                className="bg-[#363636] border-t border-t-[#191A23] h-[258px] flex justify-center items-center"
                style={{
                    clipPath: 'ellipse(55% 100% at 50% 0%)'
                }}
            >
            </div>

            {/* Boxes */}
            <div className="absolute flex justify-center items-center space-x-10 hover:space-x-14 top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                {/* Box 1 */}
                <div className="box bg-[#C02424] h-[300px] w-[300px] flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-125 group-hover:translate-x-10"></div>
                {/* Box 2 */}
                <div className="box bg-[#146FE8] h-[260px] w-[260px] flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-125 group-hover:translate-x-10"></div>
                {/* Box 3 */}
                <div className="box bg-[#E76666] h-[300px] w-[300px] flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-125 group-hover:translate-x-10"></div>
                {/* Box 4 */}
                <div className="box bg-[#A0FCD9] h-[260px] w-[260px] flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-125 group-hover:translate-x-10"></div>
            </div>
        </div>
    );
};

export default Banner;