"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CountryAnimation = () => {
  const containerRef = useRef(null);

  // Capture scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Trigger from start to end
  });

  // Expand the Green Container (Expanding to Left)
  const containerWidth = useTransform(scrollYProgress, [0, 1], [150, 900]);

  //   // Move flags to the left while maintaining a constant gap
  const flagMoveX = useTransform(
    containerWidth,
    (width) => 250 - (width - 150)
  ); // Adjust movement with width

  const flagRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={containerRef}
      className="h-[200vh] flex items-center justify-between w-full"
    >
      {/* Flags Container (Now Moves Left) */}
      <motion.div className="flex gap-4 border" style={{ x: flagMoveX }}>
        {[
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png",
          "https://e7.pngegg.com/pngimages/658/545/png-clipart-flag-of-india-indian-independence-movement-republic-day-india-flag-logo-thumbnail.png",
          "https://static.vecteezy.com/system/resources/previews/022/109/084/non_2x/america-flag-round-shape-free-png.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MEWupkpCk6Oz6qMT9SWwVG9g3yBF21mfFA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MEWupkpCk6Oz6qMT9SWwVG9g3yBF21mfFA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MEWupkpCk6Oz6qMT9SWwVG9g3yBF21mfFA&s",
        ].map((flag, index) => (
          <motion.img
            key={index}
            src={flag}
            alt="flag"
            className="w-32 h-32 rounded-full"
            style={{ rotate: flagRotate }}
          />
        ))}
      </motion.div>

      {/* Green Container (Expands Left, Stays on Right) */}
      <motion.div
        className="flex items-center justify-start bg-green-400 rounded-l-full p-2 h-32 border-2"
        style={{ width: containerWidth, transformOrigin: "right" }} // Expands left
      >
        {/* Arrow Icon */}
        <motion.div className="w-28 h-28 bg-green-900 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-7xl rotate-180 block">→</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CountryAnimation;
