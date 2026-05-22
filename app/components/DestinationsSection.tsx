"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: "Manuel Antonio Beach",
      location: "Puntarenas",
      type: "Beach",
      description: "Embark On An Oasis Adventure: Discover The Vibrant Charms, Scenic Allure, And Serene Atmosphere Of Costa Rica's Beloved Tourist Hotspot Beach",
      image: "/images/beach11.jpg"
    },
    {
      id: 2,
      name: "Santa Teresa Beach",
      location: "Puntarenas",
      type: "Beach",
      description: "Embark On An Oasis Adventure: Discover The Vibrant Charms, Scenic Allure, And Serene Atmosphere Of Costa Rica's Beloved Tourist Hotspot Beach",
      image: "/images/beach9.jpg"
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 xl:px-20 pb-20 max-sm:pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full overflow-hidden">
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden h-[600px] lg:h-[800px] w-full flex flex-col justify-between p-6 md:p-10 z-0 group"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/80 z-0" />

            {/* Top Tags */}
            <div className="flex gap-3 relative z-10">
              <span className="text-white text-xs font-medium border border-white/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {dest.location}
              </span>
              <span className="text-white text-xs font-medium border border-white/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {dest.type}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col gap-4 mt-auto">
              <h3 className="text-white text-4xl md:text-5xl font-medium leading-tight">
                {dest.name}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-md">
                {dest.description}
              </p>
              <button className="mt-4 w-full bg-white text-gray-900 font-semibold py-4 rounded-full flex items-center justify-center relative hover:bg-gray-100 transition-colors">
                <span>Booking Now</span>
                <svg className="w-5 h-5 absolute right-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
