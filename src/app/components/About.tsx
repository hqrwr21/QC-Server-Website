import { Heart, Users, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-['Montserrat'] tracking-wider text-center mb-16 text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]" style={{fontSize: '2.5rem', fontWeight: 700}}>
          ABOUT THE NATION
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/30 rounded-xl p-8 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#8A2BE2]/30 rounded-lg border border-[#8A2BE2]/50 shadow-[0_0_15px_rgba(138,43,226,0.4)]">
                <Heart className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="font-['Montserrat'] tracking-wide mb-3 text-[#FFD700]" style={{fontSize: '1.3rem', fontWeight: 600}}>
                A Safe Haven
              </h3>
              <p className="text-[#c4b5fd]/80 leading-relaxed">
                The Queer Commonwealth is a sanctuary for Filipino LGBTQIA+ individuals—a place where you can express your authentic self without fear or judgment.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/30 rounded-xl p-8 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#8A2BE2]/30 rounded-lg border border-[#8A2BE2]/50 shadow-[0_0_15px_rgba(138,43,226,0.4)]">
                <Users className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="font-['Montserrat'] tracking-wide mb-3 text-[#FFD700]" style={{fontSize: '1.3rem', fontWeight: 600}}>
                Meaningful Belonging
              </h3>
              <p className="text-[#c4b5fd]/80 leading-relaxed">
                More than just a server, we are a structured society with districts, governance, and roles that give every member purpose and recognition.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/30 rounded-xl p-8 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#8A2BE2]/30 rounded-lg border border-[#8A2BE2]/50 shadow-[0_0_15px_rgba(138,43,226,0.4)]">
                <Sparkles className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="font-['Montserrat'] tracking-wide mb-3 text-[#FFD700]" style={{fontSize: '1.3rem', fontWeight: 600}}>
                Filipino Heritage
              </h3>
              <p className="text-[#c4b5fd]/80 leading-relaxed">
                Rooted in Pinoy culture and values, we celebrate our shared heritage while building a progressive digital future together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
