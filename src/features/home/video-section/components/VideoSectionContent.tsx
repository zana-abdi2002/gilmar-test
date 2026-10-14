import { IconButton } from "@mui/material";
import Image from "next/image";
import CustomPlayArrowIcon from "../assets/custom-play-arrow-icon.svg";
import VideoThumbnail from "../assets/forest-bridge-landscape.webp";
import CoverVector from "../assets/video-section-cover-vector.svg";
import VideoSectionHeader from "./VideoSectionHeader";

function VideoSectionContent() {
  return (
    <div className="relative aspect-320/172.5 overflow-hidden rounded-[20px]">
      {/* video thumbnail */}
      <Image
        src={VideoThumbnail}
        alt="" // TODO: add alt
        fill
        className="object-cover"
      />

      {/* play button */}
      <div className="absolute inset-e-[11%] top-[50%] z-9 flex size-[9.3vw] items-center justify-center rounded-full bg-white/30">
        <IconButton className="z-10 size-[6vw] rounded-full bg-white object-cover text-black">
          <Image
            src={CustomPlayArrowIcon}
            alt=""
            className="me-[0.625vw] size-[1.95vw]"
          />
        </IconButton>
      </div>

      {/* cover vector */}
      <Image
        src={CoverVector}
        alt=""
        className="absolute inset-e-[20%] z-10 object-cover xl:inset-e-[26%]"
      />

      {/* header */}
      <VideoSectionHeader />
    </div>
  );
}

export default VideoSectionContent;
