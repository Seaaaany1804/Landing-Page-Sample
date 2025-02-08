/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from "react";

const images = [
  "/images/image1.jpg", // Correct paths
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh]  flex flex-col items-center justify-center overflow-hidden">
      {/* Carousel Image */}
      <img
        src={images[currentIndex]}
        alt={`carousel-image-${currentIndex}`}
        className="object-cover w-full h-full transition-all duration-500"
      />

      {/* Pagination Dots */}
      <div className="absolute bottom-4 flex justify-center items-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
