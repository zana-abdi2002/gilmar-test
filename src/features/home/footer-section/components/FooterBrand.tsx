import { useTranslations } from "next-intl";
import Image from "next/image";

function FooterBrand() {
  const t = useTranslations("general");
  const tFooter = useTranslations("Footer");

  return (
    <div className="flex w-full flex-col gap-2 md:max-w-78.5">
      {/* logo */}
      <div className="relative flex aspect-169/53 w-[clamp(150px,12.74vw,169px)] justify-start">
        <Image
          src="/images/gilmar-logo.svg"
          alt={t("gilmarLogo")}
          fill
          className="object-cover"
        />
      </div>
      {/* description */}
      <p className="text-muted-foreground text-[0.875rem] wrap-break-word">
        {tFooter("description")}
      </p>
    </div>
  );
}

export default FooterBrand;
