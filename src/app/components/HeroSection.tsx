import { ChevronDown, Sparkles, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16"
      style={{
        background: "linear-gradient(160deg, #ffffff 0%, #f8f9fa 40%, #f0f0f2 100%)",
      }}
    >
      {/* Subtle decorative elements */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl animate-pulse-slow hidden sm:block"
        style={{ background: "radial-gradient(circle, #1a3c34, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-[0.05] blur-3xl animate-pulse-slow delay-500 hidden sm:block"
        style={{ background: "radial-gradient(circle, #c0392b, transparent 70%)" }}
      />

      {/* Minimal decorative circles */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden hidden md:block">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-40 h-40 rounded-full border border-primary/30 animate-float"
            style={{
              top: `${15 + i * 20}%`,
              left: `${i % 2 === 0 ? 5 : 85}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-6 flex flex-col items-center text-center w-full relative z-10">
        <div
          className="inline-flex items-center gap-2 bg-primary/8 text-primary px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4 w-fit border border-primary/12 hover:bg-primary/12 transition-all duration-300 mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent animate-pulse" />
          <span>Natural Healing · Homoeopathic Care</span>
        </div>

        <h1
          className="text-foreground leading-[1.15] mb-4 sm:mb-5 animate-fade-in delay-100 max-w-3xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
            fontWeight: 700,
          }}
        >
          Healing with Harmony<br />
          <span className="text-primary italic font-normal">Gentle, Effective & Natural</span>
        </h1>

        <p
          className="text-muted-foreground mb-4 sm:mb-5 max-w-2xl animate-fade-in delay-200"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.8 }}
        >
          Welcome to Aadhya Homoeo Clinic, where{" "}
          <strong className="text-foreground font-semibold">
            Dr. Mayur N. Mishra (B.H.M.S.)
          </strong>{" "}
          brings the gentle power of homoeopathy to address your health concerns at the root.
        </p>

        <p
          className="text-muted-foreground mb-8 sm:mb-10 max-w-lg flex items-center justify-center gap-2 animate-fade-in delay-300"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 500 }}
        >
          <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
          <span className="underline decoration-primary/30 decoration-2 underline-offset-4">
            Registered Practitioner · Reg. No.: G-32424
          </span>
        </p>

        <div className="flex justify-center mb-10 sm:mb-14 animate-fade-in delay-300 w-full sm:w-auto">
          <button
            onClick={onOpenConsultation}
            className="bg-primary text-primary-foreground px-8 sm:px-10 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/15 duration-300 text-center font-medium cursor-pointer w-full sm:w-auto shadow-md"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          >
            Book Free Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 pt-8 sm:pt-10 border-t border-foreground/10 animate-fade-in delay-500 w-full max-w-2xl">
          {[
            { num: "5+", label: "Years Experience" },
            { num: "500+", label: "Patients Treated" },
            { num: "98%", label: "Recovery Rate" },
          ].map((s) => (
            <div key={s.label} className="group cursor-pointer text-center">
              <div
                className="text-primary group-hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 700 }}
              >
                {s.num}
              </div>
              <div
                className="text-muted-foreground mt-1"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1.8vw, 14px)", fontWeight: 500 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
