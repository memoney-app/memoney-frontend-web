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
  dropdownVisible: boolean;
  dropdownState: string;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleDropdownItemClick: (option: string) => void;
  handleSortClick: () => void;
  options: DropdownOption[];
} => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
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
    if (showDropdown) {
      setDropdownVisible(true);
    } else {
      const timeout = setTimeout(() => setDropdownVisible(false), 500); // 애니메이션 지속 시간과 일치하도록 설정
      return () => clearTimeout(timeout);
    }
  }, [showDropdown]);

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
    dropdownVisible,
    dropdownState,
    dropdownRef,
    handleDropdownItemClick,
    handleSortClick,
    options,
  };
};

export default DropdownWrapper;
