import { globalStyle, style } from "@vanilla-extract/css";

export const main = style({
  backgroundColor: "#f5f5f5",
  paddingTop: "64px",
  paddingBottom: "24px",
  margin: 0,
  minHeight: "100vh",
  overflow: "hidden",
});
globalStyle("::-webkit-scrollbar", {
  display: "none", // Chrome, Safari, Opera
});
export const search_container = style({
  width: "calc(90% - 48px)",
  display: "flex",
  margin: "0 auto", // 페이지 가로 중앙 정렬
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
});

export const Home_Category = style({
  margin: "24px auto 0 auto",
  width: "90%",
  fontSize: "24px",
  fontWeight: 700,
});

export const Home_List_Button = style({
  backgroundColor: "transparent",
  border: "none",
});

export const main_select_container = style({
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  width: "90%",
  marginTop: "24px",
});
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

export const main_select_element_list = style({
  marginLeft: "auto",
});
export const Home_List_Dropdown = style({});
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
  right: "5%",
  zIndex: 1000,
  padding: "16px",
  backgroundColor: "#ffffff",
  // border: "1px solid #ccc",
  borderRadius: "8px",
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex", // 기본적으로 드롭다운은 숨겨진 상태
  flexDirection: "column", // 세로 방향으로 배치
  justifyContent: "space-between",
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
