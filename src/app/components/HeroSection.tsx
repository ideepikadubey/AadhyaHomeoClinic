import { ChevronDown, Star, Sparkles, ShieldCheck } from "lucide-react";
import drMishra from "@/assets/dr_mishra.jpg";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0"
      style={{
        background: "linear-gradient(160deg, #ffffff 0%, #f8f9fa 40%, #f0f0f2 100%)",
      }}
    >
      {/* Subtle decorative elements — hidden on small screens for performance */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl animate-pulse-slow hidden sm:block"
        style={{ background: "radial-gradient(circle, #1a3c34, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-[0.05] blur-3xl animate-pulse-slow delay-500 hidden sm:block"
        style={{ background: "radial-gradient(circle, #c0392b, transparent 70%)" }}
      />

      {/* Minimal decorative circles — hidden on mobile */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden hidden md:block">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-40 h-40 rounded-full border border-primary/30 animate-float"
            style={{
              top: `${15 + i * 20}%`,
              left: `${i % 2 === 0 ? 3 : 88}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center animate-slide-up text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 bg-primary/8 text-primary px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6 w-fit border border-primary/12 hover:bg-primary/12 transition-all duration-300 mx-auto lg:mx-0"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent animate-pulse" />
            <span>Natural Healing · Homoeopathic Care</span>
          </div>

          <h1
            className="text-foreground leading-[1.15] mb-4 sm:mb-6 animate-fade-in delay-100"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 5vw, 3.8rem)",
              fontWeight: 700,
            }}
          >
            Healing with Harmony<br />
            <span className="text-primary italic font-normal">Gentle, Effective & Natural</span>
          </h1>

          <p
            className="text-muted-foreground mb-3 sm:mb-4 max-w-xl animate-fade-in delay-200 mx-auto lg:mx-0"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 2.5vw, 17px)", lineHeight: 1.75 }}
          >
            Welcome to Aadhya Homoeo Clinic, where{" "}
            <strong className="text-foreground font-semibold">
              Dr. Mayur N. Mishra (B.H.M.S.)
            </strong>{" "}
            brings the gentle power of homoeopathy to address your health concerns at the root.
          </p>

          <p
            className="text-muted-foreground mb-6 sm:mb-8 max-w-lg flex items-center gap-2 animate-fade-in delay-300 justify-center lg:justify-start"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 500 }}
          >
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span className="underline decoration-primary/30 decoration-2 underline-offset-4">
              Registered Practitioner · Reg. No.: G-32424
            </span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in delay-300 items-center lg:items-start">
            <button
              onClick={onOpenConsultation}
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/15 duration-300 text-center font-medium cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
            >
              Book Free Consultation
            </button>
            <button
              onClick={onOpenConsultation}
              className="border-2 border-foreground/15 text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-foreground/5 hover:border-foreground/30 transition-all hover:scale-105 duration-300 text-center font-medium cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
            >
              Meet Dr. Mishra
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-foreground/8 animate-fade-in delay-500">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "5000+", label: "Patients Treated" },
              { num: "95%", label: "Recovery Rate" },
            ].map((s) => (
              <div key={s.label} className="group cursor-pointer text-center lg:text-left">
                <div
                  className="text-primary group-hover:scale-110 transition-transform duration-300 origin-center lg:origin-left"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 700 }}
                >
                  {s.num}
                </div>
                <div
                  className="text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(11px, 1.8vw, 13px)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Image Area — hidden on very small screens, shown from md up */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in delay-200 hidden md:flex">
          <div className="relative group">
            {/* Image with faded/blended edges */}
            <div
              className="relative w-full max-w-[320px] lg:max-w-[440px]"
              style={{ height: "clamp(380px, 50vw, 520px)" }}
            >
              <img
                src={drMishra}
                alt="Dr. Mayur N. Mishra – Homoeopath"
                className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
                style={{
                  maskImage: "radial-gradient(ellipse 85% 80% at 50% 40%, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 40%, black 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating credential badge */}
            <div
              className="absolute bottom-12 lg:bottom-16 left-0 bg-white/90 backdrop-blur-md text-foreground px-4 lg:px-5 py-2.5 lg:py-3 rounded-2xl shadow-xl border border-foreground/8 hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-logo-gold text-logo-gold" />
                ))}
                <span
                  className="text-muted-foreground ml-1"
                  style={{ fontSize: "11px", fontWeight: 500 }}
                >
                  4.9 / 5
                </span>
              </div>
              <div className="font-semibold text-foreground" style={{ fontSize: "12px" }}>
                Dr. Mayur N. Mishra
              </div>
              <div className="text-muted-foreground" style={{ fontSize: "10px" }}>
                B.H.M.S. · 200+ Google Reviews
              </div>
            </div>

            {/* Floating schedule badge */}
            <div
              className="absolute top-8 lg:top-12 right-0 bg-primary text-primary-foreground px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
            >
              <div className="font-semibold">Consultations Available</div>
              <div className="text-primary-foreground/80 text-[10px] lg:text-[11px] mt-0.5">Mon – Sat · 10am – 7pm</div>
            </div>
          </div>
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
