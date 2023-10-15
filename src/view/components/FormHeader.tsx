import { Link } from "react-router-dom";

interface FormHeaderProps {
  title: string;
  ctaHelperText: string;
  ctaText: string;
  ctaLink: string;
}

export const FormHeader = ({
  title,
  ctaHelperText,
  ctaText,
  ctaLink,
}: FormHeaderProps) => {
  return (
    <header className="align-center flex flex-col justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold leading-8">{title}</h1>

      <p className="space-x-2 tracking-[-0.5px]">
        <span className="text-gray-700">{ctaHelperText}</span>

        <Link to={ctaLink} className="font-medium text-blue-900">
          {ctaText}
        </Link>
      </p>
    </header>
  );
};
