"use client";
import React from "react";
import CourseCard from "./CourseCard";
import { courseCategory } from "./static data/courseCategory";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <hr className="w-1/3 m-auto bg-[#FFD700]  my-10" />
      <div className="mt-7 h-[70vh] max-w-[90%] w-full m-auto rounded-lg flex justify-start  p-[25px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl font-semibold">
            Find the <span className="text-[#FFD700]"> best course </span>
            for your needs
          </h1>
          <div className="flex gap-9 mt-10">
            <h3 className="hover:underline-offset-4 underline-yellow">All</h3>
            <h3 className="hover:underline-offset-4 underline-yellow">
              Web Development
            </h3>
            <h3 className="hover:underline-offset-4 underline-yellow">
              Ui & Ux course
            </h3>
            <h3 className="hover:underline-offset-4 underline-yellow">
              Mechine Learning
            </h3>
            <h3 className="hover:underline-offset-4 underline-yellow">
              Artificial Intelligence
            </h3>
            <h3 className="hover:underline-offset-4 underline-yellow">
              Digital Marketing
            </h3>
          </div>
          <div>
            <CourseCard courseCategory={courseCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
