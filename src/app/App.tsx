import { useState } from "react";
import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { DiseasesSection } from "./components/DiseasesSection";
import { MedicineRulesSection } from "./components/MedicineRulesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { GoogleReviewsSection } from "./components/GoogleReviewsSection";
import { InstagramSection } from "./components/InstagramSection";
import { QueryForm } from "./components/QueryForm";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar onOpenConsultation={openModal} />
      <HeroSection onOpenConsultation={openModal} />
      <AboutSection />
      <DiseasesSection />
      <MedicineRulesSection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <InstagramSection />
      <QueryForm />
      <Footer onOpenConsultation={openModal} />
      <ConsultationModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
