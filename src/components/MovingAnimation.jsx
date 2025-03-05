import React from "react";

const MovingAnimation = () => {
  return (
    <div className="w-full h-screen relative bg-gray-200">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[190px] font-extrabold w-full text-center text-gray-100 leading-tight tracking-tight">
        Shoaib Muhammad
      </h1>

      <div className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-1/2 h-1/2 border border-black rounded-full">
        <img
          src="/rocket-removebg-preview.png"
          alt="Rocket"
          className="w-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 floating-rocket"
        />
      </div>
    </div>
  );
};

export default MovingAnimation;
