import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  const close = React.useCallback((id) => {
    setToastList((currentToastList) => currentToastList.filter((toast) => toast.id !== id));
  } ,[setToastList]);
  const createToast = React.useCallback(({message, variant}) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
      close: close,
    }
    setToastList((currentToastList) => {
      const nextToastList = [...currentToastList, newToast];
      return nextToastList;
    });
  },[setToastList, close]);

  React.useEffect(() => {
    function escapeToClose(event) {
      if (event.key === 'Escape') {
        setToastList([]);
      }
    }
    window.addEventListener('keydown', escapeToClose);
    return () => window.removeEventListener()
  }, [])

  return (
    <ToastContext value={{
      toastList,
      createToast,
      close,
    }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
