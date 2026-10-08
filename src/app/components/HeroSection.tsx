import { ChevronDown, Sparkles, ShieldCheck } from "lucide-react";
import heroVideo from "@/assets/HEROSECTION.mp4";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24 pb-10 sm:pb-16"
    >
      {/* Background Video (Muted & Loop) */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Deep Botanical Glassmorphic Gradient Overlay for Crystal Clear Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 20, 16, 0.82) 0%, rgba(10, 24, 20, 0.68) 45%, rgba(6, 16, 13, 0.9) 100%)",
        }}
      />

      {/* Subtle Ambient Radial Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Over Video */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Top Tag Pill */}
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-emerald-300 px-3.5 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-5 border border-white/15 shadow-md animate-fade-in"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-pulse" />
          <span>Best Homeopathy Clinic in Ahmedabad · Classical Homoeopathy</span>
        </div>

        {/* Headline */}
        <h1
          className="text-white leading-[1.14] mb-3 sm:mb-4 max-w-3xl drop-shadow-sm animate-fade-in delay-100"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.9rem, 5.2vw, 4rem)",
            fontWeight: 700,
          }}
        >
          Healing with Harmony<br />
          <span className="text-emerald-300 italic font-normal">Gentle, Effective & Classical Homeopathy</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/85 mb-3 sm:mb-4 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed animate-fade-in delay-200 drop-shadow-xs px-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Welcome to <strong className="text-white font-semibold">Aadhya Homoeo Clinic</strong> — premier destination for the{" "}
          <strong className="text-white font-semibold">best homeopathy treatment in Ahmedabad</strong>, where{" "}
          <strong className="text-white font-semibold">
            Dr. Mayur N. Mishra (B.H.M.S., CCRH Awardee)
          </strong>{" "}
          applies classical homoeopathy to cure chronic diseases, skin disorders, hair fall, allergies, PCOD, and pediatric ailments at their root.
        </p>

        {/* Doctor Registration */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white/75 mb-4 sm:mb-6 animate-fade-in delay-200">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Certified Homeopathic Physician · Reg. No.: <strong className="text-white font-semibold">G-32424</strong></span>
        </div>

        {/* Action Button */}
        <div className="flex justify-center w-full sm:w-auto mb-6 sm:mb-10 animate-fade-in delay-300 px-4">
          <button
            onClick={onOpenConsultation}
            className="bg-white hover:bg-white/90 text-[#071712] font-bold px-7 sm:px-9 py-3 sm:py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/20 duration-300 cursor-pointer text-xs sm:text-base shadow-lg w-full sm:w-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book Free Consultation
          </button>
        </div>

        {/* Glassmorphic Credential Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-3xl pt-4 sm:pt-6 border-t border-white/15 animate-fade-in delay-400">
          {[
            { title: "B.H.M.S.", subtitle: "Ahmedabad Homoeo College" },
            { title: "Reg. G-32424", subtitle: "Registered Physician" },
            { title: "CCRH Awardee", subtitle: "Govt. of India Research" },
            { title: "Family Counsellor", subtitle: "Aadarsh Ahmedabad" },
          ].map((s) => (
            <div
              key={s.title}
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-sm hover:bg-white/15 transition-colors"
            >
              <div
                className="text-white font-bold text-xs sm:text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.title}
              </div>
              <div className="text-white/70 text-[9px] sm:text-[11px] mt-0.5 leading-tight">
                {s.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#about"
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-5 h-5 text-emerald-400" />
      </a>
    </section>
  );
}


