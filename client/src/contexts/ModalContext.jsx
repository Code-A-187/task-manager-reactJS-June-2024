import { createContext, useContext, useState,  } from "react";

const ModalContext = createContext();

export function ModalContextProvider({ children }){
    const [modal, setModal] = useState(false);
    const [modalProps, setModalProps] = useState({});
  
    const openModal = (event) => {
      event.preventDefault();
      const {
        target: {
          dataset: { modal, taskId }
        }
      } = event;
      if (modal) 
        setModal(modal);
      if (taskId) {
        setModalProps({ taskId });
    }
    };
  
    const closeModal = () => {
      setModal('');
      setModalProps({});
    };

    return (
        <ModalContext.Provider value={{ modal, modalProps, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export function useModalContext() {
    return useContext(ModalContext);

}