'use client'

import { Button } from '@/components/ui/button';
import Modal from '@mui/material/Modal';
import React from 'react';

const Navbar: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const scrollToPosition = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

  return (
    <section className='bg-black h-14 w-full sticky top-0 z-10 flex items-center justify-around'>
        <button onClick={() => scrollToPosition(0)} className="font-bold  text-3xl hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">Gil.h</button>
        <div>
            <button onClick={() => scrollToPosition(1100)} className='mx-5 hover:text-green-700 transition duration-300 ease-in-out'>Programming languages</button>
            <button onClick={() => scrollToPosition(1530)} className='mx-5 hover:text-green-700 transition duration-300 ease-in-out'>Technologies</button>
            <button onClick={() => scrollToPosition(1950)} className='mx-5 hover:text-green-700 transition duration-300 ease-in-out'>Experience</button>
            <button onClick={() => scrollToPosition(2600)} className='mx-5 hover:text-green-700 transition duration-300 ease-in-out'>Hackathons</button>
        </div>
        <button className='w-20 h-8 hover:scale-110 transition duration-300 ease-in-out bg-sky-950 rounded-xl bg-opacity-50' onClick={handleOpen}>CV</button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 shadow-lg p-4 w-3/4 h-3/4 bg-neutral-900">
            <iframe src="/Resume.pdf" className='w-full h-full'></iframe>
          </div>
        </Modal>
    </section>
  );
};

export default Navbar;
