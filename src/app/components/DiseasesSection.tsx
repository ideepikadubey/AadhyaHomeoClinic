import { useState } from "react";

const categories = [
  {
    label: "Hair and Skin",
    emoji: "💆‍♀️",
    diseases: [
      { name: "Alopecia", desc: "Hair loss and patchy bald spots" },
      { name: "Dandruff", desc: "Flaky, itchy scalp conditions" },
      { name: "Pimples & Acne", desc: "Chronic breakouts and facial skin blemishes" },
      { name: "Eczema", desc: "Dry, red, and intensely itchy skin patches" },
      { name: "Psoriasis", desc: "Autoimmune disease causing silvery, scaly plaques" },
      { name: "Urticaria", desc: "Itchy, raised red welts from allergic reactions" },
      { name: "Dermatitis", desc: "General skin irritation, redness, and swelling" },
    ],
  },
  {
    label: "Gastroenterology",
    emoji: "🤢",
    diseases: [
      { name: "Gas & Bloating", desc: "Digestive discomfort and abdominal pressure" },
      { name: "Acidity & Heartburn", desc: "Acid reflux and burning sensations in chest/throat" },
      { name: "Constipation", desc: "Difficult or irregular bowel movements" },
      { name: "IBS (Irritable Bowel Syndrome)", desc: "Cramping, abdominal pain, diarrhea, and constipation" },
    ],
  },
  {
    label: "Gynaec & Paediatric",
    emoji: "👩‍🍼",
    diseases: [
      { name: "Menstrual Irregularities", desc: "Irregular, delayed, heavy, or missed cycles" },
      { name: "PCOD / PCOS", desc: "Hormonal cysts in ovaries causing multiple symptoms" },
      { name: "White Discharge", desc: "Excessive or pathological vaginal discharge" },
      { name: "Dysmenorrhea", desc: "Severe, debilitating pain during menstrual periods" },
    ],
  },
  {
    label: "Respiratory",
    emoji: "🫁",
    diseases: [
      { name: "Bronchitis", desc: "Inflammation of bronchial tube linings causing cough" },
      { name: "Asthma", desc: "Airway constriction making breathing difficult" },
      { name: "Chronic Coughing", desc: "Persistent cough resistant to standard cures" },
      { name: "Allergic Rhinitis", desc: "Sneezing, runny nose from environmental triggers" },
      { name: "Sinusitis", desc: "Painful inflammation of nasal passages and sinuses" },
    ],
  },

  {
    label: "Psychiatry",
    emoji: "🧠",
    diseases: [
      { name: "Depression", desc: "Persistent low mood and loss of interest" },
      { name: "Sleeplessness (Insomnia)", desc: "Difficulty falling asleep or staying asleep" },
      { name: "Mood Disorders", desc: "Fluctuations in emotional states and anxiety" },
    ],
  },
  {
    label: "Orthopedic",
    emoji: "🦴",
    diseases: [
      { name: "Arthritis", desc: "Joint pain, swelling, and stiffness" },
      { name: "Osteoarthritis", desc: "Wear-and-tear breakdown of joint cartilage" },
      { name: "Rheumatoid Arthritis", desc: "Autoimmune joint inflammation and pain" },
      { name: "Gout", desc: "Sudden, severe attacks of joint pain, often in the big toe" },
    ],
  },
  {
    label: "Endocrine",
    emoji: "🦋",
    diseases: [
      { name: "Diabetes", desc: "Supportive constitutional care for blood sugar levels" },
      { name: "Hypothyroidism", desc: "Underactive thyroid leading to weight gain & fatigue" },
      { name: "Hyperthyroidism", desc: "Overactive thyroid leading to weight loss & anxiety" },
    ],
  },

  {
    label: "Other Conditions",
    emoji: "🩺",
    diseases: [
      { name: "Migraine", desc: "Throbbing headaches, often with nausea and light sensitivity" },
      { name: "High Cholesterol", desc: "Supportive care to regulate lipid levels naturally" },
      { name: "Hypertension", desc: "High blood pressure constitutional management" },
      { name: "Prostatomegaly", desc: "Enlargement of the prostate gland in men" },
      { name: "Renal Stones", desc: "Kidney stone management and pain relief" },
    ],
  },
];

export function DiseasesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="diseases" className="py-10 sm:py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div
            className="text-accent mb-2 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            Treatment Spectrum
          </div>
          <h2
            className="text-foreground mb-3 sm:mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
          >
            Homoeopathic Treatment for <span className="text-primary italic font-normal">Every Condition</span>
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Dr. Mayur N. Mishra specializes in a comprehensive range of clinical areas, providing natural,
            individualized constitutional remedies.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all cursor-pointer text-xs sm:text-sm ${active === i
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-card text-foreground border-primary/20 hover:border-primary/50"
                }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Disease cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {categories[active].diseases.map((d, i) => (
            <div
              key={d.name}
              className="bg-card rounded-2xl p-4 sm:p-5 border border-primary/10 hover:border-primary/35 hover:shadow-md transition-all group reveal-on-scroll"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-xs sm:text-sm font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    className="text-foreground mb-1 text-sm sm:text-base font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {d.name}
                  </div>
                  <div
                    className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {d.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p
            className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Don't see your condition? Contact us — we treat many more.
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-7 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-primary/90 transition-all inline-block hover:shadow-lg hover:shadow-primary/20 text-xs sm:text-sm font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ask About Your Condition
          </a>
        </div>
      </div>
    </section>
  );
}
