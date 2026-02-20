import type { ReactNode } from "react";

interface ButtonTypes {
  children: ReactNode;
  className?: string;
  type: "submit" | "social";
  onClick?: () => void;
}

const butonsStyles =
  "w-80 bg-blue-500 text-white py-2 h-9 cursor-pointer rounded-lg";

export default function Button({
  children,
  className,
  onClick,
  // type,
}: ButtonTypes) {
  return (
    <button className={`${butonsStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
