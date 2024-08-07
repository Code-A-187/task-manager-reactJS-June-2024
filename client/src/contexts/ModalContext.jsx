import { createContext, useContext, useState,  } from "react";

const ModalContext = createContext();

export function ModalContextProvider({ children }){
    const [modal, setModal] = useState(false);
  
    const openModal = event => {
      event.preventDefault();
      const {
        target: {
          dataset: { modal }
        }
      } = event;
      if (modal) setModal(modal);
    };
  
    const closeModal = () => {
      setModal('');
    };

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export function useModalContext() {
    return useContext(ModalContext);

}