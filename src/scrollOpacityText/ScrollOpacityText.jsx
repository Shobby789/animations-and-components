import React from "react";
import Paragraph from "./Paragraph";
import Word from "./Word";
import Character from "./Character";

const paragraph =
  "The reason we use Lorem Ipsum is simple. If we used real text, it would possibly distract from the DESIGN of a page or indeed, might even be mistakenly inappropriate. Or if we used something like Insert Text Here, this would also distract from the design. Using Lorem Ipsum allows us to SEE the design without being distracted by readable or unrealistic text. The reason we use Lorem Ipsum is simple. If we used real text, it would possibly distract from the DESIGN of a page or indeed, might even be mistakenly inappropriate. Or if we used something like Insert Text Here, this would also distract from the design. Using Lorem Ipsum allows us to SEE the design without being distracted by readable or unrealistic text. The reason we use Lorem Ipsum is simple. If we used real text, it would possibly distract from the DESIGN of a page or indeed, might even be mistakenly inappropriate. Or if we used something like Insert Text Here, this would also distract from the design. Using Lorem Ipsum allows us to SEE the design without being distracted by readable or unrealistic text.";

const ScrollOpacityText = () => {
  return (
    <div className="w-full text-white relative">
      <div className="w-full h-screen"></div>
      {/* <Paragraph /> */}
      <Word value={paragraph} />
      {/* <Character value={paragraph} /> */}
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default ScrollOpacityText;
