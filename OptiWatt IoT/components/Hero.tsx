import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    backgroundImageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2098&auto=format&fit=crop',
    title: {
      highlight: "Real-Time Monitoring",
      rest: "for Unmatched Energy Insight"
    },
    description: "Track your energy usage with second-by-second accuracy and make informed decisions instantly."
  },
  {
    backgroundImageUrl: 'https://news.blr.com/app/uploads/sites/3/2021/03/AIhiring-5.jpg',
    title: {
      highlight: "Intelligent Cost Savings",
      rest: "on Your Utility Bills"
    },
    description: "Lower your expenses through intelligent energy optimization and predictive analytics."
  },
  {
    backgroundImageUrl: 'https://cdn.craft.cloud/7afb4613-485e-4c7c-a2fa-5b9b6a02c869/assets/cloud-automation.webp',
    title: {
      highlight: "Automated Control",
      rest: "for Peak Efficiency"
    },
    description: "Let our system automatically adjust settings, ensuring optimal performance without manual intervention."
  },
  {
    backgroundImageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
    title: {
      highlight: "Eco-Friendly Solutions",
      rest: "for a Greener Planet"
    },
    description: "Reduce your carbon footprint and contribute to a more sustainable future with our smart technology."
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Auto-slide every 7 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  return (
    <section id="home" className="relative h-[85vh] overflow-hidden text-white">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            aria-hidden={index !== currentIndex}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url(${slide.backgroundImageUrl})`,
                transform: index === currentIndex ? 'scale(1)' : 'scale(1.1)' 
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight [text-shadow:0_3px_6px_rgba(0,0,0,0.6)]">
                <span className="text-blue-400">{slide.title.highlight}</span> {slide.title.rest}
              </h1>
              <p className="text-base md:text-lg text-slate-200 max-w-3xl mx-auto mb-8 [text-shadow:0_2px_5px_rgba(0,0,0,0.7)]">
                {slide.description}
              </p>
              <a href="#/about" onClick={(e) => handleNav(e, '#/about')} className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-blue-600/30">
                Discover How
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button onClick={prevSlide} className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors focus:outline-none" aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors focus:outline-none" aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
};

export default Hero;