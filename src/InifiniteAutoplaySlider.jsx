import React, { useState, useEffect, useRef } from "react";

const InfiniteSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const handleTransition = () => {
    const slidesLength = slides.length;
    setCurrentSlide((currentSlide + 1) % (slidesLength * 2));
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    const intervalId = setInterval(handleTransition, 3000);

    return () => clearInterval(intervalId);
  }, [slides]);

  const handleUserSlide = (direction) => {
    if (direction === "next") {
      setCurrentSlide((currentSlide + 1) % (slides.length * 2));
    } else if (direction === "prev") {
      setCurrentSlide(
        (currentSlide - 1 + slides.length * 2) % (slides.length * 2)
      );
    }
  };

  // Render slides with infinite effect (duplicate slides)
  const renderedSlides = slides.concat(slides);

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`, // Adjust width based on your slide content
  };

  return (
    <div className="slider-container">
      <div ref={slideRef} className="slider-track" style={slideStyle}>
        {renderedSlides.map((slide, index) => (
          <div key={index} className="slide">
            {slide} {/* Replace with your slide content */}
          </div>
        ))}
      </div>
      {/* Add buttons for user interaction (optional) */}
      <button onClick={() => handleUserSlide("prev")}>Prev</button>
      <button onClick={() => handleUserSlide("next")}>Next</button>
    </div>
  );
};

export default InfiniteSlider;
