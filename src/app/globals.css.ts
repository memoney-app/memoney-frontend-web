// globals.css.ts
import { globalStyle } from "@vanilla-extract/css";

// html, body 스타일 설정
globalStyle("html, body", {
  padding: 0,
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
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

// img 태그 스타일 설정
globalStyle("img", {
  maxWidth: "100%",
  display: "block",
});
