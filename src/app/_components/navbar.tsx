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
    <section className="sticky top-0 z-10 flex h-14 w-full items-center justify-between bg-black px-6 lg:justify-around">
      <button
        onClick={() => scrollToComponent("Gil.h")}
        className="text-3xl font-bold transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-green-700"
      >
        Gil.h
      </button>
      <div className="hidden lg:block">
        <button
          onClick={() => scrollToComponent("Languages")}
          className="mx-5 transition duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
        >
          Programming languages
        </button>
        <button
          onClick={() => scrollToComponent("Technologies")}
          className="mx-5 transition duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToComponent("Experience")}
          className="mx-5 transition duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToComponent("Competitions")}
          className="mx-5 transition duration-300 ease-in-out hover:cursor-pointer hover:text-green-700"
        >
          Competitions
        </button>
      </div>
      <button
        className="h-8 w-20 rounded-xl bg-sky-950 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
        onClick={handleOpen}
      >
        CV
      </button>

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
