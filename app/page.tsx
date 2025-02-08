import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import InstructorCard from "./components/InstructorCard";
import ActiveClass from "./components/ActiveClass";

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

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        <ImageCarousel />
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] place-content-center gap-8 mb-20 px-4 md:px-8 mt-8">
          <div className="flex flex-col gap-y-5 mx-auto w-full max-w-md md:max-w-lg">
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
          <ActiveClass classes={activeClasses} />
        </div>
      </div>
    </>
  );
}
