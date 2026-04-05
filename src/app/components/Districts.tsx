import { useState } from 'react';
import { Crown, Shield, Gavel, Eye, Star, Users } from 'lucide-react';

type TabType = 'sovereignty' | 'administration' | 'judiciary' | 'vanguard' | 'citizens';

export function Districts() {
  const [activeTab, setActiveTab] = useState<TabType>('sovereignty');

  return (
    <section id="districts" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Montserrat'] tracking-wider text-center mb-8 text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]" style={{fontSize: '2.5rem', fontWeight: 700}}>
          THE COMMONWEALTH
        </h2>
        <p className="text-center text-[#8A2BE2] mb-12 font-['Montserrat'] tracking-wide" style={{fontSize: '1rem', fontWeight: 500}}>
          A structured hierarchy representing the governance of our digital nation
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 gap-3 flex-wrap">
          <button
            onClick={() => setActiveTab('sovereignty')}
            className={`font-['Montserrat'] tracking-wider px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === 'sovereignty'
                ? 'bg-[#8A2BE2]/40 border-[#FFD700] text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.5)]'
                : 'bg-[#0f0f1a]/40 border-[#8A2BE2]/30 text-[#8A2BE2] hover:border-[#FFD700]/50'
            }`}
            style={{fontWeight: 600}}
          >
            THE SOVEREIGNTY
          </button>
          <button
            onClick={() => setActiveTab('administration')}
            className={`font-['Montserrat'] tracking-wider px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === 'administration'
                ? 'bg-[#8A2BE2]/40 border-[#FFD700] text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.5)]'
                : 'bg-[#0f0f1a]/40 border-[#8A2BE2]/30 text-[#8A2BE2] hover:border-[#FFD700]/50'
            }`}
            style={{fontWeight: 600}}
          >
            THE ADMINISTRATION
          </button>
          <button
            onClick={() => setActiveTab('judiciary')}
            className={`font-['Montserrat'] tracking-wider px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === 'judiciary'
                ? 'bg-[#8A2BE2]/40 border-[#FFD700] text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.5)]'
                : 'bg-[#0f0f1a]/40 border-[#8A2BE2]/30 text-[#8A2BE2] hover:border-[#FFD700]/50'
            }`}
            style={{fontWeight: 600}}
          >
            THE JUDICIARY
          </button>
          <button
            onClick={() => setActiveTab('vanguard')}
            className={`font-['Montserrat'] tracking-wider px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === 'vanguard'
                ? 'bg-[#8A2BE2]/40 border-[#FFD700] text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.5)]'
                : 'bg-[#0f0f1a]/40 border-[#8A2BE2]/30 text-[#8A2BE2] hover:border-[#FFD700]/50'
            }`}
            style={{fontWeight: 600}}
          >
            THE VANGUARD
          </button>
          <button
            onClick={() => setActiveTab('citizens')}
            className={`font-['Montserrat'] tracking-wider px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === 'citizens'
                ? 'bg-[#8A2BE2]/40 border-[#FFD700] text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.5)]'
                : 'bg-[#0f0f1a]/40 border-[#8A2BE2]/30 text-[#8A2BE2] hover:border-[#FFD700]/50'
            }`}
            style={{fontWeight: 600}}
          >
            THE CITIZENS
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'sovereignty' && <SovereigntyTab />}
          {activeTab === 'administration' && <AdministrationTab />}
          {activeTab === 'judiciary' && <JudiciaryTab />}
          {activeTab === 'vanguard' && <VanguardTab />}
          {activeTab === 'citizens' && <CitizensTab />}
        </div>
      </div>
    </section>
  );
}

