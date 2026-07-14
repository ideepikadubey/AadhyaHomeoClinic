import { Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import clinicLogo from "@/assets/logo.jpg";

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Dr. Mishra", href: "#about" },
    { label: "Diseases Treated", href: "#diseases" },
    { label: "Patient Guidelines", href: "#guidelines" },
    { label: "Instagram Updates", href: "#updates" },
    { label: "Book Appointment", href: "#contact" },
  ];

  const diseases = [
    "Hair & Skin Issues",
    "Respiratory Illnesses",
    "Gastroenterology",
    "Psychiatry & Moods",
    "Orthopedic & Joints",
    "Gynaec & Paediatric",
  ];

  return (
    <footer style={{ background: "var(--foreground)" }}>
      {/* Top CTA band */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--primary)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-primary-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600 }}
            >
              Ready to Begin Your Healing Journey?
            </h3>
            <p
              className="text-primary-foreground/75 mt-1"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
            >
              Book a consultation today — natural health is just a step away.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full hover:opacity-95 hover:shadow-lg transition-all flex-shrink-0 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500 }}
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <img
              src={clinicLogo}
              alt="Aadhya Homoeo Clinic Logo"
              className="w-10 h-10 rounded-full object-cover shadow"
            />
            <div>
              <div
                className="text-primary-foreground"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600 }}
              >
                Aadhya Homoeo Clinic
              </div>
              <div
                className="text-primary-foreground/60"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
              >
                Dr. Mayur N. Mishra
              </div>
            </div>
          </div>
          <p
            className="text-primary-foreground/60 mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: 1.75 }}
          >
            Providing compassionate, evidence-based homoeopathic care. Your journey to natural
            health starts here.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-white/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:aadhyahomoeoclinic11@gmail.com"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-white/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+917572946732"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-white/30 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-primary-foreground mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors flex items-center gap-1.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditions */}
        <div>
          <h4
            className="text-primary-foreground mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            Conditions Treated
          </h4>
          <ul className="space-y-3">
            {diseases.map((d) => (
              <li key={d}>
                <a
                  href="#diseases"
                  className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                >
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-primary-foreground mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            Contact Us
          </h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span
                className="text-primary-foreground/60"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: 1.6 }}
              >
                Ojas Hospital, opp dinosaur circle,<br />near Rakhiyal char rasta, Rakhiyal,<br />Ahmedabad, Gujarat 380021
              </span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="tel:+917572946732"
                className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
              >
                +91 75729 46732
              </a>
            </div>
            <div className="flex gap-3">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="mailto:aadhyahomoeoclinic11@gmail.com"
                className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
              >
                aadhyahomoeoclinic11@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <Instagram className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors flex items-center gap-1"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
              >
                @dr_mayurs_aadhya_homeo <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-primary-foreground/40"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
          >
            © 2026 Aadhya Homoeo Clinic · Dr. Mayur N. Mishra. All rights reserved.
          </p>
          <p
            className="text-primary-foreground/40"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
          >
            Homoeopathic treatment results may vary. Consult for personalized advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
