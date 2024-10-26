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
});
