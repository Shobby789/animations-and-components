import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const sections = [
  {
    id: 1,
    bgColor: "bg-red-700",
    text: "Parallax Section One",
    image:
      "https://plus.unsplash.com/premium_photo-1729937839806-3f4d132c854c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    bgColor: "bg-blue-700",
    text: "Parallax Section Two",
    image:
      "https://images.unsplash.com/photo-1740890226776-3984f860a92f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    bgColor: "bg-green-700",
    text: "Parallax Section Three",
    image:
      "https://images.unsplash.com/photo-1741032871371-5efc3347e89f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    bgColor: "bg-yellow-500",
    text: "Parallax Section Four",
    image:
      "https://images.unsplash.com/photo-1740918417127-100b62f7889d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    bgColor: "bg-purple-700",
    text: "Parallax Section Five",
    image:
      "https://images.unsplash.com/photo-1740978845296-ad92aa72c017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    bgColor: "bg-pink-500",
    text: "Parallax Section Six",
    image:
      "https://images.unsplash.com/photo-1740843202723-8330ce3340c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  },
  //   { id: 7, bgColor: "bg-gray-700", text: "Parallax Section Seven", image: "" },
  //   {
  //     id: 8,
  //     bgColor: "bg-indigo-600",
  //     text: "Parallax Section Eight",
  //     image: "",
  //   },
  //   { id: 9, bgColor: "bg-orange-600", text: "Parallax Section Nine", image: "" },
  //   { id: 10, bgColor: "bg-teal-600", text: "Parallax Section Ten", image: "" },
];

const ParallaxSections = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.stop();
  }, []);

  return (
    <main ref={containerRef} className="bg-black h-[600vh] relative">
      {sections.map(({ id, bgColor, text, image }) => (
        <ParallaxSection
          key={id}
          bgColor={bgColor}
          text={text}
          scrollYProgress={scrollYProgress}
          image={image}
        />
      ))}
    </main>
  );
};

export default ParallaxSections;

const ParallaxSection = ({ bgColor, text, scrollYProgress, image }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div
      style={{ scale }}
      className={`w-[80%] h-[90vh] sticky top-0 mx-auto flex flex-col items-center justify-center gap-5 text-white z-0 ${bgColor} mt-8`}
    >
      {/* <h2 className="text-4xl font-semibold">{text}</h2> */}
      <img src={image} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
};
