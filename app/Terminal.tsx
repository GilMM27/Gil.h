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
import {Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";
// import Button from '@mui/material/Button';
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

const Terminal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayText, setDisplayText] = useState("Initial Text");
  const handleButtonClick = (newText : string) => {
    setDisplayText(newText);
  };
  const [selectedItem, setSelectedItem] = useState('');
  const changeSelectedItem = () => { 
    setSelectedItem('bg-green-700 text-white');
  }
  const myInfo = ["op1", "op2"];
  const tabs = ["option1", "option2", "option3"];
  const languages = [cpp, csharp, python, java, javaScript, typeScript, matlab];
  const langNames = ["C++", "C#","Python", "Java", "JavaScript", "TypeScript", "Matlab"];
  const langTime = ["3 year", "1 year","1 year", "1 year", "1 year", "1 year", "1 year"]
  const technologies = [''];
  const techNames = [''];
  const techTime = [''];
    return (
      <main>
        <Navbar className="bg-black h-14">
          <NavbarBrand>
            {/* <Image src={im} alt="Gil.h" width={50} height={50}/> */}
            <Link href="#mainTitle" className="font-bold font-code text-3xl hover:text-green-700 hover:scale-110 transition duration-300 ease-in-out">Gil.h</Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link className='font-code' href="#">
                Features
              </Link>
            </NavbarItem> 
            <NavbarItem> {/* isActive */}
              <Link className='font-code' href="#">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className='font-code' href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link className='font-code' href="#">Contact</Link>
            </NavbarItem>
            <NavbarItem>
              <Button className='font-code h-8 hover:scale-110 transition duration-300 ease-in-out' onClick={handleOpen}>
                &gt;_
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                {/* <box> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 shadow-lg p-4 w-3/4 h-3/4 bg-neutral-900">
                  TODO: terminal
                </div>
              </Modal>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <div className="flex bg-gradient-to-l from-green-900 to-black mr-10 m-10" id='mainTitle'>
          <section className="relative w-96 h-96 overflow-hidden">
            <Image src={im} alt="Image" className="absolute w-full h-full object-cover"/>
          </section>
          <section className="ml-10 font-code text-green-700 flex items-center">
            <div>
              <div className="text-5xl">Who is:</div>
              <div className="text-9xl">Gilberto Malagamba?</div>
            </div>
          </section>
        </div>
        
        <section className='grid grid-cols-2 gap-10 mx-28 mt-28 items-center'>
          <div>
            <div className='font-code text-green-700 text-5xl text-end'>Rather not scroll?</div>
            <div className='font-code text-white text-7xl text-end'>Try the terminal!</div>
          </div>
          <Button className='font-code my-8 mx-10 hover:scale-105 transition duration-300 ease-in-out text-xl' onClick={handleOpen}>
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

        <div className='w-full text-center mt-28 text-5xl font-code text-green-700'>Porgramming languages</div>
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
                        <span className="text-xl font-semibold text-green-300 bottom-4 right-6 absolute">
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

        <div className='w-full text-center mt-10 text-5xl font-code text-green-700'>Technologies</div>
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

        <section className='justify-center m-14 mt-28'>
          <Tabs defaultValue="RoBorregos">
            <TabsList className="grid w-full grid-cols-2 bg-neutral-900 text-white">
              <TabsTrigger value="RoBorregos">RoBorregos</TabsTrigger>
              <TabsTrigger value="FIRST">FIRST</TabsTrigger>
            </TabsList>
            <TabsContent value="RoBorregos">
              <Card>
                <CardHeader>
                  <CardTitle>Roborregos</CardTitle>
                  <CardDescription>
                    Desc
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  Content
                </CardContent>
                <CardFooter>
                  Foot
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="FIRST">
              <Card>
                <CardHeader>
                  <CardTitle>FIRST</CardTitle>
                  <CardDescription>
                    Desc
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  Content
                </CardContent>
                <CardFooter>
                  Foot
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* <select onChange={(event) => {
            const selectedTab = event.target.value;
            console.log(selectedTab);
        }}>
            {tabs.map((tab, index) => (
              <option key={index} value={tab}>
                {tab}
              </option>
            ))}
          </select> */}

        {/* <section className="text-white mt-3 text-xl p-3 mx-10 w-2/3">
          #include&lt;iostream&gt;<br/>
          
          int main() &#123;<br/>
            string input;<br/>
            std::cout &lt;&lt; "Make your choice!\n";<br/>
            std::cin &gt;&gt; input;<br/>
            switch(input) &#123;<br/>
              case "resume":<br/>
                downloadResume();<br/>
                break;<br/>
              default:<br/>
                std::cout &lt;&lt; "Make a right choice!\n";<br/>
                break;<br/>
          &#125;
        </section> */}

        {/* <Terminal/> */}
        
      </main>
    );
};

export default Terminal;