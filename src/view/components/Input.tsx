import { CrossCircledIcon } from "@radix-ui/react-icons";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, className, id, error, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative flex flex-col gap-2">
        <input
          {...props}
          id={inputId}
          name={name}
          className={cn(
            "peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-colors placeholder-shown:pt-0 focus:border-gray-800",
            error && "!border-red-900",
            className,
          )}
          placeholder=" "
          ref={ref}
        />

        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex items-center gap-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs ">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
