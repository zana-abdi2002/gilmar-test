import Image from "next/image";
import BackgroundVector from "../assets/about-us-background-vector.svg";
import AboutUsCollage from "./AboutUsCollage";

function AboutUsSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={BackgroundVector}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-s-[-20.5px] bottom-[203.7px] z-[-1] h-[393.8px] w-[669.4px] max-w-none"
      />

      <div className="relative z-10">
        <AboutUsCollage />
      </div>
    </section>
  );
}

export default AboutUsSection;
