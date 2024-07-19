import { style, globalStyle } from "@vanilla-extract/css";

globalStyle(".main", {
  backgroundColor: "#f5f5f5",
  paddingTop: "64px",
  paddingBottom: "24px",
  margin: "0 auto 48px auto", // Center the main container
  maxWidth: "800px", // Limit the width to a typical mobile screen width
  minHeight: "100vh",
  overflow: "hidden",
});
globalStyle("::-webkit-scrollbar", {
  display: "none",
});

export const Home_Category = style({
  margin: "24px auto 0 auto",
  width: "90%",
  fontSize: "24px",
  fontWeight: 700,
});

export const main_select_container = style({
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  width: "90%",
  marginTop: "24px",
});
