import React from "react";
import { motion } from "framer-motion";

// const marqueeVariants = {
//   animate: {
//     x: [0, -1035],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 15,
//         ease: "linear",
//       },
//     },
//   },
// };

const marqueeVariants = {
  animate: {
    y: [0, -1035], // slide vertically instead of horizontally
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsReverse = {
  animate: {
    y: [-1035, 0], // slide vertically instead of horizontally
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const MobileAppPageHero = () => {
  return (
    <div className="w-full h-screen relative text-white flex bg-[#0f0f0f]/50">
      <div className="w-1/2 h-full pl-40 flex flex-col items-start justify-center gap-4">
        <h1 className="text-9xl font-semibold tracking-tight">
          We've Cracked the Code
        </h1>
      </div>
      <div className="w-1/2 h-full relative flex items-start justify-end overflow-hidden pr-0 2xl:pr-16 gap-2">
        <div className="h-full relative rotate-12 shadow-2xl">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
            return (
              <motion.div
                key={i}
                className="h-full flex flex-col items-center"
                variants={marqueeVariants}
                animate="animate"
              >
                <img
                  src="/mobile-mockup.png"
                  alt="mobile-mockup"
                  className="w-48 h-96 2xl:h-auto 2xl:w-60 object-contain"
                />
                <img
                  src="/mobile-mockup.png"
                  alt="mobile-mockup"
                  className="w-48 h-96 2xl:h-auto 2xl:w-60 object-contain"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="h-full relative rotate-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
            return (
              <motion.div
                key={i}
                className="h-full"
                variants={marqueeVariantsReverse}
                animate="animate"
              >
                <img
                  src="/mobile-mockup.png"
                  alt="mobile-mockup"
                  className="w-48 h-96 2xl:h-auto 2xl:w-60 object-contain"
                />
                <img
                  src="/mobile-mockup.png"
                  alt="mobile-mockup"
                  className="w-48 h-96 2xl:h-auto 2xl:w-60 object-contain"
                />
                <img
                  src="/mobile-mockup.png"
                  alt="mobile-mockup"
                  className="w-48 h-96 2xl:h-auto 2xl:w-60 object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileAppPageHero;
