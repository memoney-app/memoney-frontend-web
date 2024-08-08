import { style, globalStyle, keyframes } from "@vanilla-extract/css";

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const upsizeFix = keyframes({
  "0%": { position: "absolute" },
  "100%": { position: "absolute" },
});

export const downsizeFix = keyframes({
  from: { position: "absolute" },
  to: { position: "absolute" },
});

export const sizeUp = keyframes({
  from: { height: "0px" },
  to: { height: "20px" },
});

export const sizeDown = keyframes({
  from: { height: "20px" },
  to: { height: "0px", position: "absolute" },
});

globalStyle(".fadeIn_Animation", {
  animation: `${fadeIn} 0.5s forwards, ${upsizeFix} 0.5s forwards`,
});

globalStyle(".fadeOut_Animation", {
  animation: `${fadeOut} 0.5s forwards, ${downsizeFix} 0.5s forwards`,
});

globalStyle(".sizeUp_Animation", {
  animation: `${sizeUp} 0.5s forwards, ${fadeIn} 0.5s forwards`,
});

globalStyle(".sizeDown_Animation", {
  animation: `${sizeDown} 0.5s forwards, ${fadeOut} 0.3s forwards`,
});

globalStyle(".Event_Container", {
  backgroundColor: "#ffffff",
  width: "calc(90% - 32px)",
  margin: "24px auto",
  padding: "16px",
  borderRadius: "16px",
});

globalStyle(".income", {
  color: "rgb(61, 90, 254)",
  marginLeft: "8px",
  fontSize: "16px",
  fontWeight: 700,
});

globalStyle(".outcome_alone", {
  marginTop: "4px",
});

globalStyle(".overlapping_text", {
  minHeight: "20px",
  overflow: "visible",
  whiteSpace: "nowrap",
});
export const Event_Container_element = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "12px",
});

export const Event_Container_eventName = style({
  marginLeft: "4px",
  fontSize: "20px",
  fontWeight: 700,
});

export const Event_outcome = style({
  color: "rgb(255, 110, 64)",
  marginLeft: "22px",
  fontSize: "16px",
  fontWeight: 700,
});

export const Event_Container_money = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  fontSize: "13px",
  fontWeight: 400,
});

export const Event_Container_relation = style({
  alignSelf: "flex-end", // 하단 정렬
  fontSize: "14px",
  fontWeight: 500,
  marginLeft: "8px",
  // marginLeft: "auto",
});

export const Event_norender = style({
  width: "24px",
  height: "24px",
  borderRadius: "100px",
  backgroundColor: "#d9d9d9",
});
