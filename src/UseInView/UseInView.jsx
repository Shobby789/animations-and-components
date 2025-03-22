import { useInView, motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";

const UseInView = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="bg-white w-full h-screen flex items-center justify-center">
        <AnimatedText direction="right" delay={0.5}>
          <h2 className="text-4xl font-semibold">UseInView Framer Motion</h2>
        </AnimatedText>
      </div>
      <div className="px-20 py-20 w-full bg-white border border-black">
        {[1, 2, 3, 4, 5, 6].map((__, i) => {
          const container = useRef(null);
          const containerIsInView = useInView(container, { once: false });
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false });
          const paragraphRef = useRef(null);
          const paragraphIsInView = useInView(paragraphRef, { once: false });

          const width = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);

          return (
            <motion.div
              ref={container}
              initial={{ width: "50%", margin: "10px auto" }}
              animate={containerIsInView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="w-full relative mb-5"
              key={i}
            >
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 0, width: "100%" }}
                animate={isInView ? { opacity: 1, x: 0, width: "50%" } : {}}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className={`h-[220px] bg-red-400 rounded-2xl absolute left-0`}
              ></motion.div>
              <div
                className={`w-full h-[220px] bg-red-600 rounded-2xl flex justify-end items-center p-20`}
              >
                <motion.p
                  ref={paragraphRef}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={paragraphIsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 3, delay: 0.25, ease: "easeOut" }}
                  className="w-[40%] text-center text-white text-lg"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet eligendi corporis perferendis commodi tempore voluptas
                  unde dignissimos facilis quisquam necessitatibus!
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="bg-white w-full h-screen flex items-center justify-center">
        <AnimatedText direction="right" delay={0.5}>
          <h2 className="text-4xl font-semibold">UseInView Framer Motion</h2>
        </AnimatedText>
      </div>
    </>
  );
};

export default UseInView;
