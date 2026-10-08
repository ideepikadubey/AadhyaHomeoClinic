import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clinicLogo from "@/assets/HomeoLogoCropped.png";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Affiliations", href: "#affiliations" },
    { label: "Products", href: "#products" },
    { label: "Treatments", href: "#diseases" },
    { label: "Guidelines", href: "#guidelines" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-primary/10 py-2.5 sm:py-3"
          : "bg-black/15 backdrop-blur-sm border-b border-white/10 py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 shadow-sm border border-black/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src={clinicLogo}
              alt="Aadhya Homoeo Clinic"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div
              className="leading-tight transition-colors text-sm sm:text-base xl:text-lg font-bold whitespace-nowrap"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className={scrolled ? "text-primary" : "text-white"}>
                Aadhya Homoeo Clinic
              </span>
            </div>
            <div
              className={`leading-tight transition-colors text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                scrolled ? "text-muted-foreground" : "text-emerald-300/90"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Dr. Mayur Narendra Mishra
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-emerald-300"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenConsultation}
            className={`px-4 xl:px-5 py-2 rounded-full font-semibold transition-all hover:scale-105 duration-200 cursor-pointer text-xs xl:text-sm shadow-sm whitespace-nowrap ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book Appointment
          </button>
        </div>

        {/* Medium / Small Screen CTA & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden flex-shrink-0">
          <button
            onClick={onOpenConsultation}
            className={`hidden sm:inline-flex px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer text-xs ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-emerald-600 text-white shadow-sm"
            }`}
          >
            Book Appointment
          </button>

          <button
            className={`p-2 rounded-lg transition-colors focus:outline-none ${
              scrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          className={`lg:hidden border-t px-5 sm:px-6 py-4 sm:py-5 flex flex-col gap-3 shadow-2xl transition-all max-h-[80vh] overflow-y-auto ${
            scrolled
              ? "bg-background/98 backdrop-blur-md border-primary/10"
              : "bg-[#0a1714]/98 backdrop-blur-lg border-white/10"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-1.5 text-sm font-medium transition-colors border-b border-white/5 last:border-none ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-emerald-300"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onOpenConsultation();
            }}
            className={`w-full py-3 rounded-full text-center font-semibold transition-all cursor-pointer text-sm mt-2 shadow-md ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-emerald-600 hover:bg-emerald-500 text-white"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

