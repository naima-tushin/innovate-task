"use client"
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-[#363636] text-white py-8 px-24 flex justify-between items-center">
            {/* Navigation Links */}
            <div className="space-x-32 text-lg flex items-center">
                <a href="#home" className="flex items-center space-x-3">
                    <span>Home</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#event" className="flex items-center space-x-2">
                    <span>Event</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#contact" className="flex items-center space-x-2">
                    <span>Contact</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#blog" className="flex items-center space-x-2">
                    <span>Blog</span>
                    <FaChevronDown className="text-xs" />
                </a>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full w-[298px]">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-[#000000] placeholder-gray-300 py-2 px-4 text-xl"
                />
                <FaSearch className="text-black text-2xl" />
            </div>
        </nav>
    );
};

export default Navbar;