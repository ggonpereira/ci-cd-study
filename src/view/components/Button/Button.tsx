import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="active:bg h-12 rounded-2xl bg-blue-900 px-6 font-medium tracking-[-0.5px] text-white transition-all hover:bg-blue-800 focus:bg-blue-950 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
    >
      {children}
    </button>
  );
};
