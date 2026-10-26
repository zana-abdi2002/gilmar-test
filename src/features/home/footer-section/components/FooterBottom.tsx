import { useTranslations } from "next-intl";
import FooterSocials from "./FooterSocials";

function FooterBottom() {
  const t = useTranslations("Footer");

  return (
    <div className="bg-navbar-surface flex flex-col items-center justify-between gap-5 rounded-[20px] border border-[#EEF6F6] px-6 py-2 shadow-sm ring-3 ring-white md:flex-row">
      {/* footer copy rights */}
      <p className="text-right text-[0.875rem] font-semibold">
        {t("copyRights")}
      </p>

      {/* social links */}
      <FooterSocials />
    </div>
  );
}

export default FooterBottom;
