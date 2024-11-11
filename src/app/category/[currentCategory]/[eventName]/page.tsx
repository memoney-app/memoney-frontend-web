"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import * as styles from "../../../../css/EventDetail.css";

export default function Category(props: any) {
  const [formValues, setFormValues] = useState({
    activeButton: "received", // 받은돈/나간돈 상태
    amount: "",
    name: "",
    emoji: "",
    relationship: "",
    category: "",
    date: "",
    phone: "",
    memo: "",
  });

  // 입력값 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value, // 필드 이름에 따라 상태 업데이트
    }));
  };

  // 받은돈/나간돈 버튼 클릭 핸들러
  const handleButtonClick = (type: string) => {
    setFormValues((prev) => ({
      ...prev,
      activeButton: type, // activeButton 상태만 업데이트
    }));
  };

  return (
    <div>
      <div className={styles.Event_Detail_Close}>X</div>
      <div className={styles.Event_Detail_Money}>
        <input
          name="amount"
          className={styles.UnderlineInput}
          value={formValues.amount}
          onChange={handleInputChange}
          style={{ width: `${formValues.amount.length + 1 || 1}ch` }}
        />
        원
      </div>

      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>분류</div>
        <div
          className={`${styles.Event_Detail_Button} ${
            formValues.activeButton === "received" ? styles.Active_Button : ""
          }`}
          onClick={() => handleButtonClick("received")}
        >
          받은돈
        </div>
        <div
          className={`${styles.Event_Detail_Button} ${
            formValues.activeButton === "spent" ? styles.Active_Button : ""
          }`}
          onClick={() => handleButtonClick("spent")}
        >
          나간돈
        </div>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>이름</div>
        <input
          name="name"
          className={styles.PlaceholderInput}
          value={formValues.name}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
        <div className={styles.Event_Detail_Topic}>Emoji</div>
        <input
          name="emoji"
          className={styles.PlaceholderInput}
          value={formValues.emoji}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>관계</div>
        <input
          name="relationship"
          className={styles.PlaceholderInput}
          value={formValues.relationship}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>카테고리</div>
        <input
          name="category"
          className={styles.PlaceholderInput}
          value={formValues.category}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>날짜</div>
        <input
          name="date"
          className={styles.PlaceholderInput}
          value={formValues.date}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>전화번호</div>
        <input
          name="phone"
          className={styles.PlaceholderInput}
          value={formValues.phone}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>메모 </div>
        <input
          name="memo"
          className={styles.PlaceholderInput}
          value={formValues.memo}
          onChange={handleInputChange}
          placeholder="입력하세요"
        />
      </div>
      <div className={styles.Event_Detail_Submit}>추가하기</div>
    </div>
  );
}
