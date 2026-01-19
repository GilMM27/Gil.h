"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface TerminalContextType {
  openTerminal: () => void;
  registerOpenHandler: (handler: () => void) => void;
}

const TerminalContext = createContext<TerminalContextType | null>(null);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openHandler, setOpenHandler] = useState<(() => void) | null>(null);

  const registerOpenHandler = useCallback((handler: () => void) => {
    setOpenHandler(() => handler);
  }, []);

  const openTerminal = useCallback(() => {
    openHandler?.();
  }, [openHandler]);

  return (
    <TerminalContext.Provider value={{ openTerminal, registerOpenHandler }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
};
