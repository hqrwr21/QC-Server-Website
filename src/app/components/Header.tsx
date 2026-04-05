import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0b]/80 border-b border-[#8A2BE2]/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
          <img 
            src="src/assets/qc-logo.png" 
            alt="The Queer Commonwealth Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
          />

          <span 
            className="font-['Montserrat'] tracking-wider text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
            style={{ fontWeight: 700, fontSize: '1.2rem' }}
          >
            THE QUEER COMMONWEALTH
          </span>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-['Montserrat'] tracking-wider text-[#FFD700]/80 hover:text-[#FFD700] transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
              style={{fontWeight: 500}}
            >
              ABOUT THE NATION
            </button>
            <button
              onClick={() => scrollToSection('districts')}
              className="font-['Montserrat'] tracking-wider text-[#FFD700]/80 hover:text-[#FFD700] transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
              style={{fontWeight: 500}}
            >
              THE COMMONWEALTH
            </button>
            <button
              onClick={() => scrollToSection('bureau')}
              className="font-['Montserrat'] tracking-wider text-[#FFD700]/80 hover:text-[#FFD700] transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
              style={{fontWeight: 500}}
            >
              REPORT AN INCIDENT
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className="font-['Montserrat'] tracking-wider px-6 py-2 border-2 border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700]/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]"
              style={{fontWeight: 600}}
            >
              JOIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FFD700]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#8A2BE2]/20 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-['Montserrat'] tracking-wider text-[#FFD700]/80 hover:text-[#FFD700] transition-colors duration-300"
              style={{fontWeight: 500}}
            >
              ABOUT THE NATION
            </button>
            <button
              onClick={() => scrollToSection('districts')}
              className="block w-full text-left font-['Montserrat'] tracking-wider text-[#FFD700]/80 hover:text-[#FFD700] transition-colors duration-300"
              style={{fontWeight: 500}}
            >
              THE DISTRICTS
            </button>
            <button
              onClick={() => scrollToSection('bureau')}
              className="block w-full text-left font-['Montserrat'] tracking-wider text-[#FFD700]/80 hover:text-[#FFD700] transition-colors duration-300"
              style={{fontWeight: 500}}
            >
              REPORT AN INCIDENT
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className="block w-full text-left font-['Montserrat'] tracking-wider text-[#FFD700] border-t border-[#8A2BE2]/20 pt-3"
              style={{fontWeight: 600}}
            >
              JOIN
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
