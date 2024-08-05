import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import ModalManager from './ModalManager';

export default function Layout () {
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = event => {
      event.preventDefault();
      const {
        target: {
          dataset: { modal }
        }
      } = event;
      if (modal) setModalOpen(modal);
    };
  
    const closeModal = () => {
      setModalOpen('');
    };
  return (
    <div className="flex h-screen font-[sans-serif]">

        <nav className="bg-[#121e31] h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] tracking-wide overflow-auto z-40">
          <SideBar />
        </nav>

      <div className="flex flex-col flex-1 ml-[250px]">
        
          <header className="min-h-[60px] tracking-wide bg-white shadow relative z-50">
              <Header openModal={openModal} />
          </header>
          <main className="bg-gray-50 px-4 py-12">
              <Outlet />
          </main>
            <ModalManager closeFn={closeModal} modal={modalOpen} />
      </div>
    </div>
  );
};