import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface ToastContextValue {
  message: string | null;
  showToast: (message: string) => void;
  clearToast: () => void;
}

const ToastContext = createContext<ToastContextValue>({
  message: null,
  showToast: () => undefined,
  clearToast: () => undefined,
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const clearToast = useCallback(() => setMessage(null), []);

  const showToast = useCallback((text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(null), 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ message, showToast, clearToast }}>
      {children}
    </ToastContext.Provider>
  );
}
