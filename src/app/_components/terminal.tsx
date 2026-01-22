"use client";

import Modal from "@mui/material/Modal";
import React, { useState, useEffect, useRef } from "react";
import { useTerminal } from "./TerminalContext";

const Terminal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (target?: string) => {
    setOpen(false);
    setTimeout(() => {
      if (target) {
        scrollToComponent(target);
      }
    }, 250);
  };

  const [openCV, setOpenCV] = useState(false);
  const handleOpenCV = () => setOpenCV(true);
  const handleCloseCV = () => setOpenCV(false);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [messages, setMessages] = useState<string[]>([
    'Welcome to the terminal! Run "help" for more information.',
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = ["help", "clear", "ls", "open", "goto"];
  const lsOutputs = ["CV.pdf"];
  const validGotoOptions = [
    "Gil.h",
    "Languages",
    "Technologies",
    "Experience",
    "Competitions",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      handleCommand(trimmedInput);
      setInput("");
    }
  };

  const handleCommand = (command: string) => {
    const commandParts = command.split(" ");
    const mainCommand = commandParts[0] ?? "";

    if (commands.includes(mainCommand)) {
      setMessages([...messages, `> ${command}`]);

      if (mainCommand === "clear") {
        setMessages([]);
      } else if (mainCommand === "goto") {
        if (commandParts[1] === "-h") {
          setMessages([
            ...messages,
            `> ${command}`,
            `Valid options for 'goto' command: ${validGotoOptions.join(", ")}`,
          ]);
        } else {
          const option = commandParts[1] ?? "";
          if (validGotoOptions.includes(option)) {
            setMessages([
              ...messages,
              `> ${command}`,
              `Navigating to ${option}...`,
            ]);
            setTimeout(() => handleClose(option), 1000);
          } else {
            setMessages([
              ...messages,
              `> ${command}`,
              `Error: Run 'goto -h' for valid options`,
            ]);
          }
        }
      } else if (mainCommand === "help") {
        setMessages([
          ...messages,
          `> ${command}`,
          `This is a terminal I programmed to be used as a fun alternative way of learning about me and a bit of how a linux terminal works! Just type in the following commands and hit enter to see what happens. Recognized commands: ${commands.join(
            ", ",
          )}`,
        ]);
      } else if (mainCommand === "ls") {
        if (commandParts.length === 1) {
          setMessages([...messages, `> ${command}`, ...lsOutputs]);
        } else {
          setMessages([
            ...messages,
            `> ${command}`,
            `Error: Run 'ls' without any arguments`,
          ]);
        }
      } else if (mainCommand === "open") {
        if (commandParts[1] === "-h") {
          setMessages([
            ...messages,
            `> ${command}`,
            `To open a file, run 'open ' followed by the file name with its extension. To see valid options, run 'ls' which lists the available files in your current directory. Example: open CV.pdf`,
          ]);
        } else if (commandParts[1] === "CV.pdf") {
          setMessages([...messages, `> ${command}`, `Opening CV...`]);

          setTimeout(() => {
            handleOpenCV();
          }, 1000);
        } else {
          setMessages([
            ...messages,
            `> ${command}`,
            `Error: Run 'open -h' for valid options`,
          ]);
        }
      } else {
        setMessages([
          ...messages,
          `> ${command}`,
          `Command recognized: ${mainCommand}`,
        ]);
      }
    } else {
      setMessages([
        ...messages,
        `> ${command}`,
        `Error: Unrecognized command '${command}'`,
      ]);
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const OpenTerminal = () => {
    if (messages === null || messages.length === 0) {
      setMessages([
        'Welcome to the terminal! Run "help" for more information.',
      ]);
    }
    handleOpen();
    setTimeout(() => handleClick(), 100);
  };

  const { registerOpenHandler } = useTerminal();

  useEffect(() => {
    registerOpenHandler(OpenTerminal);
  }, [registerOpenHandler]);

  return (
    <section>
      <Modal
        open={openCV}
        onClose={handleCloseCV}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="z-50"
      >
        <div className="absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-neutral-900 p-4 shadow-lg focus:outline-none">
          <iframe src={"/assets/Resume.pdf"} className="h-full w-full" />
        </div>
      </Modal>

      <Modal
        open={open}
        onClose={() => handleClose(undefined)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-neutral-900 p-4 focus:outline-none">
          <div
            className="flex h-full w-full flex-col overflow-y-auto bg-black"
            onClick={handleClick}
          >
            <div className="flex-1">
              {messages.map((message, index) => (
                <div key={index} className="mb-2 p-2">
                  {message}
                </div>
              ))}
              <form onSubmit={handleSubmit} className="mb-2 flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-black p-2 focus:outline-none"
                  placeholder=">"
                />
              </form>
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </Modal>

      <section
        className="flex justify-center pb-30 text-center"
        onClick={OpenTerminal}
      >
        <section className="w-fit bg-radial from-blue-950 to-black">
          <div className="px-30 py-10 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
            <div className="text-2xl text-gray-500">Rather not scroll?</div>
            <div className="text-5xl text-blue-600">Try the terminal!</div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Terminal;
