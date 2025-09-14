import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, deleteToast } = React.useContext(ToastContext);

  if (!toasts.length) {
    return null;
  }

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ variant, message, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            deleteToast={deleteToast}
            id={id}
            message={message}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
