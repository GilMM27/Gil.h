"use client";

import Modal from "@mui/material/Modal";
import React from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="fixed top-0 z-10 flex h-20 w-full items-center px-10 text-2xl">
      <div className="flex flex-1 justify-start">
        <button
          onClick={() => scrollToComponent("Gil.h")}
          className="font-bold transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-500"
        >
          Gil.mm
        </button>
      </div>
      <div className="hidden flex-1 justify-center lg:flex">
        <button
          onClick={() => scrollToComponent("Technologies")}
          className="mx-5 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-500"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToComponent("Experience")}
          className="mx-5 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-500"
        >
          Experiences
        </button>
        <button
          onClick={() => scrollToComponent("Competitions")}
          className="mx-5 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-500"
        >
          Competitions
        </button>
      </div>
      <div className="flex flex-1 justify-end space-x-5">
        <button className="transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-500">
          Terminal
        </button>
        <button
          className="transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-500"
          onClick={handleOpen}
        >
          Resume
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-neutral-900 p-4 shadow-lg">
          <iframe src={"/assets/Resume.pdf"} className="h-full w-full"></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Navbar;
