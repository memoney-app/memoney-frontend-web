import React from "react";
import * as styles from "../css/SelectButton.css";

interface SelectButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`${styles.main_select_element} ${
        isSelected ? styles.activeElement : styles.inactiveElement
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SelectButton;
