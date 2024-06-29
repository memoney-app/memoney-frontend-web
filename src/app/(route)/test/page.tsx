"use client";

import React, { useState } from "react";
import styles from "../../../pages/mainpage.module.css";
import { stackRouterPush, stackRouterBack } from "../../../utils/stackRouter";
const Test: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(`You typed: ${searchTerm}`);
    }
  };

  return (
    <main className={styles.main}>
      <input
        type="text"
        placeholder="Search"
        className={styles["chat-search-input"]}
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress} // Enter 키 이벤트 핸들러 추가
      />
    </main>
  );
};

export default Test;
