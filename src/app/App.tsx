import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Districts } from './components/Districts';
import { Bureau } from './components/Bureau';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] relative overflow-hidden">
      {/* Ethereal background with Filipino-inspired patterns */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8A2BE2]/5 rounded-full blur-[150px]"></div>

        {/* Subtle solihiya-inspired pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, #FFD700 48%, #FFD700 52%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, #FFD700 48%, #FFD700 52%, transparent 52%)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Districts />
        <Bureau />
        <Footer />
      </div>
    </div>
  );
}
