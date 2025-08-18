"use client";

import classNames from "classnames";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Modal = ({ children, title, onClose, className, isOpen }: ModalProps) => {
  const backdropClasses = classNames(
    "fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-[9999]",
    {
      "opacity-0 pointer-events-none": !isOpen,
      "opacity-100 bg-black/70": isOpen,
    }
  );

  const modalClasses = classNames(
    "bg-white rounded-xl shadow-lg transform transition-all duration-300",
    {
      "scale-95 opacity-0": !isOpen,
      "scale-100 opacity-100": isOpen,
    },
    className
  );

  return (
    <div className={backdropClasses}>
      <div className={modalClasses}>
        <div className="w-full flex justify-between px-4 py-2">
          <h1 className="text-2xl font-medium">{title}</h1>
          <IoClose
            onClick={onClose}
            aria-label="close modal button"
            className="cursor-pointer"
            size={30}
          />
        </div>
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
