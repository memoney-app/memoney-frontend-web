import React, { useEffect, useRef } from "react";
import cn from "clsx";

interface DropdownWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showUserDropdown: boolean;
  setShowUserDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  showUserDropdown,
  setShowUserDropdown,
  children,
  className,
  ...rest
}) => {
  const userDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // 클릭된 대상이 드롭다운 영역 내부에 속하지 않으면 드롭다운 닫기
      if (
        showUserDropdown &&
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node) &&
        !event.target.closest("button")
      ) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showUserDropdown, setShowUserDropdown]);

  return (
    <div {...rest} className={cn(className)} ref={userDropdownRef}>
      {children}
    </div>
  );
};

export default DropdownWrapper;
