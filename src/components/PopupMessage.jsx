import React, { useEffect } from 'react';

const PopupMessage = ({ message, type, onClose }) => {
  // Auto-close the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-4 py-2 rounded-md shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {message}
      <button
        onClick={onClose}
        className="ml-3 text-white font-bold"
      >
        ✕
      </button>
    </div>
  );
};

export default PopupMessage;
