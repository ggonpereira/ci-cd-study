import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-gray-100 bg-gradient-to-r from-gray-100 to-transparent py-4 pl-[10px] pr-[14px]"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-gray-100 bg-gradient-to-l from-gray-100 to-transparent py-4 pl-[14px] pr-[10px]"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
};
