import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variantSelected, setVariantSelected] = useState("notice");
  const [toasts, setToasts] = useState([]);

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const resetToast = () => {
    setVariantSelected("notice");
    setMessage("");
  };

  const handleToast = (e) => {
    e.preventDefault();

    setToasts((prevToasts) => [
      ...prevToasts,
      { id: Date.now(), message, variant: variantSelected },
    ]);

    resetToast();
  };

  const deleteToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} deleteToast={deleteToast} />

      <form onSubmit={handleToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={handleMessageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label key={variant} htmlFor={`variant-${variant}`}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variant === variantSelected}
                    onChange={(event) => {
                      setVariantSelected(event.target.value);
                    }}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
