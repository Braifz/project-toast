import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [variantSelected, setVariantSelected] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  };

  const handleToast = () => {
    setShowToast(!showToast);
    console.log(variantSelected)
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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

        {showToast && (
          <Toast
            variant={variantSelected}
            message={message}
          />
        )}

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
            <Button onClick={handleToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
