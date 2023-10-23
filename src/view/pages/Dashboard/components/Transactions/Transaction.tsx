import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import {
  CategoryIcon,
  IconType,
} from "../../../../components/icons/categories/CategoryIcon";
import { useTransactionsController } from "./useTransactionsController";

interface ITransactionProps {
  type: IconType;
  category?: string;
  title: string;
  date: string;
  amount: number;
}

const getIconStyles = (type: IconType) => {
  switch (type) {
    case "expense":
      return "bg-red-50 text-red-500";
    case "income":
      return "bg-green-50 text-green-900";
  }
};

const getAmountStyles = (type: IconType) => {
  switch (type) {
    case "expense":
      return "text-red-800";
    case "income":
      return "text-green-800";
  }
};

export const Transaction = ({
  type,
  category,
  title,
  date,
  amount,
}: ITransactionProps) => {
  const { areValuesHidden } = useTransactionsController();

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
      <div className="flex gap-3">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full",
            getIconStyles(type),
          )}
        >
          <CategoryIcon type={type} category={category} />
        </div>

        <div className="flex flex-col">
          <strong className="tracking-[-0.5px] text-gray-800">{title}</strong>

          <span className="text-sm text-gray-600">{date}</span>
        </div>
      </div>

      <span
        className={cn(
          "font-medium tracking-[-0.5px]",
          getAmountStyles(type),
          areValuesHidden && "blur-sm",
        )}
      >
        {type === "expense" && "-"} {formatCurrency(amount)}
      </span>
    </div>
  );
};
