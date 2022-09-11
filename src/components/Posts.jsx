import React from "react";

const Posts = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-4 gap-x-5 lg:gap-x-10  md:w-[60rem] mx-auto">
        <div>
          <img
            className=" w-[293px] h-[293px]"
            src={process.env.PUBLIC_URL + "/imgs/Small-Post.svg"}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[293px] h-[293px]"
            src={process.env.PUBLIC_URL + "/imgs/Small-Post11.svg"}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[293px] h-[293px]"
            src={process.env.PUBLIC_URL + "/imgs/Small-Post2.svg"}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[293px] h-[293px]"
            src={process.env.PUBLIC_URL + "/imgs/Small-Post3.svg"}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[293px] h-[293px]"
            src={process.env.PUBLIC_URL + "/imgs/Small-Post4.svg"}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[293px] h-[293px]"
            src={process.env.PUBLIC_URL + "/imgs/Small-Post5.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
