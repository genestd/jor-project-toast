import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
         <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant} close={toast.close}>
            {toast.message}
          </Toast>
        </li>
       ))}
    </ol>
  );
}

export default ToastShelf;
