// EventContainer.tsx

import React from "react";
import { useRouter } from "next/navigation";
import * as styles from "../css/EventContainer.css";
import Link from "next/link";

import Wedding from "/public/images/wedding.svg";
import Birthday from "/public/images/birthday.svg";
import FBP from "/public/images/FBP.svg";
import NewYear from "/public/images/NewYear.svg";
import Funeral from "/public/images/funeral.svg";

interface EventContainerProps {
  eventName: string;
  income: number;
  outcome: number;
}

const EventContainer: React.FC<EventContainerProps> = ({
  eventName,
  income,
  outcome,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  // 금액을 3자리마다 콤마(,) 표시하는 함수
  const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const renderImage = () => {
    switch (eventName) {
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
  return (
    <div className={styles.Event_Container}>
      <div className={styles.Event_Container_element}>
        {renderImage()}
        <div className={styles.Event_Container_eventName}>{eventName}</div>
      </div>
      <div className={styles.Event_Container_money}>
        <div>
          <div className={styles.income}>
            들어온 금액: ₩ {formatCurrency(income)}
          </div>
          <div className={styles.outcome}>
            나간 금액: ₩ {formatCurrency(outcome)}
          </div>
        </div>
        <Link href={`/home/${eventName}`}>더보기</Link>
      </div>
    </div>
  );
};

export default EventContainer;
