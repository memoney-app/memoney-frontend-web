import React, { useState } from "react";
import * as styles from "../css/SearchBar.css";
import Search from "/public/images/Search.svg";
import { Event } from "@/types/event";

interface SearchBarProps {
  onSearch: (filteredEvents: Event[]) => void;
  initialEvents: Event[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialEvents }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);

    const filteredEvents = initialEvents.filter((event) =>
      event.name.includes(value)
    );
    onSearch(filteredEvents);
  };
  return (
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
  );
};

export default SearchBar;
