import React from "react";

import { BsThreeDots } from "react-icons/bs";

const UserSection = () => {
  return (
    <div className="mt-10 ">
      <div className="w-full px-24 py-5 border-t border-l border-r md:w-[60rem] mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row space-y-5 md:space-y-0 md:space-x-24">
          <div>
            <img
              className="w-[150px] h-[150px]"
              src={process.env.PUBLIC_URL + "/imgs/Profile-Pic-S.svg"}
              alt=""
            />
          </div>

          <div className="flex flex-col md:items-start  items-center space-y-5">
            <div className="flex space-x-3 md:space-x-8 items-center ">
              <h1 className="text-2xl">Tyler The Creator</h1>
              <a className="px-10 py-3 font-semibold cursor-pointer rounded-md bg-[#0095F6] text-white">
                {" "}
                Follow
              </a>
              <BsThreeDots className="text-3xl cursor-pointer" />
            </div>
            <div className="flex space-x-20 items-center">
              <p>
                <span className="font-semibold"> 1.365</span> posts
              </p>
              <p>
                <span className="font-semibold"> 5M</span> followers
              </p>
              <p>
                <span className="font-semibold"> 1.697</span> following{" "}
              </p>
            </div>
            <div className="font-bold">Tyler The Creator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
