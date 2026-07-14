import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clinicLogo from "@/assets/logo.jpg";

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
    { label: "Diseases", href: "#diseases" },
    { label: "Guidelines", href: "#guidelines" },
    { label: "Reviews", href: "#reviews" },
    { label: "Updates", href: "#updates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-primary/10 animate-fade-in"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src={clinicLogo}
            alt="Aadhya Homoeo Clinic Logo"
            className="w-10 h-10 rounded-full object-cover shadow"
          />
          <div>
            <div
              className="text-primary leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600 }}
            >
              Aadhya Homoeo Clinic
            </div>
            <div
              className="text-muted-foreground leading-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
            >
              Dr. Mayur Narendra Mishra
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-foreground hover:text-accent transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenConsultation}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            Book Appointment
          </button>
        </div>

        <button
          className="md:hidden text-primary p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-primary/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-accent transition-colors py-1"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onOpenConsultation(); }}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center hover:bg-primary/90 transition-colors cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
