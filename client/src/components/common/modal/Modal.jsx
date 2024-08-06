import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ children, open = false, closeFn }) => {
  if (!open) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeFn();
    }
  };

return ReactDOM.createPortal(
    <div
      className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
      onClick={handleOverlayClick}
    >
      {children}
    </div>,
    modalRootEl
  );
};;

export default Modal;
