import { style } from "@vanilla-extract/css";

export const BottomNav = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 20px",
  maxWidth: "760px",
  width: "calc(100% - 40px)",
  height: "64px",
  backgroundColor: "rgba(255, 255, 255, 0.93)",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  zIndex: 1000,
});

export const BottomNavElement = style({
  display: "flex",
  alignItems: "center",
  padding: "7px 28.5px",
  borderRadius: "100px",
  cursor: "pointer",
});

export const active = style({
  backgroundColor: "#E3EEFF",
});
