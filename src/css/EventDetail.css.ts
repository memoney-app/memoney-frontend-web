import { style } from "@vanilla-extract/css";

export const Event_Detail_Close = style({
  padding: "0  0 0 auto",
});

export const Event_Detail_Money = style({
  fontSize: "36px",
  margin: "72px 0 24px 5%",
});

export const UnderlineInput = style({
  border: "none",
  borderBottom: "2px solid black",
  outline: "none",
  fontSize: "36px",
  padding: "4px 0",
  backgroundColor: "transparent",
  width: "100px", // 필요에 따라 조정
  "::placeholder": {
    color: "#ccc",
  },
});

export const PlaceholderInput = style({
  border: "none",
  outline: "none",
  fontSize: "16px",
  padding: "4px 0",
  backgroundColor: "transparent",
  width: "25%",
  "::placeholder": {
    color: "#ccc",
    fontStyle: "italic",
  },
});

export const Event_Detail_Container = style({
  display: "flex",
  height: "72px",

  alignItems: "center",
  fontSize: "16px",
});

export const Event_Detail_Topic = style({
  width: "20%",
  marginLeft: "5%",
});
export const Event_Detail_Devider = style({
  width: "90%",
  height: "1px",
  marginLeft: "5%",
  backgroundColor: "#d9d9d9",
});
