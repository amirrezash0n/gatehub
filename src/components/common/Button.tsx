interface ButtonTypes {
  children: string;
  className?: string;
  onClick?: () => void;
}

const butonsStyles =
  "w-80 bg-blue-500 text-white py-2 h-9 cursor-pointer rounded-lg";

export default function Button({ children, className, onClick }: ButtonTypes) {
  return (
    <button className={`${butonsStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
