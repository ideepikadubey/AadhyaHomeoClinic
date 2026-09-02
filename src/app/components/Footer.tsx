import { Instagram, Mail, Phone, MapPin, ExternalLink, MessageCircle, Clock } from "lucide-react";
import clinicLogo from "@/assets/HomeoLogoCropped.png";

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Dr. Mishra", href: "#about" },
    { label: "Hospital Affiliations", href: "#affiliations" },
    { label: "Diseases Treated", href: "#diseases" },
    { label: "Patient Guidelines", href: "#guidelines" },
    { label: "FAQs", href: "#faqs" },
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
    <footer
      style={{
        background: "linear-gradient(180deg, #0f241e 0%, #0a1714 100%)",
      }}
      className="text-white relative overflow-hidden"
    >
      {/* Top CTA band */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <h3
              className="text-white text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Begin Your Healing Journey?
            </h3>
            <p
              className="text-white/75 mt-1 text-xs sm:text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a consultation today — natural health is just a step away.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-white text-[#0a1714] font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-emerald-50 hover:shadow-lg transition-all flex-shrink-0 cursor-pointer text-xs sm:text-sm w-full sm:w-auto shadow-md"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-sm border border-white/20 flex items-center justify-center flex-shrink-0">
              <img
                src={clinicLogo}
                alt="Aadhya Homoeo Clinic Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div
                className="text-white truncate text-sm sm:text-base font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Aadhya Homoeo Clinic
              </div>
              <div
                className="text-emerald-300/80 truncate text-[10px] sm:text-[11px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Dr. Mayur N. Mishra
              </div>
            </div>
          </div>
          <p
            className="text-white/65 mb-5 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Providing compassionate, evidence-based homoeopathic care. Your journey to natural
            health starts here.
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/917572946732"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
            </a>
            <a
              href="mailto:aadhyahomoeoclinic11@gmail.com"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-amber-300" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div
            className="text-white mb-4 text-sm sm:text-base font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Quick Links
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-white/65 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical domains */}
        <div>
          <div
            className="text-white mb-4 text-sm sm:text-base font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Specializations
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
            {diseases.map((d) => (
              <li key={d}>
                <a
                  href="#diseases"
                  className="text-white/65 hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <div
            className="text-white mb-4 text-sm sm:text-base font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact & Visit
          </div>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
              <span
                className="text-white/65 leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Ojas Hospital, opp. dinosaur circle, Rakhiyal, Ahmedabad, Gujarat 380021
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <a
                href="tel:+917572946732"
                className="text-white/65 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                +91 75729 46732 (Call)
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <a
                href="https://wa.me/917572946732"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                +91 75729 46732 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <a
                href="mailto:aadhyahomoeoclinic11@gmail.com"
                className="text-white/65 hover:text-white transition-colors truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                aadhyahomoeoclinic11@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
              <span
                className="text-white/65"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Mon – Sat: 10:00 AM – 7:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p
            className="text-white/45 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Aadhya Homoeo Clinic · Dr. Mayur N. Mishra (Reg. No.: G-32424). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/45">
            <a href="#about" className="hover:text-white/70 transition-colors">
              About Doctor
            </a>
            <span>·</span>
            <a href="#affiliations" className="hover:text-white/70 transition-colors">
              Affiliations
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-white/70 transition-colors">
              Clinic Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