// Tab 1: The Sovereignty (Chief Architect) - Full-width hero card
function SovereigntyTab() {
  return (
    <div className="flex justify-center">
      <div className="relative group max-w-2xl w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/40 to-[#8A2BE2]/40 rounded-2xl blur-3xl group-hover:blur-[80px] transition-all duration-500"></div>
        <div className="relative backdrop-blur-sm bg-[#0f0f1a]/70 border-2 border-[#FFD700]/60 rounded-2xl p-12 hover:border-[#FFD700] transition-all duration-300 shadow-[0_0_50px_rgba(255,215,0,0.4)]">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[#FFD700]/40 to-[#8A2BE2]/40 rounded-full border-3 border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.6)]">
              <Crown className="w-12 h-12 text-[#FFD700]" />
            </div>
          </div>
          <h3 className="font-['Montserrat'] tracking-wider text-center mb-4 text-[#FFD700]" style={{fontSize: '2rem', fontWeight: 700}}>
            CHIEF ARCHITECT
          </h3>
          <p className="text-center text-[#c4b5fd]/90 leading-relaxed mb-6" style={{fontSize: '1.1rem'}}>
            The visionary founder and sovereign leader of The Queer Commonwealth. The Chief Architect established this digital nation as a declaration of our right to exist, thrive, and govern ourselves with pride and dignity.
          </p>
          <div className="flex justify-center gap-2">
            <div className="px-4 py-1 bg-[#FFD700]/20 border border-[#FFD700]/50 rounded-full">
              <span className="text-[#FFD700] font-['Montserrat'] tracking-wide" style={{fontSize: '0.85rem', fontWeight: 600}}>FOUNDER</span>
            </div>
            <div className="px-4 py-1 bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 rounded-full">
              <span className="text-[#8A2BE2] font-['Montserrat'] tracking-wide" style={{fontSize: '0.85rem', fontWeight: 600}}>SOVEREIGN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab 2: The Administration - Two-column grid
function AdministrationTab() {
  const roles = [
    {
      title: 'STEWARD',
      icon: Shield,
      description: 'Guardians of the Commonwealth who maintain order, enforce community guidelines, and protect the well-being of all citizens.',
    },
    {
      title: 'CUSTODIAN',
      icon: Eye,
      description: 'Keepers of knowledge and culture, moderating discussions and ensuring the digital space reflects our values and heritage.',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {roles.map((role, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/40 rounded-xl p-10 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_25px_rgba(138,43,226,0.25)] hover:shadow-[0_0_35px_rgba(255,215,0,0.4)]">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#8A2BE2]/30 rounded-lg border border-[#8A2BE2]/60 shadow-[0_0_20px_rgba(138,43,226,0.4)]">
              <role.icon className="w-8 h-8 text-[#FFD700]" />
            </div>
            <h3 className="font-['Montserrat'] tracking-wider text-center mb-4 text-[#FFD700]" style={{fontSize: '1.5rem', fontWeight: 600}}>
              {role.title}
            </h3>
            <p className="text-center text-[#c4b5fd]/80 leading-relaxed">
              {role.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Tab 3: The Judiciary - Structured list view
function JudiciaryTab() {
  const roles = [
    {
      title: 'MAGISTRATES',
      icon: Shield,
      description: 'Law enforcers who investigate incidents, mediate conflicts, and uphold the principles of equity and respect.',
    },
    {
      title: 'THE COUNCIL',
      icon: Gavel,
      description: 'The legislative body that shapes policies, resolves disputes, and ensures justice is served fairly within our borders.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {roles.map((role, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/40 rounded-xl p-8 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.25)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#8A2BE2]/30 rounded-lg border border-[#8A2BE2]/60 shadow-[0_0_20px_rgba(138,43,226,0.4)]">
              <role.icon className="w-8 h-8 text-[#FFD700]" />
            </div>
            <div className="flex-1">
              <h3 className="font-['Montserrat'] tracking-wider mb-2 text-[#FFD700]" style={{fontSize: '1.4rem', fontWeight: 600}}>
                {role.title}
              </h3>
              <p className="text-[#c4b5fd]/80 leading-relaxed">
                {role.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Tab 4: The Vanguard - Grid of ambassadors and elite
function VanguardTab() {
  const roles = [
    {
      title: 'ILLUMINATI',
      icon: Eye,
      description: 'Elite members who have demonstrated exceptional contribution, leadership, and commitment to the Commonwealth\'s values.',
    },
    {
      title: 'LUMINARY',
      icon: Star,
      description: 'Ambassadors of light who welcome newcomers, represent the nation, and spread our message of pride and belonging.',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {roles.map((role, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/40 rounded-xl p-10 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_25px_rgba(138,43,226,0.25)] hover:shadow-[0_0_35px_rgba(255,215,0,0.4)]">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#8A2BE2]/30 rounded-lg border border-[#8A2BE2]/60 shadow-[0_0_20px_rgba(138,43,226,0.4)]">
              <role.icon className="w-8 h-8 text-[#FFD700]" />
            </div>
            <h3 className="font-['Montserrat'] tracking-wider text-center mb-4 text-[#FFD700]" style={{fontSize: '1.5rem', fontWeight: 600}}>
              {role.title}
            </h3>
            <p className="text-center text-[#c4b5fd]/80 leading-relaxed">
              {role.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Tab 5: The Citizens - Expansive gallery view
function CitizensTab() {
  return (
    <div className="flex justify-center">
      <div className="relative group max-w-3xl w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
        <div className="relative backdrop-blur-sm bg-[#0f0f1a]/60 border border-[#8A2BE2]/40 rounded-2xl p-12 hover:border-[#FFD700]/60 transition-all duration-300 shadow-[0_0_30px_rgba(138,43,226,0.3)]">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 flex items-center justify-center bg-[#8A2BE2]/30 rounded-full border-2 border-[#8A2BE2]/60 shadow-[0_0_30px_rgba(138,43,226,0.5)]">
              <Users className="w-10 h-10 text-[#FFD700]" />
            </div>
          </div>
          <h3 className="font-['Montserrat'] tracking-wider text-center mb-4 text-[#FFD700]" style={{fontSize: '1.8rem', fontWeight: 700}}>
            CIVILIANS
          </h3>
          <p className="text-center text-[#c4b5fd]/90 leading-relaxed mb-8" style={{fontSize: '1.05rem'}}>
            The heart and soul of The Queer Commonwealth. Every civilian is a valued member of our nation, with equal rights, dignity, and the freedom to express their authentic self. Together, we form a collective that stands strong, proud, and united.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 rounded-lg flex items-center justify-center hover:border-[#FFD700]/60 hover:bg-[#8A2BE2]/30 transition-all duration-300">
                <Users className="w-6 h-6 text-[#FFD700]/60" />
              </div>
            ))}
          </div>
          <p className="text-center text-[#8A2BE2] mt-6 font-['Montserrat'] tracking-wide" style={{fontSize: '0.9rem', fontWeight: 500}}>
            A community of thousands, united by shared values
          </p>
        </div>
      </div>
    </div>
  );
}
