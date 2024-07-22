import React from "react";
import * as styles from "../css/DetailHeader.css";
import Link from "next/link";
import Back from "/public/icons/Back.svg";
import Rectangle from "/public/icons/Rectangle.svg";

interface DetailHeaderProps {
  text: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ text }) => {
  return (
    <div className={styles.DetailHeader}>
      <Link href={`/category`}>
        <div className={styles.DetailHeader_Back}>
          <Back />
        </div>
      </Link>
      <div className={styles.DetailHeader_Text}> 전체</div>
      <div className={styles.DetailHeader_Image}>
        <Rectangle />
      </div>

      <div className={styles.DetailHeader_DetailText}>{text}</div>
    </div>
  );
};

export default DetailHeader;
