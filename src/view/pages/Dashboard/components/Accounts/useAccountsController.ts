import { useState } from "react";
import { useDashboardContext } from "../../../../../app/hooks/useDashboard";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

const accounts = [
  {
    balance: 124,
    color: "#7950F2",
    icon: "CHECKING",
    name: "Nubank",
  },
  {
    balance: 15100,
    color: "#252525",
    icon: "INVESTMENT",
    name: "XP",
  },
  {
    balance: 233011,
    color: "#44ff63",
    icon: "CASH",
    name: "Cash",
  },
];

export const useAccountsController = () => {
  const windowWidth = useWindowWidth();
  const { areValuesHidden, toggleValuesVisibility } = useDashboardContext();

  const [isLoading, setIsLoading] = useState(false);
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesHidden,
    toggleValuesVisibility,
    isLoading,
    setIsLoading,
    accounts: [],
  };
};
