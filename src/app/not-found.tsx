import HomeActionButton from "@/features/general/components/HomeActionButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد | گیلمار",
};

type PineProps = {
  x: number;
  y: number;
  scale: number;
  className: string;
};

function Pine({ x, y, scale, className }: PineProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      <polygon points="0,-90 28,-45 -28,-45" />
      <polygon points="0,-65 36,-15 -36,-15" />
      <polygon points="0,-40 44,15 -44,15" />
      <rect x="-5" y="15" width="10" height="25" />
    </g>
  );
}

function ForestScene() {
  return (
    <svg
      viewBox="0 0 800 300"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {/* warm glow behind the cabin */}
      <circle cx="400" cy="190" r="170" className="fill-amber-300/20" />
      <circle cx="400" cy="190" r="100" className="fill-amber-300/20" />

      {/* back row of trees */}
      <Pine x={60} y={250} scale={1.3} className="fill-emerald-950" />
      <Pine x={170} y={260} scale={1.1} className="fill-emerald-900" />
      <Pine x={630} y={260} scale={1.1} className="fill-emerald-900" />
      <Pine x={740} y={250} scale={1.3} className="fill-emerald-950" />

      {/* cabin */}
      <rect
        x="290"
        y="178"
        width="220"
        height="82"
        className="fill-amber-900"
      />
      <rect x="290" y="178" width="220" height="8" className="fill-amber-950" />
      <polygon points="255,185 400,112 545,185" className="fill-orange-700" />
      <polygon
        points="255,185 400,112 400,122 270,188"
        className="fill-orange-600"
      />
      <rect x="388" y="214" width="24" height="46" className="fill-amber-950" />
      <rect x="312" y="200" width="30" height="26" className="fill-amber-300" />
      <rect x="352" y="200" width="22" height="26" className="fill-amber-300" />
      <rect x="426" y="200" width="22" height="26" className="fill-amber-300" />
      <rect x="458" y="200" width="30" height="26" className="fill-amber-300" />

      {/* front row of trees */}
      <Pine x={250} y={270} scale={1.5} className="fill-emerald-950" />
      <Pine x={560} y={270} scale={1.5} className="fill-emerald-950" />
      <Pine x={-10} y={275} scale={1.8} className="fill-emerald-950" />
      <Pine x={810} y={275} scale={1.8} className="fill-emerald-950" />

      {/* ground and bushes */}
      <rect
        x="0"
        y="262"
        width="800"
        height="38"
        className="fill-emerald-950"
      />
      <ellipse cx="330" cy="268" rx="70" ry="16" className="fill-emerald-700" />
      <ellipse cx="470" cy="270" rx="80" ry="15" className="fill-emerald-800" />
      <ellipse cx="120" cy="280" rx="90" ry="18" className="fill-emerald-800" />
      <ellipse cx="690" cy="280" rx="90" ry="18" className="fill-emerald-700" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="absolute top-0 -z-10 flex min-h-screen w-full flex-col bg-linear-to-b from-blue-200 via-blue-50 to-slate-50 px-4 py-6 sm:px-8"
    >
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-8 py-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-black text-slate-900 sm:text-5xl">
            این مسیر در دل جنگل گم شده است
          </h1>
          <p className="max-w-2xl text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
            گیلمار یک پروژه نمونه‌کار است که فقط برای نمایش توانایی من در طراحی
            و پیاده‌سازی لندینگ‌پیج ساخته شده است. به همین دلیل، بقیه‌ی لینک‌ها
            هنوز فعال نیستند و تنها صفحه‌ی اصلی در دسترس است.
          </p>
        </div>

        <HomeActionButton href={"/"} label="بازگشت به صفحه اصلی" size="large" />

        {/* forest card, echoing the hero photo of the landing page */}
        <div className="relative mx-auto mt-20 h-56 w-full max-w-5xl overflow-hidden rounded-3xl bg-linear-to-b from-emerald-800 to-emerald-950 shadow-2xl shadow-emerald-900/30 sm:h-72">
          <ForestScene />
          <div className="absolute inset-e-4 bottom-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg">
            <span className="size-2.5 rounded-full bg-emerald-400" />
            فقط صفحه اصلی فعال است
          </div>
        </div>
      </main>
    </div>
  );
}
