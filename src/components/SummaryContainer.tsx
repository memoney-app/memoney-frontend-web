import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as styles from "../css/SummaryContainer.css";
import classNames from "classnames";

interface SummaryContainerProps {
  income: number;
  outcome: number;
  selectedCategory: string;
}

const SummaryContainer: React.FC<SummaryContainerProps> = ({
  income,
  outcome,
  selectedCategory,
}) => {
  const router = useRouter();
  const [prevCategory, setPrevClass] = useState("전체");
  const [incomeClass, setIncomeClass] = useState("income");
  const [outcomeClass, setOutcomeClass] = useState(
    classNames(styles.Summary_outcome)
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
      classNames(styles.Summary_outcome, {
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
          (prevCategory === "나간돈" && selectedCategory === "전체"),
      })
    );
  };

  useEffect(() => {
    setPrevClass(selectedCategory);
    getClassNames();
    console.log("prevCategory: ", prevCategory);
    console.log("selectedCategory: ", selectedCategory);
  }, [selectedCategory]);

  // 금액을 3자리마다 콤마(,) 표시하는 함수
  const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="Event_Container">
      <div className={styles.Summary_Container_text}>요약</div>
      <div className={styles.Summary_Container_money}>
        <div className={prevCategory !== "전체" ? "overlapping_text" : ""}>
          <div className={incomeClass}>
            받은 돈 합계: ₩ {formatCurrency(income)}
          </div>
          <div className={outcomeClass}>
            나간 돈 합계: ₩ {formatCurrency(outcome)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
