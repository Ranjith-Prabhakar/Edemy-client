"use client";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import logo from "../../../public/Assets/Logo.png";
import ThemeToggler from "../utils/ThemeToggler";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center text-black dark:text-[#FFD700]">
        <div className="flex items-center  gap-4">
          <Link href={"/home"}>
            <Image
              src={logo}
              alt="Logo image"
              className="w-[100px] h-[100px]"
            />
          </Link>

          <Link href={"/categories"}>Categories</Link>

          <div className="flex flex-1 justify-end">
            <ThemeToggler />
          </div>
        </div>
        <div>
          <input
            className="rounded-full w-96 h-[46px] px-7 text-black outline-none placeholder:text-gray-500 dark:bg-gray-800 focus:border-1 darK:focus:border-[#FFD700]"
            type="search"
            placeholder="search...."
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href={"/be_instructor"}>Teach on Edemy</Link>
          <Link href={"/my_learnings"}>My Learnings</Link>
          <Link href={"/categories"}>
            <FaRegHeart size={25} />
          </Link>
          <Link href={"/be_instructor"}>
            <FaCartPlus size={25} />
          </Link>
          <Link href={"/be_instructor"}>
            <IoIosNotifications size={25} />
          </Link>
          <Link href={"/login"}>
            <CgProfile size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
