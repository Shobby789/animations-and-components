import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const UseInViewPractice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: false });
  return (
    <div className="bg-white w-full">
      <div className="w-full h-screen flex items-center justify-center relative">
        <h2>Use In View Practice</h2>
      </div>
      <div
        ref={ref}
        className="w-full flex items-center justify-center relative"
      >
        <motion.div
          initial={{ x: -200 }}
          animate={isInView ? { x: 0 } : { x: -200 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-40 h-40 bg-red-500"
        ></motion.div>
      </div>
    </div>
  );
};

export default UseInViewPractice;
