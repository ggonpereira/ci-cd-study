import { useState } from "react";
import { useDashboardContext } from "../../../../../app/hooks/useDashboard";

export const useTransactionsController = () => {
  const { areValuesHidden } = useDashboardContext();

  const [isLoading, setIsLoading] = useState(false);

  return {
    areValuesHidden,
    isLoading,
    setIsLoading,
  };
};
