import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterLinkGroup from "./FooterLinkGroup";
import FooterMap from "./FooterMap";

function FooterMain() {
  return (
    <div className="bg-navbar-surface relative isolate grid w-full gap-5 overflow-hidden rounded-[20px] border border-[#EEF3F6] p-2 shadow-lg ring-3 ring-white min-[540px]:grid-cols-2 md:grid-cols-3 lg:pe-[18%]">
      <div className="min-[540px]:col-span-2 md:col-span-1">
        <FooterBrand />
      </div>

      <FooterLinkGroup />

      <FooterContact />

      <FooterMap />
    </div>
  );
}

export default FooterMain;
