"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const filters = ["All", "Beaches", "Mountains", "Parks", "Adventure"];

const destinations = [
  { name: "Playa Conchal", region: "Guanacaste", type: "Beaches", img: "/images/beach10.jpg", desc: "Shell-white sands and turquoise waters." },
  { name: "Playa Flamingo", region: "Guanacaste", type: "Beaches", img: "/images/beach8.jpg", desc: "Upscale beach town with stunning sunsets." },
  { name: "Cahuita Beach", region: "Limón", type: "Beaches", img: "/images/beach9.jpg", desc: "Caribbean vibes with coral reef snorkeling." },
  { name: "Manuel Antonio", region: "Puntarenas", type: "Parks", img: "/images/beach1.webp", desc: "National park where jungle meets the sea." },
  { name: "Tamarindo", region: "Guanacaste", type: "Beaches", img: "/images/beach2.webp", desc: "Surf capital of Costa Rica." },
  { name: "Puerto Viejo", region: "Limón", type: "Beaches", img: "/images/beach3.webp", desc: "Afro-Caribbean culture and laid-back vibes." },
  { name: "Cerro Chirripó", region: "San José", type: "Mountains", img: "/images/mountain1.jpg", desc: "Highest peak in Costa Rica at 3,821m." },
  { name: "Turrialba Volcano", region: "Cartago", type: "Mountains", img: "/images/mountain2.jpg", desc: "Active volcano with dramatic crater views." },
  { name: "Nosara", region: "Guanacaste", type: "Adventure", img: "/images/beach4.jpg", desc: "Yoga retreats and pristine surf breaks." },
  { name: "Montezuma", region: "Puntarenas", type: "Adventure", img: "/images/beach5.jpg", desc: "Bohemian beach town with hidden waterfalls." },
  { name: "Jacó Beach", region: "Puntarenas", type: "Beaches", img: "/images/beach6.jpg", desc: "Costa Rica's most vibrant beach destination." },
  { name: "Tortuguero", region: "Limón", type: "Parks", img: "/images/beach11.jpg", desc: "Sea turtle nesting grounds and jungle canals." },
];

export default function DestinationPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? destinations : destinations.filter(d => d.type === active);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 sm:px-8 md:px-12 xl:px-20 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-gray-50 font-bold tracking-tighter whitespace-nowrap" style={{ fontSize: "clamp(60px, 15vw, 300px)" }}>
            EXPLORE
          </span>
        </div>
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div>
            <p className="text-orange-500 text-sm font-semibold mb-4">Costa Rica</p>
            <h1 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
              Find Your Perfect<br />Destination
            </h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs pb-2">
            From Pacific beaches to Caribbean coasts — discover every corner of Costa Rica.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="px-4 sm:px-8 md:px-12 xl:px-20 pb-10">
        <div className="flex gap-3 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map(({ name, region, type, img, desc }) => (
            <div key={name} className="group cursor-pointer flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden h-72">
                <Image
                  src={img}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-white text-[11px] font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{region}</span>
                  <span className="text-white text-[11px] font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{type}</span>
                </div>
              </div>
              <div className="px-1">
                <h3 className="text-gray-900 font-medium text-lg">{name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-1.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
