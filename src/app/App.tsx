import { useState } from "react";
import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
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

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar onOpenConsultation={openModal} />
      <HeroSection onOpenConsultation={openModal} />
      <AboutSection />
      <DiseasesSection />
      <MedicineRulesSection />
      <GoogleReviewsSection />
      <InstagramSection />
      <FaqSection />
      <QueryForm />
      <Footer onOpenConsultation={openModal} />
      <ConsultationModal isOpen={modalOpen} onClose={closeModal} />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/917572946732?text=Hello%20Dr.%20Mishra,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 object-contain drop-shadow" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-medium pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
