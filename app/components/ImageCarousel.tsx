/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from "react";

const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[60vh] mt-24 flex items-center justify-center overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`carousel-image-${currentIndex}`}
        className="object-cover w-full h-full transition-all duration-500"
      />
      <div className="absolute bottom-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-purple-600" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
