import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500); 
    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div className="alert">
      {message}
    </div>
  );
};

export default Alert;
