/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import InstructorCard from "./components/InstructorCard";
import ActiveClass from "./components/ActiveClass";

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

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <ImageCarousel />
      <div className="grid grid-cols-[40%_60%] h-[70vh] place-content-center gap-8 px-8">
        {/* Instructors Section */}
        <div className="flex flex-col mx-24 gap-y-5">
          {/* Label for Teachers */}
          <div>
            <h2 className="text-2xl font-bold text-[#8B3A80]">Teachers</h2>
          </div>

          {/* Reusable Instructor Cards */}
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
  );
}
