import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button className="close-btn" onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
