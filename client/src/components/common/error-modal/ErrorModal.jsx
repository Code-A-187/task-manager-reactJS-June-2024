import React from 'react';

import './ErrorModal.css';

export default function ErrorModal({ message, closeFn}) {
if (!message) return null;
  return (
    <Modal open={open} closeFn={closeFn}> 
        <div className="error-modal-overlay" onClick={onClose}>
            <div className="error-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Error</h2>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
            </div>
        </div>
    </Modal>
   
   );
}