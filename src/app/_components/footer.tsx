import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 h-28 w-full flex items-center mt-14 lg:mt-28">
      <div className="mx-5 text-white">
        <div>2025 Gil.h</div>
        <a
          href="mailto:gilberto.malagamba@gmail.com"
          className="hover:underline"
        >
          gilberto.malagamba@gmail.com
        </a>
        <div>+52 646 237 5537</div>
      </div>
    </footer>
  );
};

export default Footer;
