import Image from "next/image";
import { films, sport } from "@/lib/home-data";

function Row({ imgs, reverse }: { imgs: string[]; reverse?: boolean }) {
  const row = [...imgs, ...imgs];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {row.map((img, i) => (
          <div
            key={i}
            className="group relative aspect-[16/10] w-72 shrink-0 overflow-hidden rounded-xl border border-line bg-ink-700 sm:w-80"
          >
            <Image
              src={img}
              alt="IPTV content"
              fill
              sizes="320px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ContentShowcase() {
  return (
    <div className="space-y-4">
      <Row imgs={films} />
      <Row imgs={sport} reverse />
    </div>
  );
}
