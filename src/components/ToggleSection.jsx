import React from "react";
import { IoBook } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";

import { RiMapPinUserFill } from "react-icons/ri";

import { BsGrid3X3 } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";

const ToggleSection = () => {
  return (
    <div className="mt-10">
      <div className="w-full px-24  border-t  md:w-[60rem] mx-auto">
        <ul className="flex justify-center lg:justify-start  space-x-3 text-xl">
          <li className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-5  border-t-2 border-black">
            <BsGrid3X3 /> <span className="font-semibold">POSTS</span>
          </li>
          <li className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-5  text-gray-400">
            <IoBook /> <span className="font-semibold">GUIDES</span>
          </li>

          <li className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-5  text-gray-400">
            <BiMoviePlay /> <span className="font-semibold">REELS</span>
          </li>
          <li className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-5  text-gray-400">
            <AiOutlinePlayCircle />{" "}
            <span className="font-semibold">VIDEOS</span>
          </li>
          <li className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-5  text-gray-400">
            <RiMapPinUserFill /> <span className="font-semibold">TAGGED</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleSection;
