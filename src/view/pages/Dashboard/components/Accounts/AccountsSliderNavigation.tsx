import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface AccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export const AccountsSliderNavigation = ({
  isBeginning,
  isEnd,
}: AccountsSliderNavigationProps) => {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <button
        className="flex items-center justify-center rounded-full py-3 pl-[10px] pr-[14px] transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon width={24} height={24} />
      </button>

      <button
        className="flex items-center justify-center rounded-full py-3 pl-[14px] pr-[10px] transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon width={24} height={24} />
      </button>
    </div>
  );
};
