import { style } from "@vanilla-extract/css";

export const MainLogo = style({
  position: "relative", // 위치 조정 가능
  top: "10%", // 원하는 만큼 위로 조정 (예: 중앙에서 약간 위)
  margin: "0 auto 20vh auto",
  width: "auto",
  fontSize: "13vw",
  fontWeight: "900",
  letterSpacing: "-2px",
  background: "linear-gradient(95deg, #3D5AFE 35%, #FF6E40 84%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",

  // 기본 스타일 (주로 데스크탑)
  "@media": {
    // 모바일 화면 (최대 너비 768px)
    "screen and (max-width: 768px)": {
      fontSize: "18vw", // 모바일에서 더 작게
      top: "15%", // 위치 약간 조정
    },
    // 태블릿 화면 (768px ~ 1024px)
    "screen and (min-width: 769px) and (max-width: 1024px)": {
      fontSize: "15vw", // 태블릿 크기 조정
      top: "12%", // 위치 조정
    },
    // 데스크탑 화면 (1024px 이상)
    "screen and (min-width: 1025px)": {
      fontSize: "10vw", // 데스크탑에서 적절한 크기
      top: "10%", // 위치 조정
    },
  },
});
