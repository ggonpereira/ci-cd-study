import { useState } from "react";
import { useDashboardContext } from "../../../../../app/hooks/useDashboard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const transactions = [
  {
    amount: 150,
    date: "05/12/2023",
    title: "Lunch",
    type: "expense",
    category: "food",
  },
];

export const useTransactionsController = () => {
  const { areValuesHidden } = useDashboardContext();

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return {
    areValuesHidden,
    isInitialLoading,
    isLoading,
    setIsLoading,
    setIsInitialLoading,
    transactions: [] as any[],
  };
};
