import React from 'react';

const cardData = [
    {
        id: 1,
        title: 'Art stuff',
        price: '598 TK',
        image: 'bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]',
        available: true,
        participants: [
            '/images/Ellipse 9.png', // Image stored in the public folder
            '/images/Ellipse 12.png',     // Replace with actual image path
            '/images/user3.png',     // Replace with actual image path
            '/images/user4.png'      // Replace with actual image path
        ],
    },
    {
        id: 2,
        title: 'ABCD',
        price: '777 TK',
        image: 'bg-gradient-to-r from-[#0FA958] to-[#94FFE6]',
        available: true,
        participants: ['user1', 'user2'],
    },
    {
        id: 3,
        title: 'EFGH',
        price: '58 TK',
        image: 'bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]',
        available: true,
        participants: ['user1'],
    },
    {
        id: 4,
        title: 'XYZ',
        price: '0 TK',
        image: 'bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]',
        available: false,
        participants: ['user1', 'user2', 'user3'],
    },
    {
        id: 5,
        title: 'Art stuff',
        price: '598 TK',
        image: 'bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]',
        available: true,
        participants: ['user1', 'user2', 'user3'], // Replace with actual image URLs or icons if needed
    },
    {
        id: 6,
        title: 'ABCD',
        price: '777 TK',
        image: 'bg-gradient-to-r from-[#0FA958] to-[#94FFE6]',
        available: true,
        participants: ['user1', 'user2'],
    },
    {
        id: 7,
        title: 'EFGH',
        price: '58 TK',
        image: 'bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]',
        available: true,
        participants: ['user1'],
    },
    {
        id: 8,
        title: 'XYZ',
        price: '0 TK',
        image: 'bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]',
        available: false,
        participants: ['user1', 'user2', 'user3'],
    },
];

const Discover = () => {
    return (
        <div className="p-8 mt-20 w-[85%] mx-auto">
            {/* Heading */}
            <h1 className="text-3xl font-black mb-6">DISCOVER MORE</h1>

            {/* Categories Filters */}
            <div className="flex justify-between mb-8">
                <div className='space-x-4'>
                    <button className="px-4 py-2 bg-[#3F05D4] text-white rounded-full">All Categories</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] rounded-full">Art</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] rounded-full">Celebrities</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] rounded-full">Gaming</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] rounded-full">Sport</button>
                    <button className="px-4 py-2 bg-[#E9E9E9] rounded-full">Music</button>
                </div>
                <div>
                    <button className="flex items-center px-4 py-2 bg-[#E9E9E9] text-[#4000FF] rounded-full">
                        <img src="/images/ion_filter.png" alt="" className="mr-2" />
                        All Filters
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 w-[290px] h-[405px] overflow-hidden p-4"
                    >
                        {/* Card Image */}
                        <div className={`${card.image} h-[215px] rounded-2xl`}></div>

                        {/* Card Content */}
                        <div className="p-4">
                            {/* Participants */}
                            <div className="flex -space-x-3 -mt-8 mb-2">
                                {card.participants.map((participant, index) => (
                                    <div key={index} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                                ))}
                            </div>

                            {/* Title and Price */}
                            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                            <p className="text-gray-500 mb-4">{card.price}</p>

                            {/* Buttons */}
                            <div className="flex space-x-4">
                                <button className={`px-4 py-2 rounded-full ${card.available ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                                    DSVBD
                                </button>
                                <button className={`px-4 py-2 rounded-full ${!card.available ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                                    DSVBD
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discover;