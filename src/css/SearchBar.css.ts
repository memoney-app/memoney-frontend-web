import { style } from "@vanilla-extract/css";

export const search_container = style({
  width: "calc(90% - 48px)",
  display: "flex",
  margin: "0 auto", // Center horizontally
  height: "20px",
  borderRadius: "36px",
  border: "none",
  padding: "18px 24px",
  fontSize: "16px",
  backgroundColor: "#ffffff",
});
export const search = style({
  border: "none",
  outline: "none",
  fontSize: "16px",
  marginLeft: "14px",
  width: "100%",
});
