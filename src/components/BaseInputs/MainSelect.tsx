import { ChangeEvent, FC, ReactNode, useRef } from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import { InputStyle } from "./MainInput";

interface Props {
  onChange?: (val: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string | number;
  disabled?: boolean;
  values?: { name: string; status?: number }[];
  children?: ReactNode;
  onFocus?: () => void;
  inputStyle?: InputStyle;
  placeholder?: string;
  defaultValue?: string | number;
}

const MainSelect: FC<Props> = ({
  className,
  values,
  children,
  onFocus,
  placeholder,
  inputStyle = InputStyle.white,
  defaultValue,
  ...others
}) => {
  const selectInputRef = useRef<any>();

  return (
    <select
      ref={selectInputRef}
      defaultValue={defaultValue}
      className={cl(
        className,
        "w-full mb-2",
        styles.inputBox,
        styles[inputStyle]
      )}
      onFocus={onFocus}
      {...others}
    >
      {!children ? (
        <>
          <option className="opacity-0" value={undefined} hidden>
            {placeholder}
          </option>
          {values?.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </>
      ) : (
        children
      )}
    </select>
  );
};

export default MainSelect;
