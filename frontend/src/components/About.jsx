import { Clock, Users, Skull } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, value: '1983', label: 'Established' },
    { icon: Users, value: '10K+', label: 'Travelers' },
    { icon: Skull, value: '12', label: 'Secret Items' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 fog-overlay opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-red-500 text-xs sm:text-sm uppercase tracking-widest font-medium">Our Story</span>
            <h2 className="font-horror text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 mt-3 sm:mt-4 mb-6 sm:mb-8">
              A PORTAL TO FLAVOR
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              <p>
                In the autumn of 1983, deep in the woods near Hawkins, Indiana, 
                a peculiar diner appeared overnight. No one knows where it came from, 
                but they say those who enter emerge... changed.
              </p>
              <p>
                The Upside Down Diner exists between dimensions, serving cuisine 
                that transcends the ordinary. Our chef, who refuses to give her name, 
                claims to have traveled through the portal many times.
              </p>
              <p>
                "The food here isn't just food," she once said, stirring a pot of 
                something that glowed faintly red. "It's an experience. A journey. 
                A warning. Mostly a warning."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 sm:p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-red-900/30 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto mb-2" />
                  <div className="font-horror text-xl sm:text-2xl text-red-500">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square bg-gradient-to-br from-red-900/20 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="font-horror text-6xl sm:text-7xl md:text-8xl text-red-600 animate-pulse">?</div>
                  <p className="text-gray-500 mt-3 sm:mt-4 font-horror text-xs sm:text-sm">Nobody Brings Up<br/>What Happened Here</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent" />
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-red-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-red-800/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-gray-900/50 rounded-lg sm:rounded-xl border border-gray-800 hover:border-red-900/30 transition-all duration-300 hover:bg-gray-900/70">
            <h3 className="font-horror text-lg sm:text-xl text-red-500 mb-2 sm:mb-3">THE REALM</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Our dining room exists in constant twilight. Some say the lights 
              flicker when the portal is active. We prefer to call it "ambiance."
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-gray-900/50 rounded-lg sm:rounded-xl border border-gray-800 hover:border-red-900/30 transition-all duration-300 hover:bg-gray-900/70">
            <h3 className="font-horror text-lg sm:text-xl text-red-400 mb-2 sm:mb-3">THE FOOD</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Dishes from both sides of reality. Our signature Demogorgon Burger 
              has been rated "life-changing" by survivors. We don't ask questions.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-gray-900/50 rounded-lg sm:rounded-xl border border-gray-800 hover:border-red-900/30 transition-all duration-300 hover:bg-gray-900/70">
            <h3 className="font-horror text-lg sm:text-xl text-red-600 mb-2 sm:mb-3">THE RULES</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Don't go into the kitchen. Don't accept food from strangers. 
              And if someone offers you Eggo waffles... just say yes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
