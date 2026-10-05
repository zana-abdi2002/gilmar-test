import { getTranslations } from "next-intl/server";
import HeroActionButton from "./HeroActionButton";

async function HeroContent() {
  const t = await getTranslations("HeroContent");

  return (
    <section
      aria-labelledby="hero-content-title"
      className="flex w-full flex-col items-center justify-center gap-6 px-4 text-center sm:px-6"
    >
      {/* Description */}
      <div className="flex w-full max-w-183 flex-col items-center gap-2">
        <h1
          id="hero-content-title"
          className="font-high text-foreground text-3xl leading-[1.8] font-extrabold sm:text-4xl sm:leading-[1.8]"
        >
          {t("title")}
        </h1>

        <p className="font-mid text-muted-foreground text-sm leading-8 font-semibold">
          {t("description")}
        </p>
      </div>

      {/* Button */}
      <HeroActionButton />
    </section>
  );
}

export default HeroContent;
