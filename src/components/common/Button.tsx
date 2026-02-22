import type { ReactNode } from "react";

interface ButtonTypes {
  children: ReactNode;
  className?: string;
  type: "submit" | "social";
  disabled?: boolean;
  onClick?: () => void;
}

const baseButtonStyles =
  "font-semibold rounded-lg cursor-pointer transition-all duration-300 ease-in-out";

const socialButtonStyles =
  "w-168 h-10 flex gap-2 justify-center items-center py-2 border border-black-20 bg-white-100";

const submitButtonStyles =
  "w-full bg-primary-100 text-sm md:text-base text-white py-2 mt-1 md:mt-2 h-9 shadow-md";

export default function Button({
  children,
  className,
  onClick,
  disabled,
  type,
}: ButtonTypes) {
  const hoverStyles = {
    social:
      "hover:border-primary-100 hover:scale-105 hover:shadow-md hover:text-primary-100",
    submit:
      "hover:bg-primary-100/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
    disabled:
      "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none hover:bg-none hover:border-black-20",
  };

  return (
    <button
      className={`
        ${baseButtonStyles} 
        ${className} 
        ${type === "social" && socialButtonStyles} 
        ${type === "submit" && submitButtonStyles}
        ${disabled ? hoverStyles.disabled : type === "social" ? hoverStyles.social : hoverStyles.submit}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
