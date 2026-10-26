import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  description: string;
  imageSrc: StaticImport;
};

function PackageCardItem({ description, imageSrc }: Props) {
  return (
    <div className="bg-navbar-surface border-navbar-border flex aspect-square w-[clamp(90px,8.055vw,116px)] flex-col items-center justify-center gap-2 rounded-xl border shadow-lg ring-6 ring-white/60 backdrop-blur-3xl">
      <Image src={imageSrc} alt={description} width={52} height={52} />

      <p className="text-[0.875rem] font-semibold">{description}</p>
    </div>
  );
}

export default PackageCardItem;
