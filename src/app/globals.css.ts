// src/app/globals.css.ts
import { globalStyle } from "@vanilla-extract/css";

// html, body 스타일 설정
globalStyle("html, body", {
  padding: 0,
  margin: 0,
});

// a 태그 스타일 설정
globalStyle("a", {
  color: "#000000",
  textDecoration: "none",
});

// a 태그 hover 스타일 설정
globalStyle("a:hover", {
  textDecoration: "underline",
});

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
