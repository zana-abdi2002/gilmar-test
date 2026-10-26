import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";

function FooterSection() {
  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-5 px-[5.55vw]">
      <FooterMain />
      <FooterBottom />
    </div>
  );
}

export default FooterSection;
