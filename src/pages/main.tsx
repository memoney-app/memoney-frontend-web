"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../css/home.module.css";
import Link from "next/link";

import { stackRouterPush, stackRouterBack } from "../utils/stackRouter";
export default function Main() {
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
      메인페이지
      <Link href="/">first</Link>
      <Link href="/main">main</Link>
      <Link href="/test">test</Link>
    </main>
  );
}
