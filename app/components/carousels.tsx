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

const Carousels = () => {
    const languages = ['/assets/languages/C++_logo.png', '/assets/languages/cSharp.png', '/assets/languages/java-logo-1.png', '/assets/languages/Python-logo.png', '/assets/languages/javascript.webp', '/assets/languages/Typescript_logo_2020.svg.png', '/assets/languages/Matlab_Logo.png'];
    const langNames = ["C++", "C#","Java", "Python", "JavaScript", "TypeScript", "Matlab"];
    const langTime = ["4 years", "4 years","3 years", "1 year", "1 year", "1 year", "1 year"]
    const technologies = ['/assets/technologies/unity.png', '/assets/technologies/arduino.png', '/assets/technologies/android.webp', '/assets/technologies/github.png', '/assets/technologies/html.png', '/assets/technologies/tailwind.webp', '/assets/technologies/angular.png', '/assets/technologies/react.webp', '/assets/technologies/nextjs.png', '/assets/technologies/firebase.png', '/assets/technologies/R.png', '/assets/technologies/flutter.png', '/assets/technologies/ubuntu.png'];
    const techNames = ['Unity Game Engine', 'Arduino', 'Android SDK', 'GitHub', 'HTML', 'Tailwind CSS', 'Angular', 'React', 'Next.js', 'Firebase', 'R', 'Flutter', 'Ubuntu'];

  return (
    <section>
        <div className='w-full text-center mt-28 text-5xl text-green-700'>Porgramming languages</div>
        <section className='flex justify-center mt-10'>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
              // loop: true,
            }}
            className="w-full mx-28"
          >
            <CarouselContent>
              {Array.from({ length: languages.length }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 w-full">
                  <div className="p-1">
                    <Card className='border-0 bg-neutral-900'>
                      <CardContent className="flex aspect-square items-center justify-center p-6 bg-neutral-900 rounded-xl relative">
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

        <div className='w-full text-center mt-28 text-5xl text-green-700'>Technologies</div>
        <section className='flex justify-center mt-10'>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
              // loop: true,
            }}
            className="w-full mx-28"
          >
            <CarouselContent>
              {Array.from({ length: technologies.length }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 w-full">
                  <div className="p-1">
                    <Card className='border-0 bg-neutral-900'>
                      <CardContent className="flex aspect-square items-center justify-center p-6 bg-neutral-900 rounded-xl relative">
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
    </section>
  )
}

export default Carousels