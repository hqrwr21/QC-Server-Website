import { useState } from 'react';
import { Shield, AlertCircle, FileText, MapPin } from 'lucide-react';

export function Bureau() {
  const [formData, setFormData] = useState({
    discordTag: '',
    district: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    // Reset form
    setFormData({ discordTag: '', district: '', description: '' });
    alert('Report submitted successfully. Our team will investigate promptly.');
  };

  return (
    <section id="bureau" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Montserrat'] tracking-wider mb-4 text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]" style={{fontSize: '2.5rem', fontWeight: 700}}>
            THE BUREAU
          </h2>
          <p className="font-['Montserrat'] tracking-wider text-[#8A2BE2] flex items-center justify-center gap-2 flex-wrap" style={{fontSize: '1rem', fontWeight: 500}}>
            <Shield className="w-5 h-5" />
            OUR BORDERS STAY SAFE THROUGH THE PARTICIPATION OF EVERY CITIZEN
          </p>
        </div>

        {/* Glassmorphic Form */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#9B30FF]/20 rounded-2xl blur-2xl"></div>
          <div className="relative backdrop-blur-md bg-[#0f0f1a]/50 border border-[#8A2BE2]/40 rounded-2xl p-10 shadow-[0_0_40px_rgba(138,43,226,0.3)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Discord Tag Field */}
              <div>
                <label htmlFor="discordTag" className="flex items-center gap-2 mb-2 font-['Montserrat'] tracking-wide text-[#FFD700]" style={{fontWeight: 600}}>
                  <FileText className="w-4 h-4" />
                  DISCORD TAG
                </label>
                <input
                  id="discordTag"
                  type="text"
                  value={formData.discordTag}
                  onChange={(e) => setFormData({ ...formData, discordTag: e.target.value })}
                  placeholder="username#0000"
                  className="w-full px-4 py-3 bg-[#0a0a0b]/60 border border-[#8A2BE2]/40 rounded-lg text-[#c4b5fd] placeholder:text-[#8A2BE2]/50 focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/30 transition-all duration-300"
                  required
                />
              </div>

              {/* District/Region Field */}
              <div>
                <label htmlFor="district" className="flex items-center gap-2 mb-2 font-['Montserrat'] tracking-wide text-[#FFD700]" style={{fontWeight: 600}}>
                  <MapPin className="w-4 h-4" />
                  DISTRICT / REGION OF INCIDENT
                </label>
                <select
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0b]/60 border border-[#8A2BE2]/40 rounded-lg text-[#c4b5fd] focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/30 transition-all duration-300"
                  required
                >
                  <option value="">Select a district</option>
                  <option value="general">General Chat</option>
                  <option value="sovereignty">The Sovereignty</option>
                  <option value="administration">The Administration</option>
                  <option value="judiciary">The Judiciary</option>
                  <option value="vanguard">The Vanguard</option>
                  <option value="citizens">The Citizens</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="flex items-center gap-2 mb-2 font-['Montserrat'] tracking-wide text-[#FFD700]" style={{fontWeight: 600}}>
                  <AlertCircle className="w-4 h-4" />
                  DETAILED DESCRIPTION
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please provide a detailed description of the incident, including when it occurred, who was involved, and any relevant context..."
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0b]/60 border border-[#8A2BE2]/40 rounded-lg text-[#c4b5fd] placeholder:text-[#8A2BE2]/50 focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/30 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-3 p-4 bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 rounded-lg">
                <Shield className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <p className="text-[#c4b5fd]/80" style={{fontSize: '0.9rem'}}>
                  Your report is confidential and will be reviewed by our moderation team. We take all reports seriously and will investigate thoroughly.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-['Montserrat'] tracking-wider py-4 bg-gradient-to-r from-[#8A2BE2] to-[#9B30FF] border-2 border-[#FFD700] rounded-lg text-[#FFD700] hover:border-[#FFC700] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all duration-300 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
                style={{fontWeight: 700}}
              >
                SUBMIT REPORT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
