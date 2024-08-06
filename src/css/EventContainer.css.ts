import { style } from "@vanilla-extract/css";
import exp from "constants";

export const Event_Container = style({
  backgroundColor: "#ffffff",
  width: "calc(90% - 32px)",
  margin: "24px auto",
  padding: "16px",
  borderRadius: "16px",
  height: "78px",
});

export const Event_Container_element = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "12px",
});

export const Event_Container_eventName = style({
  marginLeft: "4px",
  fontSize: "20px",
  fontWeight: 700,
});

export const income = style({
  color: "rgb(61, 90, 254)",
  marginLeft: "8px",
  fontSize: "16px",
  fontWeight: 700,
  height: "20px",
});

export const outcome = style({
  color: "rgb(255, 110, 64)",
  marginLeft: "22px",
  fontSize: "16px",
  fontWeight: 700,
  height: "20px",
  marginTop: "4px",
});

export const Event_Container_money = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  fontSize: "13px",
  fontWeight: 400,
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
