import { style } from "@vanilla-extract/css";

export const DetailHeader = style({
  display: "flex",
  alignItems: "center",
  width: "auto",
  padding: "0px 5% 33px 5%",
  marginRight: "auto",
});

export const DetailHeader_Back = style({
  backgroundColor: "#ffffff",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100px",
  marginRight: "16px",
});

export const DetailHeader_Text = style({
  color: "#757575",
  fontWeight: "700",
  fontSize: "16px",
  marginRight: "8px",
});

export const DetailHeader_Image = style({
  marginBottom: "4.5px",
  marginRight: "8px",
});

export const DetailHeader_DetailText = style({
  color: "#333333",
  fontWeight: "700",
  fontSize: "20px",
  marginBottom: "2px",
});
