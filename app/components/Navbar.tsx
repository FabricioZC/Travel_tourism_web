"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Destination", href: "/destination" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white flex items-center justify-between px-4 md:px-8 xl:px-10 py-4 h-[60px] md:h-[72px] flex-shrink-0 relative z-50">
        <a href="/" className="font-bold text-lg md:text-xl tracking-widest text-black select-none">
          TICOTRIP
        </a>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-8">
          {links.map(({ label, href }, i) => (
            i === 0
              ? <a key={label} href={href} className="border-[1.5px] border-black rounded-full px-5 py-1.5 text-sm font-semibold text-black leading-none">{label}</a>
              : <a key={label} href={href} className="text-sm font-medium text-gray-800 hover:text-black">{label}</a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden xl:flex items-center gap-3">
          <button className="border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700">EN</button>
          <Link href="/login" className="border-[1.5px] border-black rounded-full px-6 py-1.5 text-sm font-semibold text-black bg-white">Login</Link>
          <Link href="/register" className="bg-orange-500 rounded-full px-6 py-1.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">Register</Link>
        </div>

        {/* Mobile/tablet: Register + hamburger */}
        <div className="flex xl:hidden items-center gap-3">
          <Link href="/register" className="bg-orange-500 rounded-full px-4 md:px-5 py-1.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
            Register
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-1.5 text-gray-800 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile/tablet drawer */}
      {open && (
        <div className="xl:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="relative ml-auto w-[280px] md:w-[320px] h-full bg-white flex flex-col px-6 py-8 gap-2 shadow-2xl">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Menu</p>

            {links.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-3 border-b border-gray-100 last:border-0 ${i === 0 ? "text-orange-500" : "text-gray-800 hover:text-black"}`}
              >
                {label}
              </a>
            ))}

            <div className="mt-auto flex flex-col gap-3 pt-6">
              <button className="border border-gray-300 rounded-full py-2.5 text-sm font-medium text-gray-700 w-full">EN</button>
              <Link href="/login" className="border-[1.5px] border-black rounded-full py-2.5 text-sm font-semibold text-black w-full text-center">Login</Link>
              <Link href="/register" className="bg-orange-500 rounded-full py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors w-full text-center">Register</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
