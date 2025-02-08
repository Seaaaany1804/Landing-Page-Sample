/* eslint-disable @next/next/no-img-element */
interface ClassData {
    title: string;
    grade: string;
    description: string;
    image: string;
  }
  
  interface ActiveClassProps {
    classes: ClassData[];
  }
  
  export default function ActiveClass({ classes }: ActiveClassProps) {
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
          {classes.map((classData, index) => (
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
  }
  