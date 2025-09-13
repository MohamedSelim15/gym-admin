import React, { createContext, useContext, useState } from "react";
import Modal from "../../features/components/Modals/Modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalStack, setModalStack] = useState([]);

  const openModal = (content) => {
    setModalStack((prevStack) => [...prevStack, content]);
  };

  const closeModal = () => {
    setModalStack((prevStack) => prevStack.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalStack.map((content, index) => (
        <Modal
          key={index}
          isOpen={true}
          onClose={closeModal}
          zIndex={50 + index}
        >
          {content}
        </Modal>
      ))}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
