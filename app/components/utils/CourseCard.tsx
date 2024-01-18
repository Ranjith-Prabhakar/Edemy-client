"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import web_development from "../../../public/Assets/web_development.avif";

interface Course {
  name: string;
  url: string;
  thumbnail: string;
  trainer: string;
  duration: string;
}

type Props = {
  courseCategory: Array<{
    name: string;
    courses: Array<Course>;
  }>;
};

const CourseCard = ({ courseCategory }: Props): ReactNode => {
  return (
    <div className="flex justify-between gap-3 mt-9 w-full">
      {courseCategory.map((item, index) => (
        <div key={index} className="flex flex-col w-[200px]">
          <Image src={web_development} alt="" className="w-full h-[150px]" />
          <h4>{item.courses[0].name}</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus consectetur, delectus libero rerum voluptatibus eum
            saepe quasi! Reiciendis dolores placeat dolor eius tempore neque,
            quaerat, itaque dicta saepe, quod sit!
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
