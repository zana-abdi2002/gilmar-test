import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  description: string;
  imageSrc: StaticImport;
};

function PackageCardItem({ description, imageSrc }: Props) {
  return (
    <div className="bg-navbar-surface border-navbar-border flex size-29 flex-col items-center justify-center gap-2 rounded-xl border shadow-lg ring-6 ring-white/60 backdrop-blur-3xl">
      <Image src={imageSrc} alt={description} width={52} height={52} />

      <p>{description}</p>
    </div>
  );
}

export default PackageCardItem;
