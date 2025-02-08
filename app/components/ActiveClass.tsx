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
    <div className="flex flex-col gap-4 w-full max-w-3xl xl:max-w-none mx-auto lg:mr-12">
      <div className="flex justify-between px-4 items-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#8B3A80]">Active Class</h2>
        <a href="#" className="text-[#8B3A80] hover:underline">View All</a>
      </div>
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
        {classes.map((classData, index) => (
          <div key={index} className="flex flex-row sm:flex-col lg:flex-row xl:flex-col xl:text-center bg-[#8B3A80] bg-opacity-10 p-6 xl:pb-[25%] rounded-lg shadow-md items-center text-left sm:text-center lg:text-left">
            <img src={classData.image} alt={`${classData.title} Image`} className="w-32 h-32 object-cover rounded-md mb-4 lg:mb-0 lg:mr-4 xl:mr-0" />
            <div className="flex flex-col ml-4 sm:ml-0">
              <h3 className="text-lg font-bold xl:mt-2">{classData.title}</h3>
              <p className="text-sm font-semibold xl:mt-2 text-[#8B3A80]">{classData.grade}</p>
              <p className="text-sm text-gray-700 mt-2">{classData.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
