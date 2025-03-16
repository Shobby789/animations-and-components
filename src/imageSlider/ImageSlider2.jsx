// components/Gallery.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import "./ImageSlider2.css"; // Or use module CSS if preferred

const ImageSlider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

  const totalItems = images.length;

  // Update classes for positioning
  const getItemClass = (index) => {
    const position = ((index - currentIndex + totalItems) % totalItems) + 1;
    return `gallery-item gallery-item-${position}`;
  };

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Change interval if needed

    const gallery = galleryRef.current;

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      clearInterval(interval);
      // Restart autoplay on mouse leave
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 3000);
    };

    gallery.addEventListener("mouseenter", handleMouseEnter);
    gallery.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      gallery.removeEventListener("mouseenter", handleMouseEnter);
      gallery.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentIndex, totalItems]);

  return (
    <main>
      <div className="gallery">
        <div className="gallery-container" ref={galleryRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className={getItemClass(index)}
              data-index={index + 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImageSlider2;
