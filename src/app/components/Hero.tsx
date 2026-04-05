export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="join" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Abstract constellation/map background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            {/* Constellation lines */}
            <line x1="100" y1="150" x2="200" y2="100" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
            <line x1="200" y1="100" x2="350" y2="180" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
            <line x1="350" y1="180" x2="500" y2="120" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
            <line x1="500" y1="120" x2="650" y2="200" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
            <line x1="150" y1="400" x2="300" y2="450" stroke="#8A2BE2" strokeWidth="1" opacity="0.4" />
            <line x1="300" y1="450" x2="450" y2="380" stroke="#8A2BE2" strokeWidth="1" opacity="0.4" />
            <line x1="450" y1="380" x2="600" y2="420" stroke="#8A2BE2" strokeWidth="1" opacity="0.4" />

            {/* Nodes */}
            <circle cx="100" cy="150" r="3" fill="#FFD700" className="animate-pulse" />
            <circle cx="200" cy="100" r="4" fill="#FFD700" />
            <circle cx="350" cy="180" r="3" fill="#FFD700" className="animate-pulse" />
            <circle cx="500" cy="120" r="4" fill="#FFD700" />
            <circle cx="650" cy="200" r="3" fill="#FFD700" className="animate-pulse" />
            <circle cx="150" cy="400" r="3" fill="#8A2BE2" />
            <circle cx="300" cy="450" r="4" fill="#8A2BE2" className="animate-pulse" />
            <circle cx="450" cy="380" r="3" fill="#8A2BE2" />
            <circle cx="600" cy="420" r="4" fill="#8A2BE2" className="animate-pulse" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Main Headline */}
          <h1 className="font-['Montserrat'] tracking-wider mb-6 bg-gradient-to-b from-[#FFD700] via-[#FFC700] to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]" style={{fontSize: '4rem', fontWeight: 800, lineHeight: 1.1}}>
            THE QUEER COMMONWEALTH:<br />
          </h1>

          {/* Subtext */}
          <p className="font-['Montserrat'] tracking-[0.2em] text-[#8A2BE2] mb-8 drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]" style={{fontSize: '1.1rem', fontWeight: 500}}>
            The Queer Commonwealth stands as a digital nation for queer individuals, organized not by exclusion, but by declaration. Citizens are assigned to regions and united through shared interests. Every role is a marker. Every category, a district. Every member, a participant in the making of this space.
          </p>
          {/* CTA Button */}
          <a 
            href="https://discord.gg/thequeercommonwealth" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button
              className="group relative font-['Montserrat'] tracking-wider px-12 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#9B30FF] border-2 border-[#FFD700] rounded-lg text-[#FFD700] transition-all duration-500 shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:shadow-[0_0_60px_rgba(255,215,0,0.7)] hover:border-[#FFC700] hover:scale-105"
              style={{ fontSize: '1.2rem', fontWeight: 700 }}
            >
              <span className="relative z-10">JOIN NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9B30FF] to-[#8A2BE2] rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </button>
          </a>

          {/* Abstract decorative elements */}
          <div className="mt-20 relative h-40">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#8A2BE2]/50 to-transparent"></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 border border-[#FFD700] rounded-full bg-[#8A2BE2]/30 shadow-[0_0_15px_rgba(255,215,0,0.6)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
