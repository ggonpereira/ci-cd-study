import { createContext, useCallback, useEffect, useState } from "react";

interface DashboardContextValue {
  areValuesHidden: boolean;
  toggleValuesVisibility: () => void;
}

interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue,
);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [areValuesHidden, setAreValuesVisible] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((oldValue) => {
      localStorage.setItem(
        "finovia:areValuesHidden",
        JSON.stringify(!oldValue),
      );

      return !oldValue;
    });
  }, []);

  useEffect(() => {
    const storedValue = localStorage.getItem("finovia:areValuesHidden");

    if (storedValue !== null) {
      const isHiddenByLS = JSON.parse(storedValue);
      if (areValuesHidden !== isHiddenByLS) {
        setAreValuesVisible(isHiddenByLS);
      }
    } else {
      localStorage.setItem(
        "finovia:areValuesHidden",
        JSON.stringify(areValuesHidden),
      );
    }
  }, [areValuesHidden]);

  return (
    <DashboardContext.Provider
      value={{ areValuesHidden, toggleValuesVisibility }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
