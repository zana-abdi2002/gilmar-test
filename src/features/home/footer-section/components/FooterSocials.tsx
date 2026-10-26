import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SocialLinkProps } from "../types";
import SocialLink from "./SocialLink";

const SOCIAL_LINKS: SocialLinkProps[] = [
  { icon: <XIcon />, url: "gilmar.x.com" },
  { icon: <YouTubeIcon />, url: "youtube.com" },
  { icon: <TelegramIcon />, url: "telegram.com" },
  { icon: <LinkedInIcon />, url: "linkedin.com" },
];

function FooterSocials() {
  return (
    <div className="flex items-center justify-between gap-3">
      {/* list of */}
      {SOCIAL_LINKS.map((social) => (
        <SocialLink key={social.url} url={social.url} icon={social.icon} />
      ))}
    </div>
  );
}

export default FooterSocials;
