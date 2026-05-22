export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Part */}
      <div className="relative bg-white px-4 sm:px-8 md:px-12 xl:px-20 pt-24 pb-16 md:pb-24 overflow-hidden border-t border-gray-100">
        
        {/* Background word */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="text-gray-50 font-bold tracking-tighter whitespace-nowrap"
            style={{ fontSize: "clamp(120px, 24vw, 400px)" }}
          >
            COSTA RICA
          </span>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
          {/* Left Side: Connect With Us */}
          <div className="flex flex-col gap-8 max-w-md">
            <h2 className="text-gray-900 font-medium leading-tight" style={{ fontSize: "clamp(48px, 6vw, 72px)" }}>
              Connect<br />With Us
            </h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed pr-8">
              "Plan your ultimate Costa Rican getaway. Discover pristine beaches, lush rainforests, and vibrant culture. Subscribe for the latest travel tips."
            </p>
            <div className="flex items-center bg-gray-100 rounded-full p-2 mt-2 w-full max-w-sm border border-gray-200">
              <div className="pl-4 pr-2 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none w-full text-sm text-gray-900 placeholder-gray-700 font-semibold"
              />
              <button className="bg-[#ff5a00] hover:bg-[#e04e00] transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-12 sm:gap-24 lg:gap-32 xl:gap-40 lg:mr-10">
            {/* Menu */}
            <div className="flex flex-col gap-5">
              <h4 className="text-gray-900 font-bold mb-1">Menu</h4>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Home</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Destinations</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Blog</a>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-5">
              <h4 className="text-gray-900 font-bold mb-1">Explore</h4>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Beaches</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Mountains</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">National Parks</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Adventures</a>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-5">
              <h4 className="text-gray-900 font-bold mb-1">Support</h4>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Travel Tips</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">FAQ</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Contact</a>
              <a href="#" className="text-gray-600 font-semibold text-sm hover:text-orange-500 transition-colors">Partners</a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="bg-[#f0f1f3] px-4 sm:px-8 md:px-12 xl:px-20 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm font-semibold">
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Legal</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Recalls</a>
        </div>
        
        <p className="text-gray-500 text-sm font-semibold text-center">
          © 2025 Copyright By Ticotrip
        </p>

        <div className="flex items-center gap-4">
          {/* YouTube */}
          <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-white hover:border-gray-400 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-white hover:border-gray-400 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-white hover:border-gray-400 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-white hover:border-gray-400 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-white hover:border-gray-400 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
