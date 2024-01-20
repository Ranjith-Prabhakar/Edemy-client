"use client";
import Image from "next/image";
import React from "react";
import carousal from "../../../public/Assets/carousal.png";
type Props = {};

const Carousal = (props: Props) => {
  return (
    <div className="mt-7 h-[70vh] max-w-[90%] w-full m-auto rounded-lg flex justify-between  p-[25px]">
      <div className="flex flex-col  text-start w-3/5 ">
        <h1 className="font-semibold text-5xl   leading-[60px] ">
          Find The Best Courses
          <br /> To Grow Your <span className="text-[#FFD700]">Skills</span>
        </h1>
        <p className="leading-6 mt-4 font-light w-[70%]">
          Discover a world of learning with our online courses! Our expert
          tutors are here to guide you as you unlock your potential and grow
          your skills. Learn anytime, anywhere, with interactive lessons and a
          flexible approach. Stay ahead with up-to-date content
        </p>
        <div className="mt-4">
          <button className="bg-[#FFD700] px-2 py-1 rounded text-black  font-bold">
            Get started
          </button>

          <div className="flex gap-4 mt-7">
            <div className="flex flex-col">
              <h1 className="font-semibold text-4xl text-[#FFD700]">100+</h1>
              <h4>Expert Instructors</h4>
            </div>

            <div className="flex flex-col">
              <h1 className="font-semibold text-4xl text-[#FFD700]">150+</h1>
              <h4>Total Courses</h4>
            </div>

            <div className="flex flex-col">
              <h1 className="font-semibold text-4xl text-[#FFD700]">50K+</h1>
              <h4>Happy Students</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 ">
        <Image
          src={carousal}
          className="w-full h-[80vh]"
          
          alt="carousal image"
        />
      </div>
    </div>
  );
};

export default Carousal;
