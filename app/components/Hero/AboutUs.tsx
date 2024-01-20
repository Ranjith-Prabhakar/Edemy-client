import React from "react";
import Aboutus from "../../../public/Assets/AboutUs.jpg";
import Image from "next/image";
type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="mt-7  max-w-[90%] w-full m-auto rounded-lg flex justify-between gap-5  p-[25px]">
      <div className="w-[40%] rounded-xl overflow-hidden">
        <Image src={Aboutus} className="w-full" alt="about us"></Image>
      </div>
      <div className="w-[50%]">
        <h1 className="underline underline-offset-8 text-[#FFD700] font-bold text-4xl">
          About us
        </h1>
        <p className="mt-3 leading-7">
          Welcome to our e-learning platform, where knowledge meets convenience.
          Explore a diverse range of courses tailored to your interests and
          goals. Engage in interactive lessons, connect with expert instructors,
          and embark on a personalized learning journey. Elevate your skills,
          anytime, anywhere – because education knows no boundaries. Join us and
          thrive!
        </p>
      </div>
    </div>
  );
};
export default AboutUs;