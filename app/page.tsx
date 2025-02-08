/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa6";
import Navbar from "./components/Navbar";

export default function Home() {
  // Dummy Data for Active Classes
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

  // Carousel Images
  const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Instructor Card
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
      <div className="flex items-center gap-x-4 pr-6 bg-white rounded-xl shadow-xl">
        {/* Image */}
        <img
          src={image}
          alt={`${name}'s photo`}
          className="w-30 h-30 object-cover rounded-tl-xl rounded-bl-xl bg-[#8B3A80] bg-opacity-20"
        />
        {/* Info */}
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-md font-semibold text-[#8B3A80]">{title}</p>
          <div className="flex items-center gap-x-1">{stars}</div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  };

  // Active Class Section
  const ActiveClass = ({ classes }: any) => {
    return (
      <div className="flex flex-col gap-4 mr-12">
        {/* Section Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#8B3A80]">Active Class</h2>
          <a href="#" className="text-[#8B3A80] hover:underline">
            View All
          </a>
        </div>

        {/* Active Class Cards */}
        <div className="grid grid-cols-3 gap-12">
          {classes.map((classData: any, index: number) => (
            <div
              key={index}
              className="bg-[#8B3A80] bg-opacity-20 pt-8 px-4 rounded-lg justify-start text-center items-center shadow-md h-[45vh] flex flex-col"
            >
              {/* Image */}
              <img
                src={classData.image}
                alt={`${classData.title} Image`}
                className="w-50 h-50 object-cover rounded-md mb-2"
              />
              {/* Class Info */}
              <h3 className="text-xl font-bold mt-2">{classData.title}</h3>
              <p className="text-lg mt-2 font-semibold text-[#8B3A80]">{classData.grade}</p>
              <p className="text-sm text-gray-700 mt-2">{classData.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Main Layout
  return (
    <>
    <Navbar/>

    <div className="bg-white min-h-screen">


      {/* Image Carousel */}
      <div className="relative w-full h-[60vh] mt-24 flex flex-col items-center justify-center overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
          className="object-cover w-full h-full transition-all duration-500"
        />
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

      {/* Main Content */}
      <div className="grid grid-cols-[40%_60%] h-[70vh] place-content-center gap-8 px-8 mt-8">
        {/* Instructors Section */}
        <div className="flex flex-col mx-24 gap-y-5">
          <div>
            <h2 className="text-2xl font-bold text-[#8B3A80]">Teachers</h2>
          </div>
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
        <ActiveClass classes={activeClasses} />
      </div>
    </div>
    </>
  );
}
