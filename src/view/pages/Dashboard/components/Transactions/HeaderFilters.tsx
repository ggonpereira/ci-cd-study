import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";

export const HeaderFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="flex items-center gap-2 py-3">
        <TransactionsIcon />

        <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
          Transactions
        </span>

        <ChevronDownIcon className="h-6 w-6 text-gray-900" />
      </button>

      <button className="p-3">
        <FilterIcon />
      </button>
    </div>
  );
};
