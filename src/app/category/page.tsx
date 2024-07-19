"use client";

import React, { useState, useEffect } from "react";
import * as styles from "../../css/home.css";
import EventContainer from "@/components/EventContainer";
import Sort from "/public/images/Sort.svg";
import Rectangle from "/public/images/Rectangle.svg";
import DropdownWrapper from "../../hooks/DropdownWrapper";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";

interface Event {
  name: string;
  date: string;
  income: number;
  outcome: number;
}

const dropdownOptions = [
  { value: "금액순", label: "금액순" },
  { value: "최신순", label: "최신순" },
  { value: "지출순", label: "지출순" },
  { value: "수입순", label: "수입순" },
];

const initialEvents: Event[] = [
  { name: "결혼식", date: "2023-07-01", income: 1000000, outcome: 222200 },
  { name: "장례식", date: "2023-06-15", income: 900000, outcome: 300000 },
  { name: "생일", date: "2023-05-20", income: 800000, outcome: 150000 },
  { name: "돌잔치", date: "2023-07-10", income: 1200000, outcome: 400000 },
  { name: "세뱃돈", date: "2023-01-01", income: 2000000, outcome: 500000 },
];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("카테고리별");
  const [events, setEvents] = useState(initialEvents);

  const {
    showDropdown,
    dropdownVisible,
    dropdownState,
    dropdownRef,
    handleDropdownItemClick,
    handleSortClick,
  } = DropdownWrapper("금액순", dropdownOptions);

  const handleCategoryClick = (category: "카테고리별" | "사람별") => {
    setSelectedCategory(category);
  };

  const sortEvents = (events: Event[], sortType: string): Event[] => {
    let sortedEvents = [...events];
    switch (sortType) {
      case "금액순":
        sortedEvents.sort(
          (a, b) => b.income + b.outcome - (a.income + a.outcome)
        );
        break;
      case "최신순":
        sortedEvents.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "지출순":
        sortedEvents.sort((a, b) => b.outcome - a.outcome);
        break;
      case "수입순":
        sortedEvents.sort((a, b) => b.income - a.income);
        break;
      default:
        break;
    }
    return sortedEvents;
  };

  const sortedEvents = sortEvents(events, dropdownState);

  return (
    <div className="main">
      <Header />
      <SearchBar initialEvents={initialEvents} onSearch={setEvents} />
      {/* <div className={styles.search_container}>
        <Search />
        <input
          type="text"
          placeholder="카테고리, 인물 검색..."
          className={styles.search}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div> */}

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
          {dropdownVisible && (
            <div
              className={`${styles.dropdown_content} ${
                showDropdown ? styles.showDropdown : styles.hideDropdown
              }`}
            >
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
      {sortedEvents.map((event, index) => (
        <EventContainer
          key={index}
          eventName={event.name}
          income={event.income}
          outcome={event.outcome}
        />
      ))}
      <BottomNav />
    </div>
  );
};

export default Home;
