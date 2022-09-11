import React from "react";

const UsersPics = () => {
  return (
    <div className="mt-10">
      <div className="w-full px-24  md:w-[60rem] mx-auto">
        <div className=" flex items-center justify-center lg:justify-start space-x-10">
          <div className="flex font-semibold flex-col items-center justify-center space-y-3">
            <div>
              <img
                className="w-[77px]  h-[77px]"
                src={process.env.PUBLIC_URL + "/imgs/Avatar-Profile-Pic.png"}
                alt="user 1"
              />
            </div>
            <p>Made us</p>
          </div>

          <div className="flex font-semibold flex-col items-center justify-center space-y-3">
            <div>
              <img
                className="w-[77px]  h-[77px]"
                src={process.env.PUBLIC_URL + "/imgs/Avatar-Profile-Pic_1.png"}
                alt="user 2"
              />
            </div>
            <p>Could be us</p>
          </div>

          <div className="flex font-semibold flex-col items-center justify-center space-y-3">
            <div>
              <img
                className="w-[77px]  h-[77px]"
                src={process.env.PUBLIC_URL + "/imgs/Avatar-Profile-Pic_2.png"}
                alt="user 3"
              />
            </div>
            <p>Danzo</p>
          </div>
          <div className="flex font-semibold flex-col items-center justify-center space-y-3">
            <div>
              <img
                className="w-[77px]  h-[77px]"
                src={process.env.PUBLIC_URL + "/imgs/Avatar-Profile-Pic_3.png"}
                alt="user 4"
              />
            </div>
            <p>Suki</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPics;
