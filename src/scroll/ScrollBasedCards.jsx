import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "Solutions 1",
    bg: "#4287f5",
  },
  {
    title: "Solutions 2",
    bg: "#d63351",
  },
  {
    title: "Solutions 3",
    bg: "#ab33d6",
  },
  {
    title: "Solutions 4",
    bg: "#d6a533",
  },
  {
    title: "Solutions 5",
    bg: "#33d641",
  },
];

const ScrollBasedCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <>
      <div className="w-full h-screen"></div>
      <div 
        ref={containerRef}
        className="w-full min-h-screen bg-white text-black p-40"
      >
        <div className="flex gap-10">
          {cards?.map((c, i) => {
            const targetScale = useTransform(
              scrollYProgress,
              [i * 0.15, 0.3 + i * 0.15, 0.7 + i * 0.15, 1],
              [0.7, 1, 1, 0.7]
            );

            const targetX = useTransform(
              scrollYProgress,
              [i * 0.15, 0.3 + i * 0.15, 0.7 + i * 0.15, 1],
              [600, 0, 0, -600]
            );

            const opacity = useTransform(
              scrollYProgress,
              [i * 0.15, 0.2 + i * 0.15, 0.8 + i * 0.15, 1],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={i}
                style={{
                  translateX: targetX,
                  scale: targetScale,
                  // opacity
                }}
                className="w-[400px] h-[500px]"
              >
                <div
                  className="w-[400px] h-full rounded-2xl flex flex-col items-center justify-center gap-5 p-10"
                  style={{ background: c?.bg }}
                >
                  <h2 className="text-4xl font-semibold text-white">{c?.title}</h2>
                  <p className="text-white text-base font-medium">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto alias velit reprehenderit consectetur iure vero
                    laudantium maxime dolore nulla natus nobis dignissimos corporis
                    sit, quam quis exercitationem necessitatibus odio. Cupiditate hic
                    voluptatum neque est nihil?
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-screen"></div>
    </>
  );
};

export default ScrollBasedCards;
