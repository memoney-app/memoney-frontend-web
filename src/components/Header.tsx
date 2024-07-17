import React from "react";
import { useRouter } from "next/navigation";
import * as styles from "../css/Header.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Link href={`/home/category`}>memoney</Link>
    </div>
  );
};

export default Header;
