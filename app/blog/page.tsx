import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const featured = {
  title: "10 Reasons Why Costa Rica Should Be Your Next Adventure",
  excerpt: "From cloud forests to Caribbean beaches, Costa Rica packs more biodiversity per square kilometer than almost anywhere on Earth. Here's why it deserves a spot at the top of your bucket list.",
  img: "/images/hero-beach2.webp",
  category: "Travel Guide",
  date: "May 15, 2025",
  readTime: "8 min read",
  author: { name: "María Rodríguez", img: "/images/person1.png", bg: "bg-orange-100" },
};

const posts = [
  {
    title: "Playa Conchal: The Beach Made of Shells",
    excerpt: "Discover the unique geology and hidden coves of Guanacaste's most iconic beach.",
    img: "/images/beach10.jpg",
    category: "Beaches",
    date: "May 10, 2025",
    readTime: "5 min read",
  },
  {
    title: "Climbing Cerro Chirripó: A Complete Guide",
    excerpt: "Everything you need to know before tackling Costa Rica's highest peak at 3,821 meters.",
    img: "/images/mountain1.jpg",
    category: "Adventure",
    date: "April 28, 2025",
    readTime: "10 min read",
  },
  {
    title: "Pura Vida: More Than Just a Phrase",
    excerpt: "Understanding the Costa Rican philosophy that transforms the way you see everyday life.",
    img: "/images/beach9.jpg",
    category: "Culture",
    date: "April 20, 2025",
    readTime: "4 min read",
  },
  {
    title: "The Best Surf Spots in Tamarindo",
    excerpt: "Beginner to expert — here are the waves that make Tamarindo the surf capital of Costa Rica.",
    img: "/images/beach4.jpg",
    category: "Adventure",
    date: "April 12, 2025",
    readTime: "6 min read",
  },
  {
    title: "Turrialba Volcano: Into the Crater",
    excerpt: "An active volcano with dramatic views and fascinating geology just outside San José.",
    img: "/images/mountain2.jpg",
    category: "Nature",
    date: "March 30, 2025",
    readTime: "7 min read",
  },
  {
    title: "Puerto Viejo: The Caribbean Side of Costa Rica",
    excerpt: "Reggae rhythms, coral reefs, and the freshest ceviche — the Caribbean coast has its own personality.",
    img: "/images/beach3.webp",
    category: "Culture",
    date: "March 18, 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "Beaches", "Adventure", "Culture", "Nature", "Travel Guide"];

export default function BlogPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative px-4 sm:px-8 md:px-12 xl:px-20 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-gray-50 font-bold tracking-tighter whitespace-nowrap" style={{ fontSize: "clamp(120px, 22vw, 400px)" }}>
            BLOG
          </span>
        </div>
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div>
            <p className="text-orange-500 text-sm font-semibold mb-4">Stories & Tips</p>
            <h1 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
              Travel Deeper,<br />Know More.
            </h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs pb-2">
            Insider guides, hidden gems, and honest stories from travelers who've been there.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pb-12">
        <div className="group cursor-pointer grid xl:grid-cols-2 rounded-3xl overflow-hidden border border-gray-100">
          <div className="relative h-64 sm:h-80 xl:h-full min-h-[340px]">
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-medium bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <span className="text-gray-400 text-xs font-medium">{featured.readTime}</span>
            </div>
            <h2 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
              {featured.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${featured.author.bg} overflow-hidden flex items-end justify-center`}>
                  <Image src={featured.author.img} alt={featured.author.name} width={26} height={34} className="object-contain" />
                </div>
                <span className="text-gray-700 text-sm font-medium">{featured.author.name}</span>
              </div>
              <span className="text-gray-400 text-xs font-medium">{featured.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="px-4 sm:px-8 md:px-12 xl:px-20 pb-10 flex gap-3 flex-wrap">
        {categories.map((c, i) => (
          <span
            key={c}
            className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              i === 0
                ? "bg-gray-900 text-white"
                : "border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Posts grid */}
      <section className="px-4 sm:px-8 md:px-12 xl:px-20 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map(({ title, excerpt, img, category, date, readTime }) => (
            <div key={title} className="group cursor-pointer flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden h-60">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                <span className="absolute top-4 left-4 text-white text-[11px] font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <div className="flex flex-col gap-2 px-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                  <span>{date}</span>
                  <span>·</span>
                  <span>{readTime}</span>
                </div>
                <h3 className="text-gray-900 font-medium text-base leading-snug">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
