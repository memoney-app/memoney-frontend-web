"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

import * as styles from "../../../../css/EventDetail.css";

export default function Category(props: any) {
  return (
    <div className="main">
      <div className={styles.Event_Detail_Container}>
        <input></input>원
      </div>

      <div>
        분류 <div>받은돈</div>
        <div> 나간돈</div>
      </div>
      <div>
        이름 <input></input>
        Emoji <input></input>
      </div>
      <div>
        관계 <input></input>
      </div>
      <div>
        카테고리 <input></input>
      </div>
      <div>
        날짜 <input></input>
      </div>
      <div>
        전화번호 <input></input>
      </div>
      <div>
        메모 <input></input>
      </div>
      <div>추가하기</div>
    </div>
  );
}
