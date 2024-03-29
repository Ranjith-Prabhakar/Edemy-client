"use client";
import React from "react";
import AboutUs from "./AboutUs";
import OurBestCourses from "./OurBestCourses";
import WhyUs from "./WhyUs";
type Props = {};

const Hero = (props: Props) => {
 
  return (
    <div className="mt-[150px]">
      {/* <hr className="w-1/3 m-auto bg-[#FFD700]  my-10" /> */}
      <AboutUs />
      <OurBestCourses />
      <WhyUs />
    </div>
  );
};

export default Hero;
