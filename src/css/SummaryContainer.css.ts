import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { fadeIn, fadeOut } from "./EventContainer.css";

export const Summary_Container_text = style({
  marginLeft: "4px",
  fontSize: "20px",
  fontWeight: 700,
});

export const Summary_Container_money = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  fontSize: "13px",
  fontWeight: 400,
  marginTop: "8px",
});

export const Summary_outcome = style({
  color: "rgb(255, 110, 64)",
  marginLeft: "8px",
  fontSize: "16px",
  fontWeight: 700,
});
export const Event_Container_relation = style({
  alignSelf: "flex-end", // 하단 정렬
  fontSize: "14px",
  fontWeight: 500,
  marginLeft: "8px",
  // marginLeft: "auto",
});

export const Event_norender = style({
  width: "24px",
  height: "24px",
  borderRadius: "100px",
  backgroundColor: "#d9d9d9",
});

// export const overlapping_text = style({
//   height: "20px",
//   overflow: "visible",
//   whiteSpace: "nowrap",
// });
