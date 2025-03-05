import React from "react";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="w-full h-[200vh] bg-gray-200 relative">
      <div className="w-16 h-auto py-10 rounded-full bg-black fixed right-4 top-28 flex flex-col items-center justify-center gap-10">
        <span>
          <AiFillHome className="text-2xl text-white" />
        </span>
        <span>
          <AiFillHome className="text-2xl text-white" />
        </span>
        <span>
          <AiFillHome className="text-2xl text-white" />
        </span>
        <span>
          <AiFillHome className="text-2xl text-white" />
        </span>
        <span>
          <AiFillHome className="text-2xl text-white" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
