import React from "react";
import InfiniteSlider from "./InifiniteAutoplaySlider";

const Slider = () => {
  const images = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
  ];
  return (
    <div className="w-full h-screen lg:p-16 flex flex-col justify-center">
      <div class="logos">
        <div class="logos-slide">
          <img src="./logo1.png" />
          <img src="./logo2.png" />
          <img src="./logo3.png" />
          <img src="./logo4.png" />
          <img src="./logo5.png" />
          <img src="./logo6.png" />
          <img src="./logo7.png" />
          <img src="./logo8.png" />
          <img src="./logo1.png" />
          <img src="./logo2.png" />
          <img src="./logo3.png" />
          <img src="./logo4.png" />
          <img src="./logo5.png" />
          <img src="./logo6.png" />
          <img src="./logo7.png" />
          <img src="./logo8.png" />
        </div>
      </div>

      <div class="logos2">
        <div class="logos-slide2">
          <img src="./logo1.png" />
          <img src="./logo2.png" />
          <img src="./logo3.png" />
          <img src="./logo4.png" />
          <img src="./logo5.png" />
          <img src="./logo6.png" />
          <img src="./logo7.png" />
          <img src="./logo8.png" />
          <img src="./logo1.png" />
          <img src="./logo2.png" />
          <img src="./logo3.png" />
          <img src="./logo4.png" />
          <img src="./logo5.png" />
          <img src="./logo6.png" />
          <img src="./logo7.png" />
          <img src="./logo8.png" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
