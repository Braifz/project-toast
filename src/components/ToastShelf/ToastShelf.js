import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, deleteToast }) {
  if (!toasts.length) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
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
