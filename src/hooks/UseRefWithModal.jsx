import React, { useState, useRef, useEffect } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white text-black h-screen p-10 relative">
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div
          className={`modal-overlay bg-[rgba(0,0,0,0.5)] w-full h-full absolute inset-0 z-10 flex items-center justify-center ${
            isOpen ? "scale-100" : "scale-0"
          } transition-all duration-1000`}
        >
          <div ref={modalRef} className="modal-content bg-white p-10 relative">
            <button
              type="button"
              onClick={closeModal}
              className=" absolute top-4 right-4"
            >
              Close Modal
            </button>
            <h2>Modal Title</h2>
            <p>Modal content goes here...</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
