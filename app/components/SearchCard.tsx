"use client";

import { useState, useRef, useEffect } from "react";

type SearchType = "Hotels" | "Flights" | "Tours" | "Cars";

const TYPES: SearchType[] = ["Hotels", "Flights", "Tours", "Cars"];

const DEMO_RESULTS: Record<SearchType, number> = {
  Hotels: 24,
  Flights: 18,
  Tours: 12,
  Cars: 31,
};

const TYPE_ICONS: Record<SearchType, JSX.Element> = {
  Hotels: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="20" rx="1" />
      <path d="M9 21V12h6v9" />
      <path d="M9 7h1m4 0h1M9 11h1m4 0h1" />
    </svg>
  ),
  Flights: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2C4.3 5.1 3.8 5.3 3.5 5.7l-.3.4c-.3.5-.2 1.1.3 1.4L8 10l-2 2-3-.4c-.4-.1-.7.1-.9.4l-.1.3c-.2.4-.1.9.3 1.1L5 14.6l1.4 2.7c.2.4.7.5 1.1.3l.3-.1c.3-.2.5-.5.4-.9L8 14l2-2 3 4.5c.3.5.9.6 1.4.3l.4-.3c.4-.3.6-.8.5-1.3z" />
    </svg>
  ),
  Tours: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.4 12.3 7.7 12.6.2.2.6.2.8 0C12.6 22.3 20 15.4 20 10a8 8 0 0 0-8-8z" />
    </svg>
  ),
  Cars: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14l4 4v4a2 2 0 0 1-2 2h-2" />
      <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
      <path d="M5 9V5a2 2 0 0 1 2-2h6l2 4H5z" />
    </svg>
  ),
};

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ChevronDown({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

type SearchState = "idle" | "loading" | "results";

export default function SearchCard() {
  const [type, setType] = useState<SearchType>("Hotels");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchState, setSearchState] = useState<SearchState>("idle");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectType(t: SearchType) {
    setType(t);
    setDropdownOpen(false);
    setSearchState("idle");
  }

  function handleSearch() {
    setSearchState("loading");
    setTimeout(() => setSearchState("results"), 1400);
  }

  const buttonLabel: Record<SearchType, string> = {
    Hotels: "Search Hotels",
    Flights: "Search Flights",
    Tours: "Search Tours",
    Cars: "Search Cars",
  };

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">

      {/* Header — type switcher */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((o) => !o)}
          className="flex items-center gap-3 w-full pb-4 md:pb-5 border-b border-gray-100 group"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
            {TYPE_ICONS[type]}
          </div>
          <span className="font-medium text-gray-900 text-xl md:text-2xl flex-1 text-left">
            Discover {type}
          </span>
          <span className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
            <ChevronDown color="#374151" />
          </span>
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 z-20 overflow-hidden">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => selectType(t)}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${t === type ? "bg-orange-50 text-orange-600 font-medium" : "text-gray-700"}`}
              >
                <span className="w-5 h-5 flex items-center justify-center">{TYPE_ICONS[t]}</span>
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 md:mt-5 space-y-3 md:space-y-4">

        {/* Fields — Hotels */}
        {type === "Hotels" && (
          <>
            <div>
              <label className="text-xs text-gray-500 font-medium block mb-1.5">City Or Hotel Name</label>
              <div className="flex items-center gap-2.5 bg-blue-50 rounded-xl px-4 py-2.5 md:py-3">
                <PinIcon />
                <input type="text" placeholder="Hotel Name" className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 w-full" />
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Check - In</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <CalendarIcon />
                  <span className="text-xs text-gray-600 leading-none">Sun, 28/02/2024</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Duration</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <MoonIcon />
                  <span className="text-xs text-gray-600 leading-none">1 Night</span>
                </div>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium block mb-1.5">Guests And Rooms</label>
              <div className="flex items-center gap-2.5 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3">
                <UsersIcon />
                <span className="text-xs text-gray-600 flex-1">3 Adult, 1 Child And 1 Room</span>
                <ChevronDown color="#94a3b8" size={15} />
              </div>
            </div>
          </>
        )}

        {/* Fields — Flights */}
        {type === "Flights" && (
          <>
            <div className="flex gap-2 md:gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">From</label>
                <div className="flex items-center gap-2.5 bg-blue-50 rounded-xl px-4 py-2.5 md:py-3">
                  <PinIcon />
                  <input type="text" placeholder="City or airport" className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 w-full" />
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">To</label>
                <div className="flex items-center gap-2.5 bg-blue-50 rounded-xl px-4 py-2.5 md:py-3">
                  <PinIcon />
                  <input type="text" placeholder="City or airport" className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 w-full" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Departure</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <CalendarIcon />
                  <span className="text-xs text-gray-600 leading-none">Sun, 28/02/2024</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Passengers</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <UsersIcon />
                  <span className="text-xs text-gray-600 leading-none">2 Adults</span>
                  <ChevronDown color="#94a3b8" size={15} />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Fields — Tours */}
        {type === "Tours" && (
          <>
            <div>
              <label className="text-xs text-gray-500 font-medium block mb-1.5">Destination</label>
              <div className="flex items-center gap-2.5 bg-blue-50 rounded-xl px-4 py-2.5 md:py-3">
                <PinIcon />
                <input type="text" placeholder="Where do you want to go?" className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 w-full" />
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Date</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <CalendarIcon />
                  <span className="text-xs text-gray-600 leading-none">Sun, 28/02/2024</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Group Size</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <UsersIcon />
                  <span className="text-xs text-gray-600 leading-none">4 People</span>
                  <ChevronDown color="#94a3b8" size={15} />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Fields — Cars */}
        {type === "Cars" && (
          <>
            <div>
              <label className="text-xs text-gray-500 font-medium block mb-1.5">Pick-up Location</label>
              <div className="flex items-center gap-2.5 bg-blue-50 rounded-xl px-4 py-2.5 md:py-3">
                <PinIcon />
                <input type="text" placeholder="Airport, hotel or address" className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 w-full" />
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Pick-up Date</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <CalendarIcon />
                  <span className="text-xs text-gray-600 leading-none">Sun, 28/02/2024</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1.5">Drop-off Date</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 md:py-3">
                  <CalendarIcon />
                  <span className="text-xs text-gray-600 leading-none">Wed, 06/03/2024</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Search button */}
        <button
          onClick={handleSearch}
          disabled={searchState === "loading"}
          className="w-full bg-black text-white rounded-full py-3 md:py-3.5 text-sm font-semibold hover:bg-gray-800 transition-colors mt-1 disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {searchState === "loading" ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Searching...
            </>
          ) : (
            buttonLabel[type]
          )}
        </button>

        {/* Demo results */}
        {searchState === "results" && (
          <div className="flex items-center gap-2.5 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-sm text-green-700 font-medium">
              {DEMO_RESULTS[type]} {type.toLowerCase()} found in Costa Rica
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
