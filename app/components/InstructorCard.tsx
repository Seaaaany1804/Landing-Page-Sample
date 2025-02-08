/* eslint-disable @next/next/no-img-element */
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa6";

interface InstructorCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  rating: number; // Rating out of 5 (e.g., 4.5)
}

export default function InstructorCard({ name, title, description, image, rating }: InstructorCardProps) {
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
}
