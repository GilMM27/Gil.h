'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {

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
            <button onClick={() => scrollToPosition(1100)} className='mx-5'>Programming languages</button>
            <button onClick={() => scrollToPosition(1530)} className='mx-5'>Technologies</button>
            <button onClick={() => scrollToPosition(1950)} className='mx-5'>Experience</button>
        </div>
        <Button className='w-20 h-8 hover:scale-110 transition duration-300 ease-in-out'>&gt;_</Button>
        {/* add terminal */}
    </section>
  );
};

export default Navbar;
