import { createContext, ReactNode, useState } from "react";

interface ToasterType {
  type: string;
  message: string;
}

interface ToasterState {
  toaster: ToasterType;
  setToaster: (toaster: ToasterType) => void;
}

const defaultToaster = {
  type: "",
  message: "",
};

const ToasterContext = createContext<ToasterState>({
  toaster: defaultToaster,
  setToaster: () => {},
});

const ToasterProvider = ({ children }: { children: ReactNode }) => {
  const [toaster, setToaster] = useState<ToasterType>(defaultToaster);

  return (
    <ToasterContext.Provider value={{ toaster, setToaster }}>
      {children}
    </ToasterContext.Provider>
  );
};

export { ToasterProvider, ToasterContext, defaultToaster };
export type { ToasterType, ToasterState };
