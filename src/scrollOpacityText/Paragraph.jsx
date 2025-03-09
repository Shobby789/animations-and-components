import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);
  return (
    <motion.p
      ref={element}
      className="text-4xl font-semibold leading-[44px] px-60"
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
};

export default Paragraph;
