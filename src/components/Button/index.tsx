import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  loading,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `flex items-center justify-center text-xs font-semibold leading-5 h-12 px-12 rounded-lg
        disabled:cursor-not-allowed disabled:opacity-50 transition-colors ease-out group uppercase bg-main-yellow hover:bg-yellow-500 text-main-brown`,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
};
function className(arg0: string, arg1: { "bg-yellow-600 hover:bg-yellow-500 text-main-brown": boolean; "bg-main-brown hover:bg-orange-800 text-white": boolean; "bg-white hover:bg-gray-100 text-black-500": boolean; "bg-yellow-400 hover:bg-yellow-500 text-black-500": boolean; }, className: any) {
  throw new Error("Function not implemented.");
}

