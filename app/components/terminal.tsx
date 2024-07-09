'use client'

import Modal from '@mui/material/Modal';
import { TIMEOUT } from 'dns';
import React, { useState, useEffect, useRef } from 'react';
import FloatingButton from './floatingButton';

const Terminal: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openCV, setOpenCV] = React.useState(false);
    const handleOpenCV = () => setOpenCV(true);
    const handleCloseCV = () => setOpenCV(false);

    const scrollToPosition = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

    const [messages, setMessages] = useState<string[]>(['Welcome to the terminal! Run "help" for more information.']);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands = ['help', 'clear', 'ls', 'open', 'goto']; 
    const lsOutputs = ['CV.pdf']; 
    const validGotoOptions = ['Gil.h', 'Languages', 'Technologies', 'Experience', 'Hackathons']; 

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (trimmedInput) {
        handleCommand(trimmedInput);
        setInput('');
        }
    };

    const handleCommand = (command: string) => {
        const commandParts = command.split(' ');
        const mainCommand = commandParts[0];
    
        if (commands.includes(mainCommand)) {
          setMessages([...messages, `> ${command}`]);
    
          if (mainCommand === 'clear') {
            setMessages([]);
          } else if (mainCommand === 'goto') {
            if (commandParts[1] === '-h') {
              setMessages([
                ...messages,
                `> ${command}`,
                `Valid options for 'goto' command: ${validGotoOptions.join(', ')}`,
              ]);
            } else {
              const option = commandParts[1];
              if (validGotoOptions.includes(option)) {
                setMessages([...messages, `> ${command}`, `Navigating to ${option}...`]);
                
                goto(option);
              } else {
                setMessages([...messages, `> ${command}`, `Error: Run 'goto -h' for valid options`]);
              }
            }
          } else if (mainCommand === 'help') {
            setMessages([...messages, `> ${command}`, `This is a terminal I programmed to be used as a fun alternative way of learning about me and a bit of how a linux terminal works! Just type in the following commands and hit enter to see what happens. Recognized commands: ${commands.join(', ')}`]);

          } else if (mainCommand === 'ls') {
            if (commandParts.length === 1) {
              setMessages([...messages, `> ${command}`, ...lsOutputs]);
            } else {
              setMessages([...messages, `> ${command}`, `Error: Run 'ls' without any arguments`]);
            }
          } else if (mainCommand === 'open') {
            if (commandParts[1] === '-h') {
              setMessages([...messages, `> ${command}`, `To open a file, run 'open ' followed by the file name with its extension. To see valid options, run 'ls' which lists the available files in your current directory. Example: open CV.pdf`]);
            } else if (commandParts[1] === 'CV.pdf') {
              setMessages([...messages, `> ${command}`, `Opening CV...`]);
              
              setTimeout(() => {
                handleOpenCV();
              }, 1000);
            } else {
              setMessages([...messages, `> ${command}`, `Error: Run 'open -h' for valid options`]);
            }
          } else {
            setMessages([...messages, `> ${command}`, `Command recognized: ${mainCommand}`]);
          }
        } else {
          setMessages([...messages, `> ${command}`, `Error: Unrecognized command '${command}'`]);
        }
    };

    const goto = (option: string) => {
        
        console.log(`Navigating to ${option}`);
        
        setTimeout(() => {
            handleClose();
            if (option === 'Gil.h') {
                scrollToPosition(0);
            } else if (option === 'Languages') {
                scrollToPosition(1100);
            } else if (option === 'Technologies') {
                scrollToPosition(1530);
            } else if (option === 'Experience') {
                scrollToPosition(1950);
            } else if (option === 'Hackathons') {
                scrollToPosition(2600);
            }
          }, 1000);
    };

    const handleClick = () => {
        inputRef.current?.focus();
    };

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const OpenTerminal = () => {
      if (messages === null || messages.length === 0) {
        setMessages([...messages, 'Welcome to the terminal! Run "help" for more information.']);
      }
      handleOpen();
      setTimeout(() => handleClick(), 100);
    };

    return (
        <section className='grid grid-cols-2 gap-10 mx-28 mt-28 items-center place-items-center'>
            <Modal
              open={openCV}
              onClose={handleCloseCV}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className='z-50 '
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 shadow-lg p-4 w-3/4 h-3/4 bg-neutral-900 focus:outline-none">
                <iframe src="/Resume.pdf" className='w-full h-full'></iframe>
              </div>
            </Modal>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-3/4 h-3/4 bg-neutral-900 focus:outline-none">
                <div className="flex flex-col h-full w-full overflow-y-auto bg-black" onClick={handleClick}>
                    <div className="flex-1">
                        {messages.map((message, index) => (
                        <div key={index} className="mb-2 p-2">
                            {message}
                        </div>
                        ))}
                        <form onSubmit={handleSubmit} className="flex mb-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 p-2 bg-black focus:outline-none"
                            placeholder='>'
                        />
                        </form>
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </div>
            </Modal>
            
            <div>
                <div className='text-green-700 text-5xl text-end'>Rather not scroll?</div>
                <div className='text-white text-7xl text-end'>Try the terminal!</div>
            </div>
            <button className='w-full my-8 mx-10 hover:scale-105 transition duration-300 ease-in-out text-xl bg-sky-950 p-3 rounded-xl focus:outline-none' onClick={OpenTerminal}>
                LAUNCH TERMINAL
            </button>
            <FloatingButton onClick={OpenTerminal} isVisible={showButton} />
        </section>
    )
}

export default Terminal