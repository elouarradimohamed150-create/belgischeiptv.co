import Image from "next/image";
import { testimonials } from "@/lib/home-data";

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-5">
        {row.map((img, i) => (
          <figure
            key={i}
            className="w-72 shrink-0 overflow-hidden rounded-2xl border border-line bg-ink-800"
          >
            <Image
              src={`/images/2025/08/${img}.webp`}
              alt="Klantbeoordeling Belgische IPTV"
              width={288}
              height={200}
              className="h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
