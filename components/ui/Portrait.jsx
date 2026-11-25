import Image from "next/image";
import { profile } from "@/lib/portfolio";
import { getAssetPath } from "@/lib/utils";

export default function Portrait({ className = "", priority = false, decorative = false }) {
  return (
    <div className={`portrait ${className}`} aria-hidden={decorative || undefined}>
      {profile.portrait ? (
        <Image src={getAssetPath(profile.portrait)} alt={decorative ? "" : profile.name} fill sizes={decorative ? "80px" : "(max-width: 760px) 75vw, 40vw"} priority={priority} />
      ) : (
        <div className="portrait-placeholder" role={decorative ? undefined : "img"} aria-label={decorative ? undefined : "Portrait placeholder for Biswadip Mandal"}>
          <span className="portrait-monogram" aria-hidden="true">bm<span>.</span></span>
          <span className="portrait-caption" aria-hidden="true">Portrait placeholder</span>
        </div>
      )}
    </div>
  );
}
