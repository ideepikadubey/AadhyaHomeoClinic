import { useState, useEffect } from "react";
import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { HospitalAffiliationsSection } from "./components/HospitalAffiliationsSection";
import { DiseasesSection } from "./components/DiseasesSection";
import { MedicineRulesSection } from "./components/MedicineRulesSection";
import { GoogleReviewsSection } from "./components/GoogleReviewsSection";
import { InstagramSection } from "./components/InstagramSection";
import { FaqSection } from "./components/FaqSection";
import { QueryForm } from "./components/QueryForm";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import whatsappIcon from "@/assets/whatsapp.png";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar onOpenConsultation={openModal} />
      <HeroSection onOpenConsultation={openModal} />
      <AboutSection />
      <HospitalAffiliationsSection />
      <DiseasesSection />
      <MedicineRulesSection />
      <GoogleReviewsSection />
      <InstagramSection />
      <FaqSection />
      <QueryForm />
      <Footer onOpenConsultation={openModal} />
      <ConsultationModal isOpen={modalOpen} onClose={closeModal} />

      {/* Floating WhatsApp Action Button with Hover Label */}
      <a
        href="https://wa.me/917572946732?text=Hello%20Dr.%20Mishra,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer"
        aria-label="Inquire on WhatsApp"
      >
        {/* Floating Hover Badge */}
        <span
          className="mr-3 px-4 py-2 rounded-full bg-[#0a1714]/95 backdrop-blur-md text-white text-xs font-semibold shadow-2xl border border-emerald-500/30 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden sm:inline-block"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Inquire on WhatsApp
        </span>

        {/* WhatsApp Icon */}
        <div className="w-14 h-14 rounded-full shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
          <img
            src={whatsappIcon}
            alt="Inquire on WhatsApp"
            className="w-full h-full object-contain drop-shadow-xl rounded-full"
          />
        </div>
      </a>
    </div>
  );
}
