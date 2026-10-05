import Navbar from "@/features/layout/Navbar";
import { abarHigh, abarLow, abarMid } from "@/fonts";
import theme from "@/src/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
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
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <div className="absolute inset-x-0 top-10 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl">
                <Navbar />
              </div>
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
