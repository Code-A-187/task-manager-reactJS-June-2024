import React from 'react';
import Modal from '../modal/Modal';
import './ErrorModal.css';

export default function ErrorModal({ message, closeFn }) {
    if (!message) return null; // If no message, don't render the modal

    return (
        <Modal open={!!message} closeFn={closeFn}>
            <div className="error-modal-overlay" onClick={closeFn}>
                <div className="error-modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2 className="error-modal-title">Error</h2>
                    <p className="error-modal-message">{message}</p>
                    <button className="error-modal-close-btn" onClick={closeFn}>
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
}