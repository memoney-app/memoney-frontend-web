import { style } from "@vanilla-extract/css";

export const Header = style({
  width: "auto",
  padding: "0px 5% 33px 5%",
  marginRight: "auto",
  fontSize: "32px",
  fontWeight: "900",
  letterSpacing: "-2px", // 글자 간격 설정
  background: "linear-gradient(95deg, #3D5AFE 35%, #FF6E40 84%)",
  WebkitBackgroundClip: "text", // 배경 그라데이션이 글자에만 적용되도록 설정합니다. 웹킷 기반 브라우저(크롬, 사파리)에서 사용됩니다.
  WebkitTextFillColor: "transparent", // 글자 색상을 투명하게 설정하여 배경 그라데이션이 글자에 나타나도록 합니다.
  display: "inline-block",
});
