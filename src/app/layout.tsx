import { abarHigh, abarLow, abarMid } from "@/fonts";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

export const metadata: Metadata = {
  title: "گیلمار",
  description: "اقامتگاه بوم‌گردی گیلمار",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={`h-full antialiased ${abarHigh.variable} ${abarMid.variable} ${abarLow.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          {/* <Header/> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
