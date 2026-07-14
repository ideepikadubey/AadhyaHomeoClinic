import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Pune",
    condition: "Psoriasis",
    rating: 5,
    text: "I suffered from psoriasis for 8 years and tried everything. After just 4 months with Dr. Mishra, my skin is 90% clear. I can't thank him enough. His approach is thorough and very patient.",
    avatar: "PS",
  },
  {
    name: "Rahul Deshmukh",
    location: "Nashik",
    condition: "Chronic Asthma",
    rating: 5,
    text: "My son had asthma attacks every other week. We were tired of inhalers. Dr. Mishra's treatment over 6 months has reduced his attacks by 80%. He hasn't been hospitalized since.",
    avatar: "RD",
  },
  {
    name: "Sunita Patil",
    location: "Mumbai",
    condition: "PCOD",
    rating: 5,
    text: "PCOD had made my life miserable. Irregular periods, weight gain, mood swings. Homeopathy at Aadhya Clinic balanced everything naturally. My cycles are regular now for the first time in years.",
    avatar: "SP",
  },
  {
    name: "Arun Kulkarni",
    location: "Kolhapur",
    condition: "Migraine",
    rating: 5,
    text: "I had migraines 3-4 times a week. Dr. Mishra identified the constitutional remedy after a thorough consultation. Within 2 months, migraines reduced to once a month. Life-changing!",
    avatar: "AK",
  },
  {
    name: "Meena Joshi",
    location: "Solapur",
    condition: "Arthritis",
    rating: 5,
    text: "Knee pain and arthritis made it hard to walk. My daughter convinced me to try homeopathy. After 3 months of Dr. Mishra's treatment, I'm walking comfortably. Truly blessed.",
    avatar: "MJ",
  },
  {
    name: "Vikram Nair",
    location: "Aurangabad",
    condition: "Sinusitis",
    rating: 5,
    text: "Chronic sinusitis and frequent headaches were my constant companions. Now, after treatment, I barely have an episode. Dr. Mishra is incredibly knowledgeable and approachable.",
    avatar: "VN",
  },
];

const avatarColors = [
  "#123c24", "#10b981", "#059669", "#15803d", "#047857", "#064e3b",
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-accent mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            Patient Testimonials
          </div>
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
          >
            Stories of <span className="text-primary italic font-normal">Healing & Hope</span>
          </h2>
          <p
            className="text-muted-foreground max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Real patients, real results. Read what our community says about their journey to health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 border border-primary/10 hover:shadow-md transition-shadow relative animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote
                className="absolute top-5 right-5 w-8 h-8 text-primary/10"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-logo-gold text-logo-gold" />
                ))}
              </div>

              <p
                className="text-muted-foreground mb-5 relative z-10"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.75 }}
              >
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: avatarColors[i % avatarColors.length], fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-foreground"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500 }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-muted-foreground"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                  >
                    {t.location} · {t.condition}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
