import React from 'react';
import Image from 'next/image';

const SignUp = () => {
    return (
        <div className="flex items-center justify-center gap-40 h-screen mt-72">
            {/* Left Section */}
            <div className="relative flex flex-col items-center">
                {/* Photo 1 */}
                <div className="relative flex items-center px-8 w-64 h-[260px] rounded-[40px] bg-gradient-to-r from-[#1A0EA47D] to-[#1300EED4] text-white mr-96">
                    <span className='text-4xl font-semibold'>Photo 1</span>
                    <div className="absolute -bottom-10 -right-10">
                        <Image
                            className="rounded-full border border-white"
                            src="/images/Ellipse 1.png"
                            alt="User 1"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>

                {/* Photo 2 */}
                <div className="relative flex items-center px-8 w-56 h-60 rounded-[40px] text-[#000000] -mt-28 ml-72">
                    <img
                        src="/images/Rectangle 15.png"
                        alt="Background Image"
                        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
                    />
                    <span className="relative text-4xl font-semibold z-10">Photo 2</span>
                    <div className="absolute -bottom-10 -right-10 z-20">
                        <img
                            className="rounded-full border border-white"
                            src="/images/Ellipse 3.png"
                            alt="User 2"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>

                {/* Photo 3 */}
                <div className="relative flex items-center px-8 w-52 h-56 rounded-[40px] bg-gradient-to-r from-[#FA6F6F] to-[#A51D1D] text-white -mt-10 -ml-80">
                    <span className='text-4xl font-semibold'>Photo 3</span>
                    <div className="absolute -bottom-10 -right-10">
                        <img
                            className="rounded-full border border-white"
                            src="/images/Ellipse 2.png"
                            alt="User 3"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="max-w-lg space-y-12 mt-24">
                <p className="text-2xl leading-relaxed text-[#000000] font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.
                </p>
                <div className="flex justify-center">
                    <button className="px-8 py-3 font-semibold border-[3px] rounded-2xl border-[#4000FF] text-[#4000FF] hover:bg-[#4000FF] hover:text-white">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;