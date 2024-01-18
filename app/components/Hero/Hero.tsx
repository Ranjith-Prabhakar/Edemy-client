"use client";
import React from "react";
import CourseCard from "../utils/CourseCard";
import { courseCategory } from "../static data/courseCategory";

type Props = {};

const Hero = (props: Props) => {
  const categories = [
    "All",
    "Web Development",
    "Ui & Ux course",
    "Mechine Learning",
    "Artificial Intelligence",
    "Digital Marketing",
  ];
  return (
    <div>
      <hr className="w-1/3 m-auto bg-[#FFD700]  my-10" />
      <div className="mt-7  max-w-[90%] w-full m-auto rounded-lg flex justify-start  p-[25px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl font-semibold">
            Find the <span className="text-[#FFD700]"> best course </span>
            for your needs
          </h1>
          <div className="flex gap-9 mt-10">
            {categories.map((item) => (
              <h3 className="hover:underline-offset-4 underline-yellow">
                {item}
              </h3>
            ))}
          </div>
          <div className="w-[90%] m-auto">
            <CourseCard courseCategory={courseCategory} />
            <div className="text-center mt-6">
              <button className="bg-transparent border  border-[#FFD700] px-3 py-1 rounded">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
