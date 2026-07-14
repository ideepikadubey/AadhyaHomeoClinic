import { CheckCircle2, GraduationCap, Award, Heart } from "lucide-react";

export function AboutSection() {
  const qualifications = [
    { icon: <GraduationCap className="w-5 h-5" />, text: "B.H.M.S. (Bachelor of Homoeopathic Medicine and Surgery)" },
    { icon: <Award className="w-5 h-5" />, text: "Registered Homoeopathic Physician · Reg. No.: G-32424" },
    { icon: <Award className="w-5 h-5" />, text: "Experienced in Chronic & Acute Pathologies" },
    { icon: <Award className="w-5 h-5" />, text: "10+ Years of Active Clinical Practice" },
  ];

  const values = [
    "Individualized treatment for every patient",
    "Root-cause healing, not symptom suppression",
    "Zero side effects, safe for all ages",
    "Transparent consultation and follow-ups",
    "Affordable, accessible homoeopathic care",
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image side */}
        <div className="relative">
          <div
            className="absolute top-6 left-6 right-0 bottom-0 rounded-3xl"
            style={{ background: "var(--secondary)" }}
          />
          <img
            src="https://images.unsplash.com/photo-1638988562241-0e40dffe16ee?w=560&h=620&fit=crop&auto=format"
            alt="Homoeopathic medicines at Aadhya Homoeo Clinic"
            className="relative w-full rounded-3xl object-cover shadow-xl"
            style={{ height: "clamp(300px, 50vw, 480px)" }}
          />

          {/* Overlay card */}
          <div
            className="absolute bottom-4 sm:bottom-6 right-2 sm:right-0 sm:translate-x-4 bg-card rounded-2xl p-3 sm:p-4 shadow-xl border border-primary/10 max-w-[180px] sm:max-w-[200px]"
          >
            <Heart className="w-6 h-6 text-accent mb-2 fill-accent/10" />
            <div
              className="text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600 }}
            >
              Caring for families since 2014
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div
            className="text-accent mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            About the Doctor
          </div>
          <h2
            className="text-foreground mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
          >
            Dr. Mayur N. Mishra
          </h2>
          <p
            className="text-muted-foreground mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.8 }}
          >
            Dr. Mayur N. Mishra is a dedicated homoeopathic physician with over a decade of
            experience in treating a wide spectrum of conditions — from chronic lifestyle diseases to
            pediatric ailments. His approach is deeply rooted in classical homoeopathy: understanding the
            patient as a whole person, not just a collection of symptoms.
          </p>
          <p
            className="text-muted-foreground mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.8 }}
          >
            At Aadhya Homoeo Clinic, every consultation is a thorough conversation. Dr. Mishra believes
            that the right remedy, chosen with care, can unlock the body's innate healing potential — safely
            and gently.
          </p>

          {/* Qualifications */}
          <div className="mb-8 space-y-3">
            {qualifications.map((q, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-primary flex-shrink-0">{q.icon}</div>
                <span
                  className="text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                >
                  {q.text}
                </span>
              </div>
            ))}
          </div>

          {/* Values */}
          <div
            className="bg-secondary rounded-2xl p-5 border border-primary/10"
          >
            <div
              className="text-primary mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600 }}
            >
              Our Promise to You
            </div>
            <div className="space-y-2">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span
                    className="text-muted-foreground"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
