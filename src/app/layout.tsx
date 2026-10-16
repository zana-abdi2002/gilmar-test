import Navbar from "@/features/layout/Navbar";
import { abarHigh, abarLow, abarMid } from "@/fonts";
import { cn } from "@/lib/utils";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "گیلمار",
  description: "اقامتگاه بوم‌گردی گیلمار",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={cn(
        "h-full",
        "antialiased",
        abarHigh.variable,
        abarMid.variable,
        abarLow.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col leading-8">
        <NextIntlClientProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl pt-8 max-xl:px-5 max-sm:px-2">
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
