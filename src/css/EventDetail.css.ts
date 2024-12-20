import { style } from "@vanilla-extract/css";
import exp from "constants";

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

export const Event_Detail_Button = style({
  padding: "12px 16px",
  border: "1px solid #757575",
  marginRight: "8px",
  borderRadius: "100px",
  color: "#757575",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
});

export const Active_Button = style({
  border: "1px solid #3D5AFE", // 활성화된 테두리 색상
  color: "#3D5AFE", // 활성화된 글자 색상
});

export const Event_Detail_Submit = style({
  backgroundColor: "#3D5AFE",

  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  margin: "24px 5% 0 5%",
  height: "56px",
  fontSize: "20px",
  fontWeight: "bold",
  borderRadius: "16px",
});
