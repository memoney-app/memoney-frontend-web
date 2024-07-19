import { style, keyframes } from "@vanilla-extract/css";

const fadeOut = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const main_select_element_list = style({
  marginLeft: "auto",
  position: "relative",
});

export const main_sort_container = style({
  display: "flex",
  alignItems: "center",
});

export const rectangle = style({
  marginTop: "3px",
});

export const dropdown_content = style({
  position: "absolute",
  width: "88px",
  height: "133px",
  zIndex: 1000,
  padding: "16px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  right: "-5%",
  top: "130%",
  boxShadow: "0px 0px 80px rgba(0, 0, 0, 0.1)", // 그림자 설정
  backdropFilter: "blur(100px)", // 배경 블러 설정
});

export const showDropdown = style({
  animation: `${fadeIn} 0.5s forwards`,
});

export const hideDropdown = style({
  animation: `${fadeOut} 0.5s forwards`,
});

export const dropdown_item = style({
  color: "#000000",
  fontSize: "16px",
  fontWeight: 600,
});

export const dropdown_selectedItem = style({
  color: "#3D5AFE",
});

export const main_sort_dropdownState = style({
  margin: "0px 4px",
  fontSize: "16px",
  fontWeight: 500,
});
