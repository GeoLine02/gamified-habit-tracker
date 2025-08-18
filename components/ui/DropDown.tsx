"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { IoChevronDown } from "react-icons/io5";
import classNames from "classnames";

interface DropDownContextProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const DropDownContext = createContext<DropDownContextProps | undefined>(
  undefined
);

const useDropDown = () => {
  const ctx = useContext(DropDownContext);
  if (!ctx)
    throw new Error(
      "DropDown compound components must be used within <DropDown>"
    );
  return ctx;
};

interface DropDownProps {
  children: ReactNode;
}

const DropDown = ({ children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <DropDownContext.Provider value={{ isOpen, toggle, close }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropDownContext.Provider>
  );
};

// Button
const Button = ({ children }: { children: ReactNode }) => {
  const { toggle } = useDropDown();
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-lg border-2 border-medium-gray/20 px-3 py-2 shadow-sm transition-all duration-300 hover:bg-custom-green hover:text-white cursor-pointer"
    >
      {children}
      <IoChevronDown />
    </button>
  );
};

// Label
const Label = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-1 text-sm font-medium text-medium-gray select-none">
      {children}
    </div>
  );
};

// Menu (wrapper for items)
const Menu = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useDropDown();

  return (
    <div
      className={classNames(
        "absolute left-0 mt-2 overflow-hidden rounded-lg bg-white shadow-lg border-2 border-medium-gray/20 w-full ring-black/5 transition-all duration-300 origin-top z-50",
        isOpen
          ? "max-h-96 scale-y-100 opacity-100"
          : "max-h-0 scale-y-0 opacity-0"
      )}
    >
      {children}
    </div>
  );
};

// Item
const Item = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  const { close } = useDropDown();
  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "block w-full px-4 py-2 text-left text-sm hover:bg-custom-green transition-all duration-300 cursor-pointer hover:text-white"
      )}
    >
      {children}
    </button>
  );
};

// Attach subcomponents
DropDown.Button = Button;
DropDown.Label = Label;
DropDown.Menu = Menu;
DropDown.Item = Item;

export default DropDown;
