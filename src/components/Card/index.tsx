import cl from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
  title?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cl(
        "bg-white rounded-md w-full max-w-[600px] overflow-hidden",
        styles.card,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
