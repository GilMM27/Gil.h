// components/FloatingButton.tsx
import React from 'react';

interface FloatingButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, isVisible }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 p-4 bg-sky-950 text-white rounded-xl z-40 transition duration-300 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} hover:scale-110 focus:outline-none`}
    >
      &gt;_
    </button>
  );
};

export default FloatingButton;
