import React from 'react';
import ToastShelf from '../ToastShelf/ToastShelf';
import Button from '../Button';
import { ToastContext } from '../ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { createToast } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (!toastMessage) {
      return;
    }

    createToast({ message: toastMessage, variant: toastVariant });
    setToastMessage('');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput} 
              value={toastMessage} 
              onChange={(evt) => setToastMessage(evt.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label htmlFor={option} key={option}>
                  <input
                    id={option}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === toastVariant}
                    onChange={(evt) => setToastVariant(evt.target.value)}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
