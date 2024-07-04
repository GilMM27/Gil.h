'use client'

import Modal from '@mui/material/Modal';
import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const scrollToPosition = (position: number) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

    const [messages, setMessages] = useState<string[]>(['Welcome to the terminal! Type "help" for a list of commands.']);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands = ['help', 'clear', 'about', 'goto']; // List of recognized commands
    const validGotoOptions = ['Gil.h', 'Languages', 'Technologies', 'Experience', 'Hackathons']; // Valid options for the goto command

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
                // Call the function with the valid option
                goto(option);
              } else {
                setMessages([...messages, `> ${command}`, `Error: Check 'goto -h' for valid options`]);
              }
            }
          } else if( mainCommand === 'help') {
            setMessages([...messages, `> ${command}`, `Recognized commands: ${commands.join(', ')}`]);

          } else {
            setMessages([...messages, `> ${command}`, `Command recognized: ${mainCommand}`]);
          }
        } else {
          setMessages([...messages, `> ${command}`, `Error: Unrecognized command '${command}'`]);
        }
    };

    const goto = (option: string) => {
        // Implement your functionality for the goto command here
        console.log(`Navigating to ${option}`);
        // For demonstration, we'll just log the option to the console
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

    return (
        <section className='grid grid-cols-2 gap-10 mx-28 mt-28 items-center place-items-center'>
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
            <button className='w-full my-8 mx-10 hover:scale-105 transition duration-300 ease-in-out text-xl bg-sky-950 p-3 rounded-xl bg-opacity-50 focus:outline-none' onClick={handleOpen}>
                LAUNCH TERMINAL 
            </button>
        </section>
    )
}

export default Terminal