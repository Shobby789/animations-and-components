import React, { useEffect, useRef } from "react";

const UseRefHook = () => {
  const modalRef = useRef(null);
  console.log("modalRef >>>", modalRef);

  useEffect(() => {
    console.log(" >>>>", modalRef.current);
  }, []);

  return (
    <div className="bg-white text-black h-screen">
      <h2 ref={modalRef}>UseRef Hooks</h2>
    </div>
  );
};

export default UseRefHook;
