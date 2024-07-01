'use client'
import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import cpp from '../public/assets/C++_logo.png';
import python from '../public/assets/Python-logo.png';
import java from '../public/assets/java-logo-1.png';
import javaScript from '../public/assets/javascript-logo-javascript-icon-transparent-free-png.webp';
import typeScript from '../public/assets/Typescript_logo_2020.svg.png';
import matlab from '../public/assets/Matlab_Logo.png';
import csharp from '../public/assets/c-sharp-c-logo-02F17714BA-seeklogo.com.png';
import im from '../public/assets/yo.jpg';
import unity from '../public/assets/unity.png';
import arduino from '../public/assets/arduino.png';
import android from '../public/assets/android.webp';
import github from '../public/assets/github.png';
import html from '../public/assets/html.png';
import tailwind from '../public/assets/tailwind.webp';
import angular from '../public/assets/angular.png';
import react from '../public/assets/react.webp';
import nextjs from '../public/assets/nextjs.png';
import firebase from '../public/assets/firebase.png';
import Link from "next/link";
import Modal from '@mui/material/Modal';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Navbar from "./components/navbar";

const Landing: React.FC = () => {
  // Modal for terminal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const languages = [cpp, csharp, java, python, javaScript, typeScript, matlab];
  const langNames = ["C++", "C#","Java", "Python", "JavaScript", "TypeScript", "Matlab"];
  const langTime = ["3 years", "3 years","3 years", "1 year", "1 year", "1 year", "1 year"]
  // add flutter
  const technologies = [unity, arduino, android, github, html, tailwind, angular, react, nextjs, firebase];
  const techNames = ['Unity Game Engine', 'Arduino', 'Android SDK', 'GitHub', 'HTML', 'Tailwind CSS', 'Angular', 'React', 'Next.js', 'Firebase'];
  const techTime = ['', '', '', '', '', '', '', '', '', '', ''];
    return (
      <main>
        <Navbar/>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 shadow-lg p-4 w-3/4 h-3/4 bg-neutral-900">
            TODO: terminal
          </div>
        </Modal>

        <div className="flex bg-gradient-to-l from-green-900 to-black mr-10 m-10" id='mainTitle'>
          <section className="relative w-96 h-96 overflow-hidden">
            <Image src={im} alt="Image" className="absolute w-full h-full object-cover"/>
          </section>
          <section className="ml-10 text-green-700 flex items-center">
            <div>
              <div className="text-5xl">Who is:</div>
              <div className="text-9xl">Gilberto Malagamba?</div>
            </div>
          </section>
        </div>
        
        <section className='grid grid-cols-2 gap-10 mx-28 mt-28 items-center'>
          <div>
            <div className=' text-green-700 text-5xl text-end'>Rather not scroll?</div>
            <div className=' text-white text-7xl text-end'>Try the terminal!</div>
          </div>
          <Button className=' my-8 mx-10 hover:scale-105 transition duration-300 ease-in-out text-xl' onClick={handleOpen}>
            LAUNCH TERMINAL 
          </Button>
        </section>

        <Card className="text-white mt-28 bg-neutral-900 p-3 mx-28 rounded-xl border-0">
          <CardHeader className="text-green-300 text-3xl">// Hi! just a little introduction about me, feel free to skip.</CardHeader>{/*<Divider className="bg-neutral-500"/>*/}
          <CardContent className='text-xl'>
            &gt; I'm a software engineer, a web developer, and a computer science student at Tecnológico de Monterrey Campus Monterrey.<br/>
            &gt; Been coding since 2020, as every other programmer, my first interest was in how video games were made.<br/>
            &gt; From then I moved onto competitive programming, baby steps.<br/>
            &gt; I'm currently competing in robotics, freelance web development, and working on personal projects.<br/>
          </CardContent>
        </Card>

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
                        <Image src={languages[index]} alt='c++' width={918} height={1032} className='h-36 w-fit top-6 absolute'/>
                        <span className="text-xl font-semibold text-white bottom-4 left-6 absolute">
                          {langNames[index]}
                        </span>
                        <span className="text-xl  text-green-300 bottom-4 right-6 absolute">
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
                        <Image src={technologies[index]} alt='c++' width={918} height={1032} className='h-36 w-fit top-6 absolute'/>
                        <span className="text-xl font-semibold text-white bottom-4 left-6 absolute">
                          {techNames[index]}
                        </span>
                        <span className="text-xl font-semibold text-green-300 bottom-4 right-6 absolute">
                          {techTime[index]}
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

        <div className='w-full text-center mt-28 text-5xl text-green-700'>Experiences</div>
        <section className='justify-center mx-14 mt-10'>
          <Tabs defaultValue="OMI">
            <TabsList className="grid w-full grid-cols-3 bg-neutral-900 text-white">
              <TabsTrigger value="RoBorregos">RoBorregos</TabsTrigger>
              <TabsTrigger value="FTC">FTC</TabsTrigger>
              <TabsTrigger value="OMI">OMI</TabsTrigger>
            </TabsList>
            <TabsContent value="RoBorregos">
              <Card className='bg-neutral-900 border-0 text-white text-lg'>
                <CardHeader>
                  <CardTitle className='text-3xl'>RoBorregos</CardTitle>
                  <CardDescription className='text-xl'>
                    I'm currently competing in robotics with the representative team of Tecnológico de Monterrey Campus Monterrey.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Competed in the 2024 Mexican Robotics Tournament (TMR) and placed 2nd in the Junior Rescue Maze category. I designed and programmed the <Link href={'https://github.com/RoBorregos/RescueMaze2024/tree/nacionalNewMovement'} className='font-bold text-green-700'>maze exploring algorithm</Link> in both C++ and arduino based on the Depth First Search and Dijkstra's shortest path algorithms. I also worked on the movement and vision integrations which included serial communication with a Jetson Nano and several PID controls.<br/>
                  &gt; Worked on an IOT project for the lockers in the RoBorrego's lab consisting of a websocket used to communicate with ESP32 microcontrollers and a web app for the user interface using the T3 tech stack.<br/>
                  &gt; Started working on the RoboCup @home Human Robot Interaction and manipulation teams. I'm currently learning ROS and Gazebo.
                </CardContent>
                <CardFooter>
                  This team has been a great experience and has taught me a lot about teamwork, project management, and robotics.
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="FTC">
              <Card className='bg-neutral-900 border-0 text-white text-lg'>
                <CardHeader>
                  <CardTitle className='text-3xl'>FTC</CardTitle>
                  <CardDescription className='text-xl'>
                    Competed in the FIRST Tech Challenge as leader of the team Zorrobots #9164 of the CETYS Universidad Campus Internacional Ensenada during the 2022-2023 season.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Reached the semifinals in the Mexico City national tournament and advanced to the regional stage in San Diego.<br/>
                  &gt; Coded both the autonomous and teleop programs for the robot in Java using the FTC SDK and Android Studio. Used encoders along side the Roadrunner library for odometry and path following. Implemented april tag detection and processing.<br/>
                  &gt; Functioned as coach player during the matches and as the team's spokesperson during the interviews.<br/>
                  &gt; Helped with the design and construction of the robot.<br/>
                  &gt; Wrote, composed and filmed a song which won us the Promote Award in the San Diego Regional.<br/>
                </CardContent>
                <CardFooter>
                  I really enjoyed my time competing with this team and adquired a lot of skills which would help me in the future.
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="OMI">
              <Card className='bg-neutral-900 border-0 text-white text-lg'>
                <CardHeader>
                  <CardTitle className='text-3xl'>OMI</CardTitle>
                  <CardDescription className='text-xl'>
                    Competed in the Mexican Informatics Olympiad during the 2020-2021 and 2021-2022 seasons, reaching the national stage in both.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  &gt; Placed 36th in the 2021 national stage (bronze medal) and 16th in the 2022 national stage (silver medal).<br/>
                  &gt; Learned about algorithms and data structures, and how to implement them in C++.<br/>
                  &gt; Took the training and solved a lot of <Link href={'https://github.com/GilMM27/OMI'} className='font-bold text-green-700'>homeworks and OmegaUp</Link> problems. <br/>
                  &gt; Both years I participated the traning for the international team selection.<br/>
                  &gt; Started a competitive programming club in my school and taught the basics of C++ and algorithms to the members.
                </CardContent>
                <CardFooter>
                  This competition sparked my interest in competitive programming and taught me a lot about algorithms and data structures.
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className='h-screen'></section>  
      </main>
    );
};

export default Landing;