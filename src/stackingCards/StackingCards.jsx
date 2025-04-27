import React, { useRef } from "react";
import Card from "./Card";
import { useScroll } from "framer-motion";

const StackingCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div
      ref={container}
      className="w-full relative py-[50vh] bg-white text-black"
    >
      {[1, 2, 3, 4, 5].map((_, i) => {
        const targetScale = 1 - (5 - i) * 0.05;
        return (
          <Card
            i={i}
            title={"Demo Card"}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default StackingCards;
