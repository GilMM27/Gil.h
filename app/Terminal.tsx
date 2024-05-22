'use client'
import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import im from '../public/assets/yo.jpg';
import {Card, CardHeader, CardBody, CardFooter, Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import Link from "next/link";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Terminal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayText, setDisplayText] = useState("Initial Text");
  const handleButtonClick = (newText : string) => {
    setDisplayText(newText);
  };
  const myInfo = ["op1", "op2"];
  const tabs = ["option1", "option2", "option3"];
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
              <Button className='font-code h-8 hover:scale-110 transition duration-300 ease-in-out' onClick={handleOpen} variant="contained">
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
        
        <section className='grid grid-cols-2 gap-10 mx-28 mt-28'>
          <div>
            <div className='font-code text-green-700 text-5xl text-end'>Rather not scroll?</div>
            <div className='font-code text-white text-7xl text-end'>Try the terminal!</div>
          </div>
          <Button className='font-code my-8 mx-10 hover:scale-105 transition duration-300 ease-in-out' onClick={handleOpen} variant="contained">
            LAUNCH TERMINAL
          </Button>
        </section>

        <Card className="text-white mt-28 text-xl bg-neutral-900 p-3 mx-28">
          <CardHeader className="text-green-300">// Hi! just a little introduction about me, feel free to skip.</CardHeader><Divider className="bg-neutral-500"/>
          <CardBody>
            &gt; I'm a software engineer, a web developer, and a computer science student at Tecnológico de Monterrey Campus Monterrey.<br/>
            &gt; Been coding since 2020, as every other programmer, my first interest was in how video games were made.<br/>
            &gt; From then I moved onto competitive programming, baby steps.<br/>
            &gt; I'm currently competing in robotics, freelance web development, and working on personal projects.<br/>
          </CardBody>
        </Card>

        <section className='h-80 rounded-large bg-white m-28 flex font-code text-black'>
          <div>
            {myInfo.map((nadota, index) => (
              <div key={index} className='w-52 p-3' onClick={() => handleButtonClick(myInfo[index])}>{tabs[index]}</div>
            ))}
          </div>
          <div className='p-5'>{displayText}</div>
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