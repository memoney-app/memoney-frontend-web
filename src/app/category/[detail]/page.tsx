"use client";
import { usePathname } from "next/navigation";
// import React from "react";
import SearchBar from "@/components/SearchBar";
import React, { useState, useEffect } from "react";
import { Event, PeopleEvent } from "@/types/Event";
import SelectButton from "@/components/SelectButton";
import SortDropdown from "@/components/SortDropdown";
import EventContainer from "@/components/EventContainer";
import BottomNav from "@/components/BottomNav";
import DropdownWrapper from "@/hooks/DropdownWrapper";
import { dropdownOptions } from "@/utils/dropdownOptions";

import * as styles from "../../../css/CategoryDetail.css";
import { sortEvents } from "@/utils/sortEvents";

const initialEvents: PeopleEvent[] = [
  {
    name: "결혼식",
    date: "2023-07-01",
    income: 1000000,
    outcome: 222200,
    relation: "친구",
  },
  {
    name: "장례식",
    date: "2023-06-15",
    income: 900000,
    outcome: 300000,
    relation: "부모",
  },
  {
    name: "생일",
    date: "2023-05-20",
    income: 800000,
    outcome: 150000,
    relation: "친적",
  },
  {
    name: "돌잔치",
    date: "2023-07-10",
    income: 1200000,
    outcome: 400000,
    relation: "직장동료",
  },
  {
    name: "세뱃돈",
    date: "2023-01-01",
    income: 2000000,
    outcome: 500000,
    relation: "부모님손님",
  },
];

export default function Category(props: any) {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>();

  const pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const categoryFromPath = pathSegments[pathSegments.length - 1];
    const decodedCategory = decodeURIComponent(categoryFromPath);
    setCurrentCategory(decodedCategory);
  }, [pathname]);

  const {
    showDropdown,
    dropdownVisible,
    dropdownState,
    dropdownRef,
    handleDropdownItemClick,
    handleSortClick,
  } = DropdownWrapper("금액순", dropdownOptions);

  const handleCategoryClick = (category: "전체" | "들어온돈" | "나간돈") => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  const sortedEvents = sortEvents(events, dropdownState);

  return (
    <div className="main">
      <SearchBar initialEvents={initialEvents} onSearch={setEvents} />
      <div className={styles.Home_Category}>{currentCategory}</div>
      <div className={styles.main_select_container}>
        <SelectButton
          text="전체"
          isSelected={selectedCategory === "전체"}
          onClick={() => handleCategoryClick("전체")}
        />
        <SelectButton
          text="들어온돈"
          isSelected={selectedCategory === "들어온돈"}
          onClick={() => handleCategoryClick("들어온돈")}
        />
        <SelectButton
          text="나간돈"
          isSelected={selectedCategory === "나간돈"}
          onClick={() => handleCategoryClick("나간돈")}
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
        />
      ))}
      <BottomNav />
    </div>
  );
}
