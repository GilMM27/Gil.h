"use client";

import React from "react";
import { Card, CardContent } from "./shadcn/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn/carousel";
import { api } from "~/trpc/react";

const Carousels = () => {
  const { data: programmingLanguages } = api.skill.getSkillByType.useQuery({
    skillType: "language",
  });
  const { data: allTechnologies } = api.skill.getSkillByType.useQuery({
    skillType: "technology",
  });
  // Todo fix styles for more than 15 items
  const technologies = allTechnologies?.slice(0, 15);

  return (
    <section>
      <div className="h-5 lg:h-14" id="Languages"></div>
      <div className="mt-5 w-full text-center text-3xl text-green-700 lg:mt-14 lg:text-5xl">
        Programming languages
      </div>
      <section className="mt-10 hidden justify-center lg:flex">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="mx-28 w-full"
        >
          <CarouselContent>
            {programmingLanguages?.map((language, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
              >
                <div className="p-1">
                  <Card className="border-0 bg-neutral-900">
                    <CardContent className="relative flex h-[15rem] items-center justify-center rounded-xl bg-neutral-900 p-6">
                      <Image
                        src={language.imageUrl}
                        alt="language logo"
                        width={918}
                        height={1032}
                        className="absolute top-6 h-34 max-w-3/4 object-contain"
                      />
                      <span className="absolute bottom-4 left-6 text-xl font-semibold text-white">
                        {language.name}
                      </span>
                      <span className="absolute right-6 bottom-4 text-xl text-green-400">
                        {language.years} years
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black" />
          <CarouselNext className="bg-black" />
        </Carousel>
      </section>
      <section className="mt-10 grid grid-cols-3 px-10 lg:hidden">
        {programmingLanguages?.map((language, index) => (
          <div key={index} className="p-1">
            <Card className="border-0 bg-neutral-900">
              <CardContent className="relative flex h-[11.5rem] items-center justify-center rounded-xl bg-neutral-900 p-6">
                <Image
                  src={language.imageUrl}
                  alt="language logo"
                  width={918}
                  height={1032}
                  className="absolute top-6 h-20 w-fit"
                />
                <span className="absolute bottom-10 left-6 text-lg font-semibold text-white">
                  {language.name}
                </span>
                <span className="text-md absolute bottom-4 left-6 text-green-400">
                  {language.years} years
                </span>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>

      <div className="h-5 lg:h-14" id="Technologies"></div>
      <div className="mt-5 w-full text-center text-3xl text-green-700 lg:mt-14 lg:text-5xl">
        Technologies
      </div>
      <section className="mt-10 hidden justify-center lg:flex">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="mx-28 w-full"
        >
          <CarouselContent>
            {technologies?.map((technology, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
              >
                <div className="p-1">
                  <Card className="border-0 bg-neutral-900">
                    <CardContent className="relative flex h-[15rem] items-center justify-center rounded-xl bg-neutral-900 p-6">
                      <Image
                        src={technology.imageUrl}
                        alt="tech"
                        width={918}
                        height={1032}
                        className="absolute top-6 h-34 max-w-3/4 object-contain"
                      />
                      <span className="absolute bottom-4 left-6 text-xl font-semibold text-white">
                        {technology.name}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black" />
          <CarouselNext className="bg-black" />
        </Carousel>
      </section>
      <section className="mt-10 grid grid-cols-3 px-10 lg:hidden">
        {technologies?.map((technology, index) => (
          <div key={index} className="p-1">
            <Card className="border-0 bg-neutral-900">
              <CardContent className="relative flex h-[11.5rem] items-center justify-center rounded-xl bg-neutral-900 p-6">
                <Image
                  src={technology.imageUrl}
                  alt="tech"
                  width={918}
                  height={1032}
                  className="absolute top-6 h-20 w-fit"
                />
                <span className="absolute bottom-4 left-6 text-lg font-semibold text-white">
                  {technology.name}
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
