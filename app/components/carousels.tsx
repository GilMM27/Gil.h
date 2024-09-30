'use client'

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from 'react';

const Carousels = () => {
    const languages = ['/assets/languages/C++_logo.png', '/assets/languages/cSharp.png', '/assets/languages/java-logo-1.png', '/assets/languages/Python-logo.png', '/assets/languages/javascript.webp', '/assets/languages/Typescript_logo_2020.svg.png', '/assets/languages/Matlab_Logo.png'];
    const langNames = ["C++", "C#","Java", "Python", "JavaScript", "TypeScript", "Matlab"];
    const langTime = ["4 years", "4 years","3 years", "1 year", "1 year", "1 year", "1 year"]
    const technologies = ['/assets/technologies/unity.png', '/assets/technologies/arduino.png', '/assets/technologies/android.webp', '/assets/technologies/github.png', '/assets/technologies/html.png', '/assets/technologies/tailwind.webp', '/assets/technologies/angular.png', '/assets/technologies/react.webp', '/assets/technologies/nextjs.png', '/assets/technologies/firebase.png', '/assets/technologies/R.png', '/assets/technologies/flutter.png', '/assets/technologies/ubuntu.png'];
    const techNames = ['Unity Game Engine', 'Arduino', 'Android SDK', 'GitHub', 'HTML', 'Tailwind CSS', 'Angular', 'React', 'Next.js', 'Firebase', 'R', 'Flutter', 'Ubuntu'];

  return (
    <section>
      <div className='h-5 lg:h-14' id='Languages'></div>
      <div className='w-full text-center mt-5 lg:mt-14 text-3xl lg:text-5xl text-green-700'>Programming languages</div>
      <section className='lg:flex justify-center mt-10 hidden'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full mx-28"
        >
          <CarouselContent>
            {Array.from({ length: languages.length }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 w-full">
                <div className="p-1">
                  <Card className='border-0 bg-neutral-900'>
                    <CardContent className="flex items-center justify-center p-6 bg-neutral-900 rounded-xl relative h-[15rem]">
                      <Image src={languages[index]} alt='language logo' width={918} height={1032} className='h-36 w-fit top-6 absolute'/>
                      <span className="text-xl font-semibold text-white bottom-4 left-6 absolute">
                        {langNames[index]}
                      </span>
                      <span className="text-xl text-green-400 bottom-4 right-6 absolute">
                        {langTime[index]}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='bg-black'/>
          <CarouselNext className='bg-black'/>
        </Carousel>
      </section>
      <section className='grid grid-cols-3 lg:hidden mt-10 px-10'>
        {Array.from({ length: languages.length }).map((_, index) => (
          <div key={index} className="p-1">
            <Card className='border-0 bg-neutral-900'>
              <CardContent className="flex items-center justify-center p-6 bg-neutral-900 rounded-xl relative h-[11.5rem]">
                <Image src={languages[index]} alt='language logo' width={918} height={1032} className='h-20 w-fit top-6 absolute'/>
                <span className="text-lg font-semibold text-white bottom-10 left-6 absolute">
                  {langNames[index]}
                </span>
                <span className="text-md text-green-400 bottom-4 left-6 absolute">
                  {langTime[index]}
                </span>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
        <div className='h-5 lg:h-14' id='Technologies'></div>
        <div className='w-full text-center mt-5 lg:mt-14 text-3xl lg:text-5xl text-green-700'>Technologies</div>
        <section className='lg:flex justify-center mt-10 hidden'>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            className="w-full mx-28"
          >
            <CarouselContent>
              {Array.from({ length: technologies.length }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 w-full">
                  <div className="p-1">
                    <Card className='border-0 bg-neutral-900'>
                      <CardContent className="flex items-center justify-center p-6 bg-neutral-900 rounded-xl relative h-[15rem]">
                        <Image src={technologies[index]} alt='tech' width={918} height={1032} className='h-36 w-fit top-6 absolute'/>
                        <span className="text-xl font-semibold text-white bottom-4 left-6 absolute">
                          {techNames[index]}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='bg-black'/>
            <CarouselNext className='bg-black'/>
          </Carousel>
        </section>
        <section className='grid grid-cols-3 lg:hidden mt-10 px-10'>
          {Array.from({ length: technologies.length }).map((_, index) => (
            <div key={index} className="p-1">
              <Card className='border-0 bg-neutral-900'>
                <CardContent className="flex items-center justify-center p-6 bg-neutral-900 rounded-xl relative h-[11.5rem]">
                  <Image src={technologies[index]} alt='tech' width={918} height={1032} className='h-20 w-fit top-6 absolute'/>
                  <span className="text-lg font-semibold text-white bottom-4 left-6 absolute">
                    {techNames[index]}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </section>
    </section>
  );
};

export default Carousels;