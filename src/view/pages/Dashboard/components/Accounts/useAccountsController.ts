import { useState } from "react";
import { useDashboardContext } from "../../../../../app/hooks/useDashboard";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export const useAccountsController = () => {
  const windowWidth = useWindowWidth();
  const { areValuesHidden, toggleValuesVisibility } = useDashboardContext();

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
  };
};
