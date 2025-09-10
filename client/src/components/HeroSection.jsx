import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jojo_logo from "../assets/jojo_logo.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("assets/bgtest1.jpg")] bg-cover bg-center h-screen'>
      <img
        src={jojo_logo}
        alt="JojoLogo"
        className="max-h-30 lg:h-30 mt-20"
      />


      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Satire | Drama</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2019
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 1h 48m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        A young German boy in the Hitler Youth, whose hero and imaginary friend is the country's dictator, 
        is shocked to discover that his mother is hiding a Jewish girl in their home.
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Book Tickets
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
