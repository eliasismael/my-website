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
        className="w-screen z-50 h-screen fixed inset-0 opacity-80 bg-black"
        onClick={onClose}
      ></div>
      <div className="h-fit w-4/5 sm:w-3/5 m-auto fixed inset-0 z-50">
        {children}
      </div>
    </>
  );
};
