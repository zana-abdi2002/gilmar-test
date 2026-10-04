import localFont from "next/font/local";

export const abarHigh = localFont({
  src: [
    {
      path: "./AbarHighFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AbarHighFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./AbarHighFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./AbarHighFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./AbarHighFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-abar-high",
  display: "swap",
});

export const abarMid = localFont({
  src: [
    {
      path: "./AbarMidFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AbarMidFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "./AbarMidFaNum-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./AbarMidFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./AbarMidFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-abar-mid",
  display: "swap",
});

export const abarLow = localFont({
  src: [
    {
      path: "./AbarLowFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AbarLowFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "./AbarLowFaNum-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./AbarLowFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./AbarLowFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-abar-low",
  display: "swap",
});
