import { ChevronDown, Flame, Star, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="absolute inset-0 fog-overlay pointer-events-none" />
      
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-red-900/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-red-600/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-red-900/40 border border-red-700/50 rounded-full text-red-400 text-xs sm:text-sm uppercase tracking-widest backdrop-blur-sm font-medium">
            <Flame className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            Welcome to Hawkins
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-nosifer text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 leading-none tracking-wider">
          <span className="block text-red-600 animate-flicker drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]">THE</span>
          <span className="block text-red-500 mt-2 sm:mt-3 animate-flicker" style={{ animationDelay: '0.5s' }}>UPSIDE DOWN</span>
          <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 font-eater tracking-widest">DINER</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Step through the portal and discover flavors from another dimension. 
          Where the familiar becomes strange, and the strange becomes irresistible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-2">
          <a
            href="#menu"
            className="w-full sm:w-auto group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 uppercase tracking-wider text-base sm:text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              Enter the Menu
            </span>
          </a>
          <a
            href="#reserve"
            className="w-full sm:w-auto group px-8 sm:px-10 py-4 sm:py-5 border-2 border-red-600/50 text-red-500 hover:bg-red-600/10 font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-base sm:text-lg backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              Book Your Table
            </span>
          </a>
        </div>

        {/* Info Pills */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm px-2">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900/50 rounded-full backdrop-blur-sm border border-gray-800 w-full sm:w-auto justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400">Open 24/7</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900/50 rounded-full backdrop-blur-sm border border-gray-800 w-full sm:w-auto justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-gray-400">Now Serving Dimensions</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900/50 rounded-full backdrop-blur-sm border border-gray-800 w-full sm:w-auto justify-center">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-gray-400">Since 1983</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-red-500 transition-all duration-300 animate-bounce"
        aria-label="Scroll to menu"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
