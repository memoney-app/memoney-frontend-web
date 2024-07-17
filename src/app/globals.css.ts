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
