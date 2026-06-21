import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};