import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "active:bg flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue-900 px-6 font-medium tracking-[-0.5px] text-white transition-all hover:bg-blue-800 focus:bg-blue-950 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    >
      {!isLoading && children}

      {isLoading && <Spinner className="h-6 w-6" />}
    </button>
  );
};
