import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as styles from "../css/BottomNav.css";
import Link from "next/link";
import NavHome from "/public/icons/NavHome.svg";
import Heart from "/public/icons/NavHome.svg";
import MyInfo from "/public/icons/NavHome.svg";
import Add from "/public/icons/NavHome.svg";
const BottomNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string>("NavHome");

  const handleClick = (index: string) => {
    setActiveIndex(index);
  };

  const navItems = [
    { name: "NavHome", icon: <NavHome />, link: `/home/category` },
    { name: "Heart", icon: <Heart />, link: `/home/category` },
    { name: "MyInfo", icon: <MyInfo />, link: `/home/category` },
    { name: "Add", icon: <Add />, link: `/home/category` },
  ];
  return (
    <div className={styles.BottomNav}>
      {navItems.map((item) => (
        <Link href={item.link} key={item.name}>
          <div
            className={`${styles.BottomNavElement} ${
              activeIndex === item.name ? styles.active : ""
            }`}
            onClick={() => handleClick(item.name)}
          >
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
