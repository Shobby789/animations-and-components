import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const images = [
  "https://img.freepik.com/free-photo/horse-eating-meadow_1161-70.jpg?uid=R94539380&ga=GA1.1.611147680.1728761530&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/herd-horses-grazing-pasture-beautiful-sky_181624-41307.jpg?uid=R94539380&ga=GA1.1.611147680.1728761530&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/horse-eating-meadow_1161-70.jpg?uid=R94539380&ga=GA1.1.611147680.1728761530&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/herd-horses-grazing-pasture-beautiful-sky_181624-41307.jpg?uid=R94539380&ga=GA1.1.611147680.1728761530&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/horse-eating-meadow_1161-70.jpg?uid=R94539380&ga=GA1.1.611147680.1728761530&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/herd-horses-grazing-pasture-beautiful-sky_181624-41307.jpg?uid=R94539380&ga=GA1.1.611147680.1728761530&semt=ais_hybrid",
];

const UseScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to width range
  const width = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);

  return (
    <div className="bg-gray-900 w-full text-white">
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl font-semibold">UseScroll Animation Starts</h1>
      </div>
      <div
        ref={targetRef}
        className="w-full relative border border-white flex justify-end gap-3 overflow-hidden"
      >
        <div className="w-[135px] h-[135px] rounded-full bg-green-500"></div>
        <div className="w-[135px] h-[135px] rounded-full bg-green-500"></div>
        {/* {images.map((image, i) => {
          return (
            <img
              src={image}
              key={i}
              alt=""
              className="w-[135px] h-[135px] rounded-full object-cover"
            />
          );
        })} */}
        <motion.div
          style={{
            width,
            transformOrigin: "right",
          }}
          className="h-[140px] rounded-l-full bg-red-500 flex items-center gap-4 px-1 overflow-hidden"
        >
          <div className="bg-white rounded-full h-[135px] w-[135px] shrink-0"></div>
          <h3 className="text-white text-4xl font-bold whitespace-nowrap">
            Our Global Presence
          </h3>
        </motion.div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl font-semibold">UseScroll Animation Ends</h1>
      </div>
    </div>
  );
};

export default UseScroll;
