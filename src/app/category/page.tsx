"use client";

import React, { useState } from "react";
import * as styles from "../../css/home.css";
import EventContainer from "@/components/EventContainer";
import DropdownWrapper from "../../hooks/DropdownWrapper";
import LogoHeader from "@/components/LogoHeader";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";
import SelectButton from "@/components/SelectButton";
import SortDropdown from "@/components/SortDropdown";
import { dropdownOptions } from "@/utils/dropdownOptions";
import { sortEvents } from "@/utils/sortEvents";
import { Event, CategoryEvent } from "@/types/Event";
import GraphComponent from "@/components/GraphComponent";

const initialEvents: CategoryEvent[] = [
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
    console.log(selectedCategory);
  };

  const sortedEvents = sortEvents(events, dropdownState);

  return (
    <div className="main">
      <LogoHeader />
      <SearchBar initialEvents={initialEvents} onSearch={setEvents} />
      <div className={styles.Main_Graph_Container}>
        <GraphComponent data={initialEvents} />
      </div>

      <div className={styles.Home_Title}>{selectedCategory}</div>
      <div className={styles.main_select_container}>
        <SelectButton
          text="카테고리별"
          isSelected={selectedCategory === "카테고리별"}
          onClick={() => handleCategoryClick("카테고리별")}
        />
        <SelectButton
          text="사람별"
          isSelected={selectedCategory === "사람별"}
          onClick={() => handleCategoryClick("사람별")}
        />

        <SortDropdown
          showDropdown={showDropdown}
          dropdownVisible={dropdownVisible}
          dropdownState={dropdownState}
          dropdownRef={dropdownRef}
          handleSortClick={handleSortClick}
          handleDropdownItemClick={handleDropdownItemClick}
          options={dropdownOptions}
        />
      </div>
      {sortedEvents.map((event, index) => (
        <EventContainer
          key={index}
          eventName={event.name}
          income={event.income}
          outcome={event.outcome}
          selectedCategory={selectedCategory}
          link={`/category/${event.name}`}
        />
      ))}
      <BottomNav />
    </div>
  );
};

export default Home;
