import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import cl from "classnames";

interface BaseProps {
  label?: string;
  className?: string;
  children?: ReactNode;
  labelClassName?: string;
}

const BaseInput: FC<BaseProps> = ({
  label,
  className,
  children,
  labelClassName,
}) => {
  return (
    <div className={cl(className)}>
      {label && (
        <label className={cl(styles.label, labelClassName)}>{label}</label>
      )}
      {children}
    </div>
  );
};

export default BaseInput;
