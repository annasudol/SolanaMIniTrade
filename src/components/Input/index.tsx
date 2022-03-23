import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { useState } from "react"
import { FieldAttributes, FieldAttributesProps } from "../FieldAttributes";

interface BaseProps {
  fieldAttributesProps?: Omit<FieldAttributesProps, "onLabelClick">;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseProps {
  children?: React.ReactNode
}


export const Input: React.FC<InputProps> = ({
  className,
  fieldAttributesProps,
  children,
  ...props
}) => {
  const hasError = !!fieldAttributesProps?.error;
  const classes = clsx(
    `border h-12 bg-white border-2 border-main-yellow text-gray-900 placeholder-gray-400 outline-none px-5 w-full text-sm rounded-lg`,
    {
      "cursor-not-allowed": props.disabled,
      "border-black-200 focus:border-yellow-700": !hasError,
      "border-red-400 focus:border-red-400 text-red-400": hasError
    },
    className
  );

  return (
    <div className="relative">
      <FieldAttributes {...fieldAttributesProps}>
      <input className={classes} {...(props as InputProps)} />
      </FieldAttributes>
      {children}
    </div>
  );
};
