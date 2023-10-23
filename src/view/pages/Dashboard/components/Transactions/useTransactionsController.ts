import { useDashboardContext } from "../../../../../app/hooks/useDashboard";

export const useTransactionsController = () => {
  const { areValuesHidden } = useDashboardContext();

  return {
    areValuesHidden,
  };
};
