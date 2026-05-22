import Image from "next/image";

function BannerContent() {
  return (
    <span className="flex items-center gap-8 pr-8">
      <span className="font-medium uppercase tracking-normal whitespace-nowrap" style={{ fontSize: "clamp(88px, 14vw, 192px)" }}>
        PURA VIDA
      </span>
      <span
        className="relative rounded-full overflow-hidden flex-shrink-0"
        style={{ width: "clamp(64px, 9vw, 120px)", height: "clamp(64px, 9vw, 120px)" }}
      >
        <Image
          src="/images/beach7.webp"
          alt="Costa Rica"
          fill
          sizes="120px"
          className="object-cover"
        />
      </span>
      <span className="font-medium uppercase tracking-normal whitespace-nowrap" style={{ fontSize: "clamp(88px, 14vw, 192px)" }}>
        LIVING
      </span>
    </span>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-white border-b border-gray-100 py-4">
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 6 }).map((_, i) => (
          <BannerContent key={i} />
        ))}
      </div>
    </div>
  );
}
