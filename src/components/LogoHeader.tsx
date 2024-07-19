import React from "react";
import * as styles from "../css/LogoHeader.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Link href={`/category`}>memoney</Link>
    </div>
  );
};

export default Header;
