import React from "react";

interface FloatingButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  isVisible,
}) => {
  return (
    <button
      onClick={onClick}
      className={`fixed right-8 bottom-8 z-40 transform rounded-xl bg-sky-950 p-4 text-white transition duration-300 ease-in-out hover:cursor-pointer ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      } hover:scale-110 focus:outline-none`}
    >
      &gt;_
    </button>
  );
};

export default FloatingButton;
