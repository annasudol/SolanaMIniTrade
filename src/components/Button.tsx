import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  loading,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center text-xs font-semibold leading-5 h-12 px-12 rounded-lg disabled:cursor-not-allowed transition-colors ease-out group uppercase bg-main-yellow hover:bg-yellow-500 text-main-brown disabled:hover:bg-main-yellow w-[200px]"
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "processing..." : children}
    </button>
  );
};
