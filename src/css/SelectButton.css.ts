import { style } from "@vanilla-extract/css";

export const main_select_element = style({
  borderRadius: "100px",
  border: "2px solid #000000",
  padding: "8px 16px",
  marginRight: "8px",
  boxSizing: "border-box",
  fontSize: "14px",
  fontWeight: 600,
});
export const activeElement = style({
  border: "2px solid #000000",
});

export const inactiveElement = style({
  backgroundColor: "#e8e8e8",
  color: "#a7a7a7",
  border: "none",
});
