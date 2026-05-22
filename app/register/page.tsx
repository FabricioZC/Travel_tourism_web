import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white flex">

      {/* Left — photo panel */}
      <div className="hidden lg:flex lg:w-1/2 relative p-6">
        <div className="relative w-full rounded-3xl overflow-hidden">
          <Image
            src="/images/beach9.jpg"
            alt="Costa Rica"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />

          {/* Brand */}
          <div className="absolute top-8 left-8">
            <span className="text-white font-bold text-xl tracking-widest">TICOTRIP</span>
          </div>

          {/* Bottom quote */}
          <div className="absolute bottom-10 left-8 right-8">
            <p className="text-white font-medium text-3xl leading-snug mb-3">
              Start your journey<br />through Pura Vida.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Join thousands of travelers exploring<br />the best of Costa Rica.
            </p>
          </div>

        </div>
      </div>

      {/* Right — form panel */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 relative overflow-hidden">

        <div className="relative z-10 w-full max-w-sm mx-auto py-10">

          {/* Mobile brand */}
          <div className="lg:hidden mb-8">
            <span className="text-gray-900 font-bold text-xl tracking-widest">TICOTRIP</span>
          </div>

          <p className="text-[#ff5a00] text-sm font-semibold mb-2">Get started free</p>
          <h1 className="text-gray-900 font-medium text-3xl leading-tight mb-8">
            Create your<br />account
          </h1>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3.5 border border-gray-200 gap-3">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                placeholder="Full name"
                className="bg-transparent outline-none w-full text-sm text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3.5 border border-gray-200 gap-3">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none w-full text-sm text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3.5 border border-gray-200 gap-3">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full text-sm text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3.5 border border-gray-200 gap-3">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <input
                type="password"
                placeholder="Confirm password"
                className="bg-transparent outline-none w-full text-sm text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>

            <p className="text-xs text-gray-400 font-medium px-2">
              By creating an account you agree to our{" "}
              <a href="#" className="text-[#ff5a00] hover:underline">Terms</a>{" "}
              and{" "}
              <a href="#" className="text-[#ff5a00] hover:underline">Privacy Policy</a>.
            </p>

            <button
              type="submit"
              className="w-full bg-[#ff5a00] hover:bg-[#e04e00] transition-colors text-white font-semibold text-sm py-3.5 rounded-full mt-1"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs font-medium">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-400 font-medium mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#ff5a00] font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
