import { useEffect, useRef, useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}
const DropdownWrapper = (
  initialState: string,
  options: DropdownOption[]
): {
  showDropdown: boolean;
  dropdownState: string;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleDropdownItemClick: (option: string) => void;
  handleSortClick: () => void;
  options: DropdownOption[];
} => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownState, setDropdownState] = useState(initialState);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownItemClick = (option: string) => {
    setDropdownState(option);
    setShowDropdown(false);
  };

  const handleSortClick = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return {
    showDropdown,
    dropdownState,
    dropdownRef,
    handleDropdownItemClick,
    handleSortClick,
    options,
  };
};

export default DropdownWrapper;
