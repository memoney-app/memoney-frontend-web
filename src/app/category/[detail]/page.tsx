"use client";
import { usePathname } from "next/navigation";
// import React from "react";
import SearchBar from "@/components/SearchBar";
import React, { useState, useEffect } from "react";
import { Event, PeopleEvent } from "@/types/Event";
import SelectButton from "@/components/SelectButton";
import SortDropdown from "@/components/SortDropdown";
import EventContainer from "@/components/EventContainer";
import SummaryContainer from "@/components/SummaryContainer";
import BottomNav from "@/components/BottomNav";
import DropdownWrapper from "@/hooks/DropdownWrapper";
import { dropdownOptions } from "@/utils/dropdownOptions";

import * as styles from "../../../css/CategoryDetail.css";
import { sortEvents } from "@/utils/sortEvents";
import Wedding from "/public/images/wedding.svg";
import Birthday from "/public/images/birthday.svg";
import FBP from "/public/images/FBP.svg";
import NewYear from "/public/images/NewYear.svg";
import Funeral from "/public/images/funeral.svg";
import DetailHeader from "@/components/DetailHeader";

const initialEvents: PeopleEvent[] = [
  {
    name: "김규원",
    date: "2023-07-01",
    income: 1000000,
    outcome: 222200,
    relation: "친구",
  },
  {
    name: "전미진",
    date: "2023-06-15",
    income: 900000,
    outcome: 300000,
    relation: "부모",
  },
  {
    name: "박승원",
    date: "2023-05-20",
    income: 0,
    outcome: 150000,
    relation: "친적",
  },
  {
    name: "김규투",
    date: "2023-07-10",
    income: 1200000,
    outcome: 400000,
    relation: "직장동료",
  },
  {
    name: "박승투",
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

  const renderImage = () => {
    switch (currentCategory) {
      case "결혼식":
        return <Wedding />;
      case "장례식":
        return <Funeral />;
      case "생일":
        return <Birthday />;
      case "돌잔치":
        return <FBP />;
      case "세뱃돈":
        return <NewYear />;
      default:
        return null; // 기본 이미지가 필요하면 여기에 추가
    }
  };
  const {
    showDropdown,
    dropdownVisible,
    dropdownState,
    dropdownRef,
    handleDropdownItemClick,
    handleSortClick,
  } = DropdownWrapper("금액순", dropdownOptions);

  const handleCategoryClick = (category: "전체" | "받은돈" | "나간돈") => {
    setSelectedCategory(category);
  };

  const sortedEvents = sortEvents(events, dropdownState);

  const filteredEvents = sortedEvents.filter((event) => {
    if (selectedCategory === "받은돈") return event.income > 0;
    if (selectedCategory === "나간돈") return event.outcome > 0;
    return true;
  });

  const totalIncome = filteredEvents.reduce(
    (sum, event) => sum + (event.income || 0),
    0
  );
  const totalOutcome = filteredEvents.reduce(
    (sum, event) => sum + (event.outcome || 0),
    0
  );

  return (
    <div className="main">
      <DetailHeader text={currentCategory} />
      <SearchBar initialEvents={initialEvents} onSearch={setEvents} />

      <div className={styles.Detail_Title}>
        <div className={styles.Detail_Title_Image}>{renderImage()}</div>

        {currentCategory}
      </div>
      <div className={styles.main_select_container}>
        <SelectButton
          text="전체"
          isSelected={selectedCategory === "전체"}
          onClick={() => handleCategoryClick("전체")}
        />
        <SelectButton
          text="받은돈"
          isSelected={selectedCategory === "받은돈"}
          onClick={() => handleCategoryClick("받은돈")}
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
      <SummaryContainer
        income={totalIncome}
        outcome={totalOutcome}
        selectedCategory={selectedCategory}
      />
      {filteredEvents.map((event, index) => (
        <EventContainer
          key={index}
          eventName={event.name}
          income={event.income}
          outcome={event.outcome}
          selectedCategory={selectedCategory}
          relation={event.relation}
        />
      ))}
      <BottomNav />
    </div>
  );
}
