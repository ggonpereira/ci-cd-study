import { ComponentProps } from "react";

interface FormRootProps extends ComponentProps<"form"> {
  children: React.ReactNode;
}

export const FormRoot = ({ children, ...props }: FormRootProps) => {
  return (
    <form className="mt-[60px] flex flex-col gap-4" {...props}>
      {children}
    </form>
  );
};
