"use client";
import localFont from "next/font/local";
import { RecoilRoot } from "recoil";
import "./globals.css";

const suit = localFont({
  src: [
    {
      path: "./fonts/SUIT-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-suit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="ko">
        <body className={suit.className}>{children}</body>
      </html>
    </RecoilRoot>
  );
}
