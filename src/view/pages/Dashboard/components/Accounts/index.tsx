import "swiper/css";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountsListing } from "./AccountsListing";
import { useAccountsController } from "./useAccountsController";

export const Accounts = () => {
  const { areValuesHidden, toggleValuesVisibility, isLoading } =
    useAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-blue-900 p-10 text-white md:px-4 md:py-8">
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-10 w-10 fill-white text-blue-950/50" />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="flex flex-col gap-2 text-white">
            <span className="tracking-[-0.5px]">Total balance</span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-3.5xl font-bold tracking-[-1px] transition-all",
                  areValuesHidden && "blur-md",
                )}
              >
                {formatCurrency(2500)}
              </strong>

              <button
                className="flex h-8 w-8 items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={areValuesHidden} />
              </button>
            </div>
          </div>

          <AccountsListing />
        </>
      )}
    </div>
  );
};
