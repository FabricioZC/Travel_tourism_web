"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  { name: "Manuel Antonio", region: "Puntarenas", image: "/images/beach1.webp" },
  { name: "Tamarindo", region: "Guanacaste", image: "/images/beach2.webp" },
  { name: "Puerto Viejo", region: "Limón", image: "/images/beach3.webp" },
  { name: "Nosara", region: "Guanacaste", image: "/images/beach4.jpg" },
  { name: "Montezuma", region: "Puntarenas", image: "/images/beach5.jpg" },
  { name: "Jacó", region: "Puntarenas", image: "/images/beach6.jpg" },
];

const n = destinations.length;
const avatars = [
  "/images/person1.png",
  "/images/person2.png",
  "/images/person3.png",
  "/images/person4.png",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const itemUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

function DestCard({ dest }: { dest: (typeof destinations)[0] }) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group">
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="absolute top-3 left-3">
        <span className="text-white text-[10px] font-medium bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {dest.region}
        </span>
      </div>
      <button className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <p className="absolute bottom-3 left-3 text-white font-semibold text-sm leading-tight drop-shadow">
        {dest.name}
      </p>
    </div>
  );
}

export default function AttractionSection() {
  const [index, setIndex] = useState(0);
  const mobileRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    if (mobileRef.current) {
      mobileRef.current.scrollBy({ left: -mobileRef.current.offsetWidth, behavior: "smooth" });
    }
    setIndex((i) => (i - 3 + n) % n);
  };

  const next = () => {
    if (mobileRef.current) {
      mobileRef.current.scrollBy({ left: mobileRef.current.offsetWidth, behavior: "smooth" });
    }
    setIndex((i) => (i + 3) % n);
  };

  const desktopCards = [0, 1, 2].map((offset) => destinations[(index + offset) % n]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-y-8 xl:gap-y-12 xl:gap-x-44 items-center"
    >
      {/* Left */}
      <motion.div variants={itemUpVariants} className="flex flex-col gap-4 xl:gap-6">

        {/* Mobile: swipe carousel */}
        <div
          ref={mobileRef}
          className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-3 h-64 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {destinations.map((dest) => (
            <div key={dest.name} className="flex-shrink-0 w-full snap-start">
              <DestCard dest={dest} />
            </div>
          ))}
        </div>

        {/* Tablet / Desktop: 3 cards rotating */}
        <div className="hidden sm:flex items-end gap-2 md:gap-3">
          {desktopCards.map((dest, i) => (
            <motion.div
              key={`${index}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-1 h-44 xl:h-[200px]"
            >
              <DestCard dest={dest} />
            </motion.div>
          ))}
        </div>

        {/* Heading + nav */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">From 2024</p>
            <h2 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(22px, 4vw, 48px)" }}>
              An Unmissable<br />Tourist Attraction
            </h2>
          </div>

          <div className="flex gap-2 flex-shrink-0 mb-1">
            <button
              onClick={prev}
              className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div variants={itemLeftVariants} className="flex flex-col gap-5 w-full pr-0 sm:pr-4 xl:pr-6 xl:-mt-12">
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
          Manuel Antonio stole my heart. The serenity of the ocean, the golden sand, and the tropical jungle made every moment magical. A paradise everyone must experience!
        </p>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                className="w-11 h-11 xl:w-12 xl:h-12 rounded-full border-2 border-white overflow-hidden relative"
                style={{ backgroundColor: ["#6CB4E4","#E07B5F","#4A90D9","#F5A623"][i] }}
              >
                <Image src={src} alt={`guest ${i + 1}`} fill sizes="36px" className="object-cover" />
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium">150K happy guests</p>
        </div>

        <div>
          <div className="flex gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-400 text-sm">18,921 (reviews)</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
