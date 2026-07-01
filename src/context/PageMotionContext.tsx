import { createContext, useContext, useState, type ReactNode } from "react";

interface PageMotionContextValue {
  isReady: boolean;
  setReady: () => void;
}

const PageMotionContext = createContext<PageMotionContextValue>({
  isReady: false,
  setReady: () => undefined,
});

export function usePageMotion() {
  return useContext(PageMotionContext);
}

export function PageMotionProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <PageMotionContext.Provider value={{ isReady, setReady: () => setIsReady(true) }}>
      {children}
    </PageMotionContext.Provider>
  );
}
