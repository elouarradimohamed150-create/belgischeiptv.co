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
            className="relative aspect-[2/3] w-36 shrink-0 overflow-hidden rounded-xl border border-line bg-ink-700 sm:w-44"
          >
            <Image
              src={img}
              alt="IPTV content"
              fill
              sizes="176px"
              className="object-cover"
            />
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
