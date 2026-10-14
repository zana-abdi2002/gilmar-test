import VectorBackground from "@/features/general/assets/background-vector.svg";
import Image from "next/image";
import VideoSectionContent from "./VideoSectionContent";

function VideoSection() {
  return (
    <div className="relative isolate mx-auto w-full max-w-360 px-[6.25vw]">
      <VideoSectionContent />

      {/* background vector */}
      <Image
        src={VectorBackground}
        alt=""
        className="pointer-events-none absolute inset-s-10 top-[20%] z-50 size-[50%]"
      />
    </div>
  );
}

export default VideoSection;
