import { ComponentProps } from "react";
import { cn } from "../../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "active:bg h-12 rounded-2xl bg-blue-900 px-6 font-medium tracking-[-0.5px] text-white transition-all hover:bg-blue-800 focus:bg-blue-950 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    >
      {children}
    </button>
  );
};
