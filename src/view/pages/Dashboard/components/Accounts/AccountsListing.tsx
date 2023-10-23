import { PlusIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { iconsMap } from "../../../../components/icons/BankAccountTypeIcon/iconsMap";
import { AccountCard } from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";

export const AccountsListing = () => {
  const { sliderState, setSliderState, windowWidth, accounts } =
    useAccountsController();

  return (
    <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
      {accounts.length === 0 && (
        <div className="mb-4 flex flex-col gap-4">
          <span className="text-lg font-bold tracking-[-1px]">My accounts</span>

          <button className="flex h-[172px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-blue-600 text-white">
            <div className="rounded-full border-2 border-dashed border-white p-2">
              <PlusIcon className="h-6 w-6" />
            </div>

            <div className="block w-32 text-center font-medium tracking-[-0.5px]">
              Create a new account
            </div>
          </button>
        </div>
      )}

      {accounts.length > 0 && (
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
      )}
    </div>
  );
};
