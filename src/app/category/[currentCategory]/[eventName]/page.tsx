"use client";
import { usePathname } from "next/navigation";
import React from "react";

import * as styles from "../../../../css/EventDetail.css";

export default function Category(props: any) {
  return (
    <div>
      <div className={styles.Event_Detail_Close}>X</div>
      <div className={styles.Event_Detail_Money}>
        <input className={styles.UnderlineInput}></input>원
      </div>

      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>분류</div>
        <div>받은돈</div>
        <div>나간돈</div>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>이름</div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
        <div className={styles.Event_Detail_Topic}>Emoji</div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>관계</div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>카테고리</div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>날짜</div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>전화번호</div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
      </div>
      <div className={styles.Event_Detail_Devider} />
      <div className={styles.Event_Detail_Container}>
        <div className={styles.Event_Detail_Topic}>메모 </div>
        <input
          className={styles.PlaceholderInput}
          placeholder="입력하세요"
        ></input>
      </div>
      <div>추가하기</div>
    </div>
  );
}
