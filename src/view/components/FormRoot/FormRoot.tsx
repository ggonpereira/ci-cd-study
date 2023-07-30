interface FormRootProps {
  children: React.ReactNode;
}

export const FormRoot = ({ children }: FormRootProps) => {
  return <form className="mt-[60px] flex flex-col gap-4">{children} </form>;
};
