import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function AnimatedText({
  children,
  direction = "up",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Set animation direction
  const variants = {
    hidden: {
      opacity: 0,
      //   scale: 0.6,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      //   scale: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay }}
      //   transition={{ opacity: { duration: 1 }, scale: { duration: 1 }, delay }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
