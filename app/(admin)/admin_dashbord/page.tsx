import React from "react";
import { AiOutlineLayout } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
type Props = {};

const page = (props: Props) => {
  const dashBordItems = [
    { name: "Dashboard", icon: AiOutlineLayout },
    { name: "Users", icon: FaUsers },
    { name: "Trainers", icon: GiTeacher },
    { name: "Courses", icon: FaPhotoVideo },
    { name: "Payments", icon: FaMoneyCheckDollar },
    { name: "Accounts", icon: MdAccountBalance },
    { name: "Notifications", icon: IoIosNotifications },
    { name: "Chat", icon: IoIosChatbubbles },
    { name: "Event", icon: MdOutlineEventNote },
  ];
  return (
    <div className="flex">
      <div className="flex flex-col mt-7 h-[70vh] max-w-[20%] w-full m-auto rounded-lg  p-[25px]">
        {dashBordItems &&
          dashBordItems.map((item) => (
            <div className="flex justify-start items-center gap-2">
              <item.icon />
              <h1> {item.name}</h1>
            </div>
          ))}
      </div>

      <div className="mt-7 h-[70vh] max-w-[70%] w-full m-auto rounded-lg flex justify-start  p-[25px]"></div>
    </div>
  );
};

export default page;