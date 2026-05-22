"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SearchCard from "@/app/components/SearchCard";

const tagRows = [
  [{ label: "LANDSCAPE", px: "px-5 md:px-7 xl:px-10" }, { label: "EXCURSION", px: "px-6 md:px-9 xl:px-14" }, { label: "JOURNEY", px: "px-4 md:px-6 xl:px-8" }],
  [{ label: "EXCITING", px: "px-4 md:px-6 xl:px-7" }, { label: "TRAVEL", px: "px-4 md:px-6 xl:px-8" }, { label: "BEACH", px: "px-5 md:px-8 xl:px-12" }, { label: "ADVENTURE", px: "px-4 md:px-5 xl:px-6" }],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section
      className="relative flex-1 overflow-hidden mx-1 sm:mx-2 md:mx-3 rounded-t-3xl pb-16"
      style={{ minHeight: "calc(100svh - 60px)" }}
    >
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-beach2.webp"
          alt="Costa Rica landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
      </motion.div>

      <div className="relative z-10 min-h-full flex items-center justify-center">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 md:gap-16 xl:gap-8 w-full px-4 sm:px-6 md:px-12 xl:px-16 py-20 md:py-32 xl:pt-16 xl:pb-10 xl:h-full">

          {/* Headline */}
          <div className="w-full xl:flex-1 xl:flex xl:items-center xl:h-full text-center xl:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-white font-normal select-none" style={{ lineHeight: "1", letterSpacing: "-0.12em" }}>
                <motion.span variants={itemVariants} className="block" style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>Welcome to</motion.span>
                <motion.span variants={itemVariants} className="block" style={{ fontSize: "clamp(52px, 10vw, 140px)" }}>Costa Rica</motion.span>
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-white font-light mt-4 md:mt-5"
                style={{ fontSize: "clamp(15px, 2.2vw, 30px)" }}
              >
                Adventure and Tranquility
              </motion.p>
            </motion.div>
          </div>

          {/* Search card + tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 xl:gap-4 w-full xl:flex-shrink-0 mx-auto xl:mx-0 xl:mt-8"
            style={{ maxWidth: "540px" }}
          >
            <motion.div variants={itemVariants}>
              <SearchCard />
            </motion.div>

            {tagRows.map((row, r) => (
              <div key={r} className={`flex flex-wrap justify-center xl:justify-start gap-2 md:gap-3 ${r === 0 ? "mt-1" : ""}`}>
                {row.map(({ label, px }, i) => (
                  <motion.span
                    variants={tagVariants}
                    key={i}
                    className={`border border-white/80 text-white text-[10px] md:text-[12px] xl:text-[13px] font-light tracking-wider ${px} py-1.5 md:py-2 rounded-full bg-white/15 backdrop-blur-sm`}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
