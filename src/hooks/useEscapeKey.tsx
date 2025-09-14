import React from "react";
import { ToastContext } from "../components/ToastProvider/ToastProvider";

const useEscapeKey = () => {
  const { clearToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        clearToasts();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clearToasts]);
};

export default useEscapeKey;
