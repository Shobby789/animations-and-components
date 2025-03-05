import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [scrolling, setScrolling] = useState(0);
  const [state, setState] = useState(false);

  const calculatePageOffset = () => {
    if (window.pageYOffset > 500) {
      setScrolling(window.pageYOffset);
      setState(true);
    } else {
      setState(false);
    }
  };

  //   scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", calculatePageOffset);

    return () => {
      window.removeEventListener("scroll", calculatePageOffset);
    };
  }, []);

  return (
    <div className="w-full min-h-[300vh] p-10 relative">
      <h1 className="fixed top-0 left-10">Scroll Events {scrolling}</h1>
      {state && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-8 h-8 flex items-center justify-center border bg-green-600 text-white fixed bottom-10 right-10"
        >
          ^
        </button>
      )}
    </div>
  );
};

export default Scroll;
