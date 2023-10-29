import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/constants/months";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import emptyStateImage from "../../../../../assets/empty_state.svg";
import { Spinner } from "../../../../components/Spinner";
import { IconType } from "../../../../components/icons/categories/CategoryIcon";
import { HeaderFilters } from "./HeaderFilters";
import { SliderNavigation } from "./SliderNavigation";
import { SliderOption } from "./SliderOption";
import { Transaction } from "./Transaction";
import { useTransactionsController } from "./useTransactionsController";

export const Transactions = () => {
  const width = useWindowWidth();
  const { transactions, isInitialLoading, isLoading } =
    useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-2xl bg-gray-100 p-10 ">
      {isInitialLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}

      {!isInitialLoading && (
        <header className="flex flex-col gap-6">
          <HeaderFilters />

          <div className="flex gap-4">
            <Swiper
              slidesPerView={width > 900 ? 3 : 2}
              spaceBetween="16px"
              centeredSlides
            >
              <SliderNavigation />

              {MONTHS.map((month, index) => (
                <SwiperSlide key={month}>
                  {({ isActive }) => (
                    <SliderOption
                      index={index}
                      isActive={isActive}
                      month={month}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </header>
      )}

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto pr-2">
        {(isLoading || !hasTransactions) && (
          <>
            <div className="flex h-full flex-col items-center justify-center gap-4">
              {isLoading && <Spinner />}

              {!isLoading && !hasTransactions && (
                <>
                  <img
                    src={emptyStateImage}
                    alt="No transactions found"
                    className="w-40"
                  />

                  <p className="text-gray-700">
                    We couldn&apos;t find any transactions!
                  </p>
                </>
              )}
            </div>
          </>
        )}

        {!isLoading && !isInitialLoading && hasTransactions && (
          <>
            {transactions.map((transaction) => (
              <Transaction
                key={`${transaction.type}-${transaction.title}`}
                amount={transaction.amount}
                date={transaction.date}
                title={transaction.title}
                type={transaction.type as IconType}
                category={transaction.category}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
