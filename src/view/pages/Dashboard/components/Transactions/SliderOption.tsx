import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";

interface ISliderOption {
  index: number;
  isActive: boolean;
  month: string;
}

export const SliderOption = ({ index, isActive, month }: ISliderOption) => {
  const swiper = useSwiper();

  const swipeTo = () => {
    swiper.slideTo(index);
  };

  return (
    <button
      className={cn(
        "h-12 w-full select-none rounded-full px-6 text-sm font-medium tracking-[-0.5px] text-gray-700",
        isActive && "bg-white",
      )}
      onClick={swipeTo}
    >
      {month}
    </button>
  );
};
