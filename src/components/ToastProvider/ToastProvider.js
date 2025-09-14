import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const deleteToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const createToast = (message, variantSelected) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Date.now(), message, variant: variantSelected },
    ]);
  };

  const clearToasts = () => {
    setToasts([]);
  };


  
  return (
    <ToastContext.Provider
      value={{ toasts, deleteToast, createToast, clearToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
