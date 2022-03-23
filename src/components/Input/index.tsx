import clsx from "clsx";
import { InputHTMLAttributes } from "react";

import { FieldAttributes, FieldAttributesProps } from "../FieldAttributes";

interface BaseProps {
  fieldAttributesProps?: Omit<FieldAttributesProps, "onLabelClick">;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseProps {
  multiline?: false;
}


export type TextFieldProps = InputProps;

export const TextField: React.FC<TextFieldProps> = ({
  className,
  fieldAttributesProps,
  ...props
}) => {
  const hasError = !!fieldAttributesProps?.error;
  const classes = clsx(
    `border h-12 border-solid bg-gray-white border-gray-300 text-gray-900 placeholder-gray-400 outline-none px-5 w-full text-sm`,
    {
      "cursor-not-allowed": props.disabled,
      "border-black-200 dark:border-black-400 focus:border-yellow-700": !hasError,
      "border-red-400 focus:border-red-400 text-red-400 dark:text-red-400": hasError
    },
    className
  );

  return (
    <FieldAttributes {...fieldAttributesProps}>
     <input className={classes} {...(props as InputProps)} />
    </FieldAttributes>
  );
};
