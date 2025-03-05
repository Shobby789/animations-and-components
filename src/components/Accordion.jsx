import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="2xl:text-9xl">Accordion</h1>

      <div className="w-1/2 border cursor-pointer" onClick={handleOpen}>
        <div className="w-full p-6 border-2 border-black bg-white z-10">
          <span className="text-xl font-medium">
            What is difference between React JS and Next JS?
          </span>
        </div>
        <div
          className={`px-6 py-3 ${
            open ? "block" : "hidden"
          } bg-white z-0 border-2 border-t-0 border-black transition-all duration-500`}
        >
          <span className="text-lg font-normal">
            What is difference between React JS and Next JS?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
