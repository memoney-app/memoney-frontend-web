import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../css/home.module.css";
import EventContainer from "@/components/EventContainer";
import DropdownWrapper from "../hooks/DropdownWrapper";

export default function Home() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownState, setDropdownState] = useState("금액순");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDropdownItemClick = (option) => {
    // console.log("Selected option:", option);
    setShowDropdown(false); // 드롭다운 닫기
    // 여기서 선택된 옵션(option)에 따라 필요한 동작을 수행할 수 있습니다.
    // 예를 들어, 옵션에 따라 정렬을 변경하거나 다른 작업을 수행할 수 있습니다.
    setDropdownState(option);
  };

  return (
    <main className={styles.main}>
      <input
        type="text"
        placeholder="카테고리, 인물 검색..."
        className={styles["search"]}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={styles.Home_Category}>카테고리</div>
      <button
        className={styles.Home_Button}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {dropdownState}
      </button>
      {showDropdown && (
        <DropdownWrapper
          showUserDropdown={showDropdown}
          setShowUserDropdown={setShowDropdown}
          className="my-dropdown"
        >
          <div onClick={() => handleDropdownItemClick("금액순")}>금액순</div>
          <div onClick={() => handleDropdownItemClick("최신순")}>최신순</div>
          <div onClick={() => handleDropdownItemClick("사람별")}>사람별</div>
        </DropdownWrapper>
      )}
      <EventContainer eventName="결혼식" income={1000000} outcome={222200} />
    </main>
  );
}
