'use client';

import { db } from '@/lib/firebase';
import Modal from '@mui/material/Modal';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [info, setInfo] = React.useState<infoType | null>(null);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  type infoType = {
    resume: string;
  };

  useEffect(() => {
    const fetch = async () => {
      const sobremiRef = doc(db, 'sobremi', 'information');
      const sobremiSnap = await getDoc(sobremiRef);
      setInfo(sobremiSnap.data() as infoType);
    };

    fetch();
  });

  return (
    <section className="bg-black h-14 w-full sticky top-0 z-10 flex items-center justify-between px-6 lg:justify-around">
      <button
        onClick={() => scrollToComponent('Gil.h')}
        className="font-bold  text-3xl hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out"
      >
        Gil.h
      </button>
      <div className="hidden lg:block">
        <button
          onClick={() => scrollToComponent('Languages')}
          className="mx-5 hover:text-green-700 transition duration-300 ease-in-out"
        >
          Programming languages
        </button>
        <button
          onClick={() => scrollToComponent('Technologies')}
          className="mx-5 hover:text-green-700 transition duration-300 ease-in-out"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToComponent('Experience')}
          className="mx-5 hover:text-green-700 transition duration-300 ease-in-out"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToComponent('Competitions')}
          className="mx-5 hover:text-green-700 transition duration-300 ease-in-out"
        >
          Competitions
        </button>
      </div>
      <button
        className="w-20 h-8 hover:scale-110 transition duration-300 ease-in-out bg-sky-950 rounded-xl"
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 shadow-lg p-4 w-3/4 h-3/4 bg-neutral-900">
          <iframe src={info?.resume} className="w-full h-full"></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Navbar;
