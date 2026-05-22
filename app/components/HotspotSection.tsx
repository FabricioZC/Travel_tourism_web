"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HotspotSection() {
  return (
    <section className="relative bg-white px-4 sm:px-8 md:px-12 xl:px-20 py-20 max-sm:py-10 overflow-hidden">

      {/* Background word */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none translate-y-20"
        aria-hidden
      >
        <span
          className="text-gray-100 font-medium tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(120px, 24vw, 400px)" }}
        >
          COSTA RICA
        </span>
      </motion.div>

      {/* Top row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-20 max-lg:mb-8"
      >
        <p className="text-gray-400 text-sm font-medium mb-2">Since 2024</p>
        <div className="flex flex-row items-start gap-3 max-lg:flex-col max-lg:gap-6">
          <h2
            className="text-gray-900 font-medium leading-tight"
            style={{ fontSize: "clamp(26px, 5vw, 64px)" }}
          >
            Costa Rica's Premier<br />Beach Hotspot
          </h2>

          <div className="flex flex-col items-start gap-4 max-w-md ml-auto mr-10 xl:mr-14 max-lg:ml-0 max-lg:mr-0 max-lg:max-w-full">
            <p className="text-gray-400 text-sm leading-relaxed">
              Embark On An Oasis Adventure: Discover The Vibrant Charms, Scenic Allure, And Serene Atmosphere Of Costa Rica's Beloved Tourist Hotspot Beach
            </p>
            <button className="bg-orange-500 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      {/* Card */}
      <div className="relative z-10 flex justify-center ml-130 max-xl:ml-0">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <div className="relative rounded-3xl overflow-hidden h-[460px] max-sm:h-72 shadow-xl">
            <Image
              src="/images/beach10.jpg"
              alt="Playa Conchal"
              fill
              sizes="(max-width: 640px) 90vw, 450px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="text-white text-[11px] font-medium bg-black/40 backdrop-blur-md border border-white/20 shadow-sm px-3 py-1 rounded-full">
                Guanacaste
              </span>
              <span className="text-white text-[11px] font-medium bg-black/40 backdrop-blur-md border border-white/20 shadow-sm px-3 py-1 rounded-full">
                Beach
              </span>
            </div>
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <h3 className="font-medium text-gray-900 text-2xl leading-tight">Playa Conchal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nestled Along The Northern Coastline Of Guanacaste, Playa Conchal Stands As A Testament To Natural Beauty And Tranquility. With Its Pristine Shell-White Sands And Azure Waters.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
