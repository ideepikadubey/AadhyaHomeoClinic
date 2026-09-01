import { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Treatment & Safety",
    question: "How does homoeopathic treatment work?",
    answer:
      "Homoeopathy works on the holistic principle of 'like cures like'. By using highly diluted, natural active substances, it gently stimulates your body's innate immune and self-healing mechanisms, aiming to eradicate the root cause of the disorder rather than merely suppressing external symptoms.",
  },
  {
    category: "Treatment & Safety",
    question: "Are there any side effects with homoeopathic medicines?",
    answer:
      "Homoeopathic medicines are completely safe, non-toxic, and non-habit forming when prescribed by a qualified physician. Because of their micro-diluted preparation, they do not cause organ toxicity and are gentle enough for infants, pregnant mothers, and elderly patients.",
  },
  {
    category: "Treatment & Safety",
    question: "How long does it take to see noticeable improvements?",
    answer:
      "For acute conditions (like seasonal allergies, flu, gastric upset, or sudden pains), patients often feel relief within a few hours to days. For chronic, longstanding conditions (like psoriasis, asthma, PCOD, arthritis, or migraines), gradual and lasting improvement unfolds over several weeks to a few months.",
  },
  {
    category: "Medicines & Diet",
    question: "Can I take homoeopathy alongside my regular allopathic medicines?",
    answer:
      "Yes, homoeopathic medicines can be safely taken alongside conventional medications (such as daily medicines for blood pressure, diabetes, thyroid, or cholesterol). We simply recommend maintaining a 30-minute time gap between different medicines. You should never discontinue existing prescribed medications without consulting your doctor.",
  },
  {
    category: "Medicines & Diet",
    question: "Are there strict dietary restrictions during homoeopathic treatment?",
    answer:
      "Modern homoeopathy does not enforce severe dietary restrictions. We only recommend keeping a clean mouth 15–30 minutes before and after taking your pills, and avoiding extremely pungent substances like raw garlic, raw onion, camphor, or strong black coffee right around your dose time.",
  },
  {
    category: "Consultation & Appointments",
    question: "What happens during the first consultation with Dr. Mishra?",
    answer:
      "The initial consultation is a comprehensive, compassionate conversation lasting 20–45 minutes. Dr. Mishra thoroughly evaluates your medical history, physical symptoms, mental stressors, lifestyle, sleep patterns, and constitutional tendencies to tailor an individualized remedy.",
  },
  {
    category: "Consultation & Appointments",
    question: "Do you offer online consultations and medicine courier services?",
    answer:
      "Yes! We provide complete virtual consultations via video call or phone for patients across India and abroad. Following your online consultation, your personalized homoeopathic remedies are carefully packaged and dispatched directly to your doorstep.",
  },
  {
    category: "Consultation & Appointments",
    question: "How do I book an appointment or visit the clinic?",
    answer:
      "You can book directly using the 'Book Free Consultation' button or query form on this website, call or WhatsApp us at +91 75729 46732, or visit our clinic at Ojas Hospital, opposite dinosaur circle, Rakhiyal, Ahmedabad (Mon–Sat, 10:00 AM – 7:00 PM).",
  },
];

const categories = ["All", "Treatment & Safety", "Medicines & Diet", "Consultation & Appointments"];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-1.5 text-accent mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2
            className="text-foreground mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
            }}
          >
            Frequently Asked <span className="text-primary italic font-normal">Questions</span>
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Everything you need to know about homoeopathic treatment, safety, consultations, and medicines at Aadhya Homoeo Clinic.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-foreground hover:bg-primary/10 border border-foreground/5"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-card shadow-md border-primary/25 ring-1 ring-primary/10"
                    : "bg-card border-foreground/8 hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base sm:text-lg transition-colors ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-foreground/5 animate-fade-in">
                    <p
                      className="text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.75 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help / WhatsApp CTA Card */}
        <div className="mt-14 bg-gradient-to-r from-primary/10 via-secondary to-primary/10 rounded-3xl p-6 sm:p-8 border border-primary/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4
              className="text-foreground text-lg sm:text-xl font-bold mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Have a specific health question?
            </h4>
            <p
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Speak directly with Dr. Mayur N. Mishra or book your appointment today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/917572946732?text=Hello%20Dr.%20Mishra,%20I%20have%20a%20question%20regarding%20homoeopathic%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:bg-[#20bd5a] transition-all text-sm font-medium shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917572946732"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all text-sm font-medium shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
