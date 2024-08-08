import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as styles from "../css/EventContainer.css";
import Wedding from "/public/images/wedding.svg";
import Birthday from "/public/images/birthday.svg";
import FBP from "/public/images/FBP.svg";
import NewYear from "/public/images/NewYear.svg";
import Funeral from "/public/images/funeral.svg";
import classNames from "classnames";

interface EventContainerProps {
  eventName: string;
  income: number;
  outcome: number;
  relation?: string;
  selectedCategory: string;
}

const EventContainer: React.FC<EventContainerProps> = ({
  eventName,
  income,
  outcome,
  relation,
  selectedCategory,
}) => {
  const router = useRouter();
  const [prevCategory, setPrevClass] = useState("전체");
  const [incomeClass, setIncomeClass] = useState("income");
  const [outcomeClass, setOutcomeClass] = useState(
    classNames(styles.Event_outcome)
  );
  const getClassNames = () => {
    setIncomeClass(
      classNames("income", {
        sizeDown_Animation:
          prevCategory === "전체" && selectedCategory === "나간돈",
        fadeOut_Animation:
          prevCategory === "받은돈" && selectedCategory === "나간돈",
        fadeIn_Animation:
          prevCategory === "나간돈" && selectedCategory === "받은돈",
        sizeUp_Animation:
          prevCategory === "나간돈" && selectedCategory === "전체",
      })
    );

    setOutcomeClass(
      classNames(styles.Event_outcome, {
        sizeDown_Animation:
          prevCategory === "전체" && selectedCategory === "받은돈",
        [classNames("sizeUp_Animation", "outcome_alone")]:
          prevCategory === "받은돈" && selectedCategory === "전체",
        fadeOut_Animation:
          prevCategory === "나간돈" && selectedCategory === "받은돈",
        fadeIn_Animation:
          prevCategory === "받은돈" && selectedCategory === "나간돈",
        outcome_alone:
          (prevCategory === "전체" && selectedCategory === "전체") ||
          (prevCategory === "나간돈" && selectedCategory === "전체") ||
          selectedCategory === "카테고리별" ||
          selectedCategory === "사람별",
      })
    );
  };

  useEffect(() => {
    setPrevClass(selectedCategory);
    getClassNames();
    console.log(selectedCategory);
  }, [selectedCategory]);

  const handleClick = () => {
    router.push(`/category/${eventName}`);
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
        return <div className={styles.Event_norender}></div>; // 기본 이미지가 필요하면 여기에 추가
    }
  };

  // const outcomeClass =
  //   income === undefined
  //     ? styles.Event_outcome
  //     : `${styles.Event_outcome} outcome_alone`;

  return (
    <div className="Event_Container" onClick={handleClick}>
      <div className={styles.Event_Container_element}>
        {renderImage()}
        <div className={styles.Event_Container_eventName}>{eventName}</div>
        {relation && (
          <div className={styles.Event_Container_relation}>{relation}</div>
        )}
      </div>
      <div className={styles.Event_Container_money}>
        <div className={prevCategory !== "전체" ? "overlapping_text" : ""}>
          <div className={incomeClass}>
            들어온 금액: ₩ {formatCurrency(income)}
          </div>
          <div className={outcomeClass}>
            나간 금액: ₩ {formatCurrency(outcome)}
          </div>
        </div>
        <div>더보기</div>
      </div>
    </div>
  );
};

export default EventContainer;
