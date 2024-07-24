import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      'We have been delighted with the IT Artificer team. They have been a competent, knowledgeable and professional group of experts who have been able to show patience with our specific needs.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    name: 'Uzair Ahmad',
    position: 'Human Resource Manager @Uzair TPL Transport Company',
  },
  {
    id: 2,
    quote:
      'The team at IT Artificer exceeded our expectations with their prompt service and expertise.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    name: 'John Doe',
    position: 'CEO @Tech Solutions',
  },
  {
    id: 3,
    quote:
      'IT Artificer has provided us with reliable solutions that have greatly improved our workflow.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    name: 'Jane Smith',
    position: 'COO @Innovative Tech Inc.',
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto max-w-full py-8 bg-[#EDEDED]  ">
    <div className="max-w-4xl mx-auto py-8 px-4 bg-[#EDEDED]">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-none w-full text-center px-8 py-16"
            >
              <p className="text-gray-600 text-xl mb-4">{testimonial.quote}</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0c6793]">
                {testimonial.name}
              </h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
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
    </div>
  );
};

export default TestimonialCarousel;
