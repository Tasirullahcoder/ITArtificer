import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';

const partners = [
  {
    id: 1,
    image: "https://itartificer.com/wp-content/uploads/2021/09/taleemalquranlogooo.png", // Replace with actual image URL
    name: 'Tasleem Al Quran',
  },
  {
    id: 2,
    image: "https://itartificer.com/wp-content/uploads/2017/11/ita-academia-fit-1.png", // Replace with actual image URL
    name: 'ITA Academia',
  },
  {
    id: 3,
    image: "https://itartificer.com/wp-content/uploads/2017/11/kaliwal-fit-copy.png", // Replace with actual image URL
    name: 'Kalewa',
  },
  {
    id: 4,
    image: "https://itartificer.com/wp-content/uploads/2017/11/shopme-online-fit.png", // Replace with actual image URL
    name: 'ShopMe Online',
  },
  {
    id: 5,
    image:  "https://itartificer.com/wp-content/uploads/2017/11/mozbytech-fit-new.png", // Replace with actual image URL
    name: 'Mozby Tech',
  },
  {
    id: 6,
    image:  "https://itartificer.com/wp-content/uploads/2017/11/writepure-fit-2.png", // Replace with actual image URL
    name: 'write pure',
  },
  // Add more partners as needed
];

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Some Of Our Partners</h2>
      <div className="flex justify-center mb-2">
        <FaUsers className="text-[#0c6793] text-3xl" />
      </div>
      <p className="text-gray-600 mb-8">Our Valuable Partners</p>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex-none w-full sm:w-1/6 px-4"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="mx-auto mb-4"
              />
              
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-[#0c6793]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
