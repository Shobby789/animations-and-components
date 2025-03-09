import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Character = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.75", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="text-4xl font-semibold leading-[44px] px-60 flex flex-wrap"
    >
      {words?.map((word, i) => {
        const start = i / words.length;
        const end = start + i / words.length;
        // const start = i / words.length;
        // const end = Math.min(1, start + 1 / words.length);
        return (
          <SingleWord key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </SingleWord>
        );
      })}
    </p>
  );
};

export default Character;

const SingleWord = ({ children, range, progress }) => {
  const characters = children?.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mt-[12px] mr-[12px] relative">
      {characters.map((ch, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <SingleCharacter key={i} range={[start, end]} progress={progress}>
            {ch}
          </SingleCharacter>
        );
      })}
    </span>
  );
};

const SingleCharacter = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-10">{children}</span>
      <motion.span
        style={{
          opacity,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
