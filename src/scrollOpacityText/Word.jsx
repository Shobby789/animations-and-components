import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Word = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="text-4xl font-semibold leading-[44px] px-60 flex flex-wrap"
    >
      {words?.map((word, i) => {
        // const start = i / words.length;
        // const end = start + i / words.length;
        const start = i / words.length; // Spread the start evenly
        const end = (i + 1) / words.length; // Ensure each word has enough range
        return (
          <SingleWord key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </SingleWord>
        );
      })}
    </p>
  );
};

export default Word;

const SingleWord = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mt-[12px] mr-[12px] relative">
      <span className="opacity-10 absolute">{children}</span>
      <motion.span
        style={{
          opacity: opacity,
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
