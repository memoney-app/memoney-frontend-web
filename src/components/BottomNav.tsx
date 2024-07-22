import React from "react";
import { useRecoilState } from "recoil";
import { activeIndexState } from "../recoil/atoms";
import { useRouter } from "next/navigation";
import * as styles from "../css/BottomNav.css";
import Link from "next/link";
import NavHomeSelected from "/public/icons/NavHomeSelected.svg";
import NavHome from "/public/icons/NavHome.svg";
import NavHeart from "/public/icons/NavHeart.svg";
import NavHeartSelected from "/public/icons/NavHeartSelected.svg";
import NavMyInfo from "/public/icons/NavMyInfo.svg";
import MyInfoSelected from "/public/icons/NavMyInfoSelected.svg";
import NavAdd from "/public/icons/NavAdd.svg";
import NavAddSelected from "/public/icons/NavAddSelected.svg";
const BottomNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useRecoilState(activeIndexState);

  const handleClick = (index: string) => {
    setActiveIndex(index);
  };

  const navItems = [
    {
      name: "NavHome",
      icon: <NavHome />,
      selectedIcon: <NavHomeSelected />,
      link: `/category`,
    },
    {
      name: "Heart",
      icon: <NavHeart />,
      selectedIcon: <NavHeartSelected />,
      link: `/category`,
    },
    {
      name: "MyInfo",
      icon: <NavMyInfo />,
      selectedIcon: <MyInfoSelected />,
      link: `/category`,
    },
    {
      name: "Add",
      icon: <NavAdd />,
      selectedIcon: <NavAddSelected />,
      link: `/category`,
    },
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
            {activeIndex === item.name ? item.selectedIcon : item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
