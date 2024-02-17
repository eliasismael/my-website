import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <>
      <div
        className="w-screen z-50 h-screen fixed inset-0 opacity-50 bg-black"
        onClick={onClose}
      ></div>

      <div className="w-80 h-60 bg-gray-300 rounded-xl opacity-100 m-auto fixed inset-0 z-50 p-2">
        <span className="text-white" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </>
  );
};
