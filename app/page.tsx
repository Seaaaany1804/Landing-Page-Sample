/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa6";
import Navbar from "./components/Navbar";

export default function Home() {
  const activeClasses = [
    {
      title: "Computer Programming 1",
      grade: "Grade 12",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy specimen book...",
      image: "/images/programming.png",
    },
    {
      title: "Advanced Mathematics",
      grade: "Grade 11",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy specimen book...",
      image: "/images/programming.png",
    },
    {
      title: "Physics for Engineers",
      grade: "Grade 12",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy specimen book...",
      image: "/images/programming.png",
    },
  ];

  const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const InstructorCard = ({ name, title, description, image, rating }: any) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) {
        return <FaStar key={index} className="text-yellow-500" />;
      } else if (rating > index && rating < index + 1) {
        return <FaRegStarHalf key={index} className="text-yellow-500" />;
      } else {
        return <FaRegStar key={index} className="text-gray-400" />;
      }
    });

    return (
      <div className="flex items-center gap-x-4 p-4 bg-white rounded-xl shadow-xl w-full sm:w-[90%]">
        <img src={image} alt={`${name}'s photo`} className="w-24 h-24 object-cover rounded-full" />
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm font-semibold text-[#8B3A80]">{title}</p>
          <div className="flex items-center gap-x-1">{stars}</div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Image Carousel */}
        <div className="relative w-full h-[50vh] md:h-[60vh] mt-24 flex items-center justify-center overflow-hidden">
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] place-content-center gap-8 px-4 md:px-8 mt-8">
          {/* Instructors Section */}
          <div className="flex flex-col gap-y-5 mx-auto w-full max-w-md md:max-w-lg lg:mx-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#8B3A80]">Teachers</h2>
            <InstructorCard
              name="Tito Mikee Reyes"
              title="ICT Instructor"
              description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy specimen book."
              image="/images/instructor.png"
              rating={4.5}
            />
            <InstructorCard
              name="John Doe"
              title="Math Instructor"
              description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy specimen book."
              image="/images/instructor.png"
              rating={4.0}
            />
          </div>

          {/* Active Class Section */}
          <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto lg:mr-12">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold text-[#8B3A80]">Active Class</h2>
              <a href="#" className="text-[#8B3A80] hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {activeClasses.map((classData, index) => (
                <div key={index} className="bg-[#8B3A80] bg-opacity-20 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <img src={classData.image} alt={`${classData.title} Image`} className="w-32 h-32 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-bold">{classData.title}</h3>
                  <p className="text-sm font-semibold text-[#8B3A80]">{classData.grade}</p>
                  <p className="text-sm text-gray-700 mt-2">{classData.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}