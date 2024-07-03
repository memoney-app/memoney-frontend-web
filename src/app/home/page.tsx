"use client";

import React, { useState } from "react";
// import { useRouter } from "next/router";
import * as styles from "../../css/home.css";
import EventContainer from "@/components/EventContainer";
import Search from "/public/images/Search.svg";
import Sort from "/public/images/Sort.svg";
import Rectangle from "/public/images/Rectangle.svg";
import DropdownWrapper from "../../hooks/DropdownWrapper";

const dropdownOptions = [
  { value: "금액순", label: "금액순" },
  { value: "최신순", label: "최신순" },
  { value: "지출순", label: "지출순" },
  { value: "수입순", label: "수입순" },
];

const Home: React.FC = () => {
  // const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("카테고리별");

  const {
    showDropdown,
    dropdownState,
    dropdownRef,
    handleDropdownItemClick,
    handleSortClick,
  } = DropdownWrapper("금액순", dropdownOptions);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category: "카테고리별" | "사람별") => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.main}>
      <div className={styles.search_container}>
        <Search />
        <input
          type="text"
          placeholder="카테고리, 인물 검색..."
          className={styles.search}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.Home_Category}>카테고리</div>
      <div className={styles.main_select_container}>
        <div
          className={`${styles.main_select_element} ${
            selectedCategory === "카테고리별"
              ? styles.activeElement
              : styles.inactiveElement
          }`}
          onClick={() => handleCategoryClick("카테고리별")}
        >
          카테고리별
        </div>
        <div
          className={`${styles.main_select_element} ${
            selectedCategory === "사람별"
              ? styles.activeElement
              : styles.inactiveElement
          }`}
          onClick={() => handleCategoryClick("사람별")}
        >
          사람별
        </div>
        <div ref={dropdownRef} className={styles.main_select_element_list}>
          <div className={styles.main_sort_container} onClick={handleSortClick}>
            <Sort />
            <div className={styles.main_sort_dropdownState}>
              {dropdownState}
            </div>
            <Rectangle className={styles.rectangle} />
          </div>
          {showDropdown && (
            <div className={styles.dropdown_content}>
              {dropdownOptions.map((option) => (
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
      </div>
      <EventContainer eventName="결혼식" income={1000000} outcome={222200} />
      <EventContainer eventName="장례식" income={1000000} outcome={222200} />
      <EventContainer eventName="생일" income={1000000} outcome={222200} />
      <EventContainer eventName="돌잔치" income={1000000} outcome={222200} />
      <EventContainer eventName="세뱃돈" income={1000000} outcome={222200} />
    </div>
  );
};

export default Home;
