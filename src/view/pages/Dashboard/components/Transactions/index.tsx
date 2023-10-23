import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/constants/months";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { HeaderFilters } from "./HeaderFilters";
import { SliderNavigation } from "./SliderNavigation";
import { SliderOption } from "./SliderOption";
import { Transaction } from "./Transaction";

export const Transactions = () => {
  const width = useWindowWidth();

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-2xl bg-gray-100 p-10 ">
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

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto pr-2">
        <Transaction
          amount={150}
          date="05/12/2023"
          title="Lunch"
          type="expense"
          category="food"
        />
        <Transaction
          amount={12}
          date="15/07/2023"
          title="Salary"
          type="income"
        />
      </div>
    </div>
  );
};
