import React, { useEffect, useState, useRef } from "react";

// Slide data with reliable placeholder image URLs
const slides = [
  {
    image: "/assets/shopping.jpg",
    title: <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-violet-200 to-indigo-600 bg-clip-text text-transparent">
  Welcome to KINAU SHOP
</h1>,
subtitle: "Where Quality Matters...",
 
  },
  {
    image: "/assets/shopper.jpg",
    title: <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
  Premium Quality Products
</h1>,
    subtitle: "Discover the best deals and exclusive offers",

  },
  {
    image: "/assets/imageone.jpg",
    title: <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
  Fast and Reliable Delivery
</h1>,
    subtitle: "Right to your doorstep, lightning fast!",

  },
];

// Typewriter effect component
function Typewriter({ text, speed = 100 }) {
  const [displayed, setDisplayed] = useState("");

  

  return (
    <span>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-white animate-pulse ml-1" />
    </span>
  );
}

// Main Slider Component
export default function SimpleSlider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    else if (index >= slides.length) index = 0;
    setCurrent(index);
  };

  // Auto-play slides every 5 seconds
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/1200x800?text=Slide+${index + 1}`;
            }}
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center px-4 md:px-10">
            <div className="text-white max-w-xl  bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.hasTypewriter ? (
                  <Typewriter text={slide.title} speed={100} />
                ) : (
                  slide.title
                )}
              </h1>
              <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>
              <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Prev/Next Buttons */}
      <button
        onClick={() => goToSlide(current - 1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3  hover:bg-opacity-80 transition-all z-20"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={() => goToSlide(current + 1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 hover:bg-opacity-80 transition-all z-20"
        aria-label="Next slide"
      >
        &#8594;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}