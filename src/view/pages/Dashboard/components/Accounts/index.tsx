import { Swiper, SwiperSlide } from "swiper/react";
import { AccountCard } from "./AccountCard";

import "swiper/css";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";
import { iconsMap } from "../../../../components/icons/BankAccountTypeIcon/iconsMap";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";

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

export const Accounts = () => {
  const {
    areValuesHidden,
    toggleValuesVisibility,
    sliderState,
    setSliderState,
    windowWidth,
    isLoading,
  } = useAccountsController();

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

          <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth >= 500 ? 2.2 : 1.2}
                onSlideChange={(swiper) => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <div
                  className="mb-4 flex items-center justify-between"
                  slot="container-start"
                >
                  <span className="text-lg font-bold tracking-[-1px]">
                    My accounts
                  </span>

                  <SliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                {accounts.map((account) => (
                  <SwiperSlide key={account.name}>
                    <AccountCard
                      balance={account.balance}
                      color={account.color}
                      icon={account.icon as keyof typeof iconsMap}
                      name={account.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
