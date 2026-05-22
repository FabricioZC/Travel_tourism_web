import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const reviews = [
  {
    name: "James Holloway", country: "United Kingdom", img: "/images/person2.png", bg: "bg-blue-100",
    rating: 5, destination: "Playa Conchal",
    text: "Playa Conchal is pure paradise. The shell-white sand and crystal-clear water are breathtaking. TicoTrip handled every detail so we could just enjoy it.",
    date: "January 2025",
  },
  {
    name: "Camille Dupont", country: "France", img: "/images/person3.png", bg: "bg-green-100",
    rating: 5, destination: "Tamarindo",
    text: "We learned to surf in Tamarindo and it was the highlight of our trip. The instructors were incredible and TicoTrip's recommendations were spot-on.",
    date: "February 2025",
  },
  {
    name: "Lucas Fernández", country: "Argentina", img: "/images/person4.png", bg: "bg-yellow-100",
    rating: 5, destination: "Cerro Chirripó",
    text: "Hiking Chirripó was the most challenging and rewarding experience of my life. TicoTrip organized everything flawlessly. ¡Pura Vida!",
    date: "April 2025",
  },
  {
    name: "Emily Chen", country: "Canada", img: "/images/person1.png", bg: "bg-purple-100",
    rating: 5, destination: "Puerto Viejo",
    text: "The Caribbean side of Costa Rica is magical. Puerto Viejo has the most unique culture and TicoTrip found us the perfect spot right on the beach.",
    date: "March 2025",
  },
  {
    name: "Marco Rossi", country: "Italy", img: "/images/person2.png", bg: "bg-red-100",
    rating: 5, destination: "Nosara",
    text: "Nosara is a hidden gem. The yoga retreat TicoTrip recommended was life-changing. Will be back every year without question.",
    date: "February 2025",
  },
  {
    name: "Ana Gutierrez", country: "Mexico", img: "/images/person3.png", bg: "bg-teal-100",
    rating: 5, destination: "Manuel Antonio",
    text: "Seeing monkeys on the beach at Manuel Antonio was surreal. TicoTrip set up everything perfectly — from lodging to guided hikes. Absolutely unforgettable.",
    date: "May 2025",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 sm:px-8 md:px-12 xl:px-20 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-gray-50 font-bold tracking-tighter whitespace-nowrap" style={{ fontSize: "clamp(60px, 15vw, 280px)" }}>
            REVIEWS
          </span>
        </div>
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div>
            <p className="text-orange-500 text-sm font-semibold mb-4">Traveler Stories</p>
            <h1 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
              What Our Travelers<br />Are Saying
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-gray-900 font-medium" style={{ fontSize: "clamp(48px, 7vw, 80px)" }}>4.9</p>
            <Stars count={5} />
            <p className="text-gray-400 text-xs font-medium mt-2">2,400+ reviews</p>
          </div>
        </div>
      </section>

      {/* Featured review */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pb-12">
        <div className="relative rounded-3xl overflow-hidden min-h-[320px] sm:h-[400px]">
          <Image src="/images/beach10.jpg" alt="Featured" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 p-8 sm:p-14 xl:p-16 flex flex-col justify-end h-full min-h-[320px] max-w-2xl">
            <Stars count={5} />
            <p className="text-white font-medium text-xl sm:text-2xl leading-relaxed mt-5 mb-7">
              &ldquo;Costa Rica changed my perspective on travel. TicoTrip gave us the keys to a world most tourists never see.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-orange-100 overflow-hidden flex items-end justify-center">
                <Image src="/images/person1.png" alt="Sarah" width={34} height={44} className="object-contain" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Sarah Mitchell</p>
                <p className="text-white/60 text-xs mt-0.5">United States · Manuel Antonio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review grid */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map(({ name, country, img, bg, rating, destination, text, date }) => (
            <div key={name + destination} className="flex flex-col gap-5 p-7 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center justify-between">
                <Stars count={rating} />
                <span className="text-gray-400 text-xs font-medium">{date}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${bg} overflow-hidden flex items-end justify-center flex-shrink-0`}>
                  <Image src={img} alt={name} width={30} height={38} className="object-contain" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm">{name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{country} · {destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
