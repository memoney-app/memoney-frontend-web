"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../css/home.module.css";
import { stackRouterPush, stackRouterBack } from "../utils/stackRouter";
import Link from "next/link";

export default function Test() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

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
      테스트 페이지
      <Link href="/">first</Link>
      <Link href="/main">main</Link>
      <Link href="/test">test</Link>
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
}
