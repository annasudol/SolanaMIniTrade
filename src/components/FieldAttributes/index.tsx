import clsx from "clsx";
import uniqueId from "lodash/uniqueId";
import { cloneElement, isValidElement, useEffect, useState } from "react";

export interface FieldAttributesProps {
  label?: string;
  error?: string | false | string[];
  className?: string;
  defaultClassName?: string;
  onLabelClick?: () => void;
}

export const FieldAttributes: React.FC<FieldAttributesProps> = ({
  label,
  error,
  className,
  defaultClassName = "w-full mb-5",
  children,
  onLabelClick
}) => {
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setId(uniqueId("id-"));
  }, []);

  return (
    <div className={clsx("flex flex-col relative mb-12", defaultClassName, className)}>
      {label && (
        <label
          aria-hidden="true"
          className="mb-1 text-sm font-medium text-gray-600 select-none pl-2"
          htmlFor={id}
          onClick={() => onLabelClick?.()}
        >
          {label}
        </label>
      )}

      {label ? isValidElement(children) && cloneElement(children, { id }) : children}

      {error && (
        <small className="tg-caption-sm text-red-400 ml-2 mt-0.5 absolute top-full">
          {Array.isArray(error) ? error[0] : error}
        </small>
      )}
    </div>
  );
};
