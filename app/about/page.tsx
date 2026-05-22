import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const stats = [
  { value: "50K+", label: "Happy Travelers" },
  { value: "100+", label: "Destinations" },
  { value: "4.9", label: "Average Rating" },
  { value: "2+", label: "Years of Pura Vida" },
];

const team = [
  { name: "María Rodríguez", role: "Founder & CEO", img: "/images/person1.png" },
  { name: "Carlos Ureña", role: "Head of Experiences", img: "/images/person2.png" },
  { name: "Sofía Mora", role: "Travel Curator", img: "/images/person3.png" },
  { name: "Diego Vargas", role: "Community Manager", img: "/images/person4.png" },
];

const values = [
  "Authentic local experiences",
  "Sustainable tourism focus",
  "Expert curated destinations",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 sm:px-8 md:px-12 xl:px-20 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-gray-50 font-bold tracking-tighter whitespace-nowrap" style={{ fontSize: "clamp(120px, 20vw, 360px)" }}>
            ABOUT
          </span>
        </div>
        <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-orange-500 text-sm font-semibold mb-4">Since 2024</p>
            <h1 className="text-gray-900 font-medium leading-tight mb-8" style={{ fontSize: "clamp(36px, 6vw, 80px)" }}>
              We Live For<br />Pura Vida.
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              TicoTrip was born from a simple belief: Costa Rica's natural wonders deserve to be shared with the world. We connect travelers with authentic experiences, pristine beaches, and the warmth of Tico culture.
            </p>
          </div>
          <div className="flex-1 relative h-[380px] sm:h-[460px] w-full max-w-xl">
            <div className="absolute right-0 top-0 w-[65%] h-[80%] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/images/beach10.jpg" alt="Playa Conchal" fill className="object-cover" sizes="40vw" />
            </div>
            <div className="absolute left-0 bottom-0 w-[50%] h-[60%] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/mountain1.jpg" alt="Chirripó" fill className="object-cover" sizes="30vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 py-20">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-3">
              <span className="text-gray-900 font-medium" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>{value}</span>
              <span className="text-gray-400 text-sm font-medium">{label}</span>
              <div className="w-8 h-0.5 bg-orange-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-4 sm:mx-8 md:mx-12 xl:mx-20 mb-24 bg-gray-50 rounded-3xl px-6 sm:px-12 xl:px-16 py-14 xl:py-20">
        <div className="grid xl:grid-cols-2 gap-14 items-center">
          <div className="relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden">
            <Image src="/images/beach8.jpg" alt="Mission" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-6 left-6 text-white text-[11px] font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              Guanacaste · Playa Flamingo
            </span>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-orange-500 text-sm font-semibold">Our Mission</p>
            <h2 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              Making Costa Rica<br />accessible to everyone.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We curate the best destinations, hidden gems, and local experiences so every traveler — from first-timers to seasoned adventurers — can discover what makes Costa Rica extraordinary.
            </p>
            <div className="flex flex-col gap-4">
              {values.map(item => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pb-28">
        <p className="text-orange-500 text-sm font-semibold mb-3">The People</p>
        <h2 className="text-gray-900 font-medium leading-tight mb-12" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          Meet the team
        </h2>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {team.map(({ name, role, img }) => (
            <div key={name} className="group flex flex-col gap-4 cursor-pointer">
              <div className="rounded-3xl h-64 sm:h-80 xl:h-96 overflow-hidden relative bg-gray-50">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-3"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div>
                <p className="text-gray-900 font-medium text-sm">{name}</p>
                <p className="text-gray-400 text-xs font-medium mt-1">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
