"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function ImageCard({
  src,
  name,
  region,
  type,
  contrast = false,
  delay = 0,
}: {
  src: string;
  name: string;
  region: string;
  type: string;
  contrast?: boolean;
  delay?: number;
}) {
  const pillClass = contrast
    ? "text-white text-[11px] font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"
    : "text-white text-[11px] font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden w-full h-full min-h-[220px] sm:min-h-[340px] xl:min-h-[480px] cursor-pointer group"
    >
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className={pillClass}>{region}</span>
        <span className={pillClass}>{type}</span>
      </div>
      <p className="absolute bottom-4 left-4 text-white font-medium text-sm sm:text-base leading-tight drop-shadow">
        {name}
      </p>
    </motion.div>
  );
}

function TextBlock({
  title,
  description,
  align,
  extraClass = "",
  delay = 0,
}: {
  title: string;
  description: string;
  align: "left" | "right";
  extraClass?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`flex flex-col justify-center gap-3 sm:gap-4 ${extraClass}`}
    >
      <h2 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(22px, 3vw, 40px)" }}>
        {title}
      </h2>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
        {description}
      </p>
      {align === "left" && (
        <button className="self-start border border-gray-800 text-gray-800 text-sm font-medium px-5 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
          Get Started
        </button>
      )}
    </motion.div>
  );
}

export default function FeaturedSection() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 xl:px-20 py-10 sm:py-14 xl:py-16 flex flex-col gap-6 sm:gap-10 xl:gap-14">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-[1fr_0.7fr_1.3fr] gap-3 sm:gap-4">
        <TextBlock
          align="left"
          title="Top Beach Picks in Costa Rica"
          description="Paradise Found: Unveiling Costa Rica's Top Beach Picks For Your Ultimate Island Getaway"
          extraClass="px-2 sm:px-4 xl:px-14 py-4 sm:py-0"
          delay={0}
        />
        <ImageCard
          src="/images/beach8.jpg"
          name="Playa Flamingo"
          region="Guanacaste"
          type="Beach"
          delay={0.2}
        />
        <ImageCard
          src="/images/beach9.jpg"
          name="Cahuita Beach"
          region="Limón"
          type="Beach"
          delay={0.4}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-[0.7fr_1.3fr_1fr] gap-3 sm:gap-4">
        <ImageCard
          src="/images/mountain1.jpg"
          name="Cerro Chirripó"
          region="San José"
          type="Mountain"
          contrast
          delay={0}
        />
        <ImageCard
          src="/images/mountain2.jpg"
          name="Turrialba Volcano"
          region="Cartago"
          type="Mountain"
          contrast
          delay={0.2}
        />
        <TextBlock
          align="right"
          title="Costa Rica's Mountain Wonders"
          description="Into The Wild: Journeying Through The Breathtaking Peaks And Volcanoes Of Costa Rica's Untamed Highlands"
          extraClass="px-2 sm:px-4 xl:px-14 py-4 sm:py-0 order-first sm:order-last"
          delay={0.4}
        />
      </div>
    </section>
  );
}
