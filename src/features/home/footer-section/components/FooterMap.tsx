import Image from "next/image";
import MapImage from "../assets/footer-map-image.webp";

function FooterMap() {
  return (
    <div className="pointer-events-none absolute inset-e-0 -z-10 hidden h-full lg:block">
      <div className="relative aspect-364/276 h-full">
        <Image src={MapImage} alt="" className="object-cover" fill />
      </div>
    </div>
  );
}

export default FooterMap;
