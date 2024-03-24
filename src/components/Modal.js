import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    {/* Add your login form or component here */}
                    <h2>Login</h2>
                    {/* Add your login form or component here */}
                </div>
            </div>
        )
    );
};

export default Modal;
