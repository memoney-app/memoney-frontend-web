import React from "react";
import * as styles from "../css/SortDropdown.css";
import Sort from "/public/images/Sort.svg";
import Rectangle from "/public/images/Rectangle.svg";

interface SortDropdownProps {
  showDropdown: boolean;
  dropdownVisible: boolean;
  dropdownState: string;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleSortClick: () => void;
  handleDropdownItemClick: (option: string) => void;
  options: { value: string; label: string }[];
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  showDropdown,
  dropdownVisible,
  dropdownState,
  dropdownRef,
  handleSortClick,
  handleDropdownItemClick,
  options,
}) => {
  return (
    <div ref={dropdownRef} className={styles.main_select_element_list}>
      <div className={styles.main_sort_container} onClick={handleSortClick}>
        <Sort />
        <div className={styles.main_sort_dropdownState}>{dropdownState}</div>
        <Rectangle className={styles.rectangle} />
      </div>
      {dropdownVisible && (
        <div
          className={`${styles.dropdown_content} ${
            showDropdown ? styles.showDropdown : styles.hideDropdown
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.dropdown_item} ${
                option.value === dropdownState
                  ? styles.dropdown_selectedItem
                  : ""
              }`}
              onClick={() => handleDropdownItemClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
