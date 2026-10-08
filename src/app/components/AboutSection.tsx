import { CheckCircle2, GraduationCap, Award, BookOpen, HeartHandshake, ShieldCheck } from "lucide-react";
import drMishra from "@/assets/dr_mishra.jpg";

export function AboutSection() {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "B.H.M.S. Graduate",
      desc: "Ahmedabad Homoeopathic Medical College",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Registered Physician",
      desc: "Registration No.: G-32424",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "CCRH Govt. of India Scholarship & Award",
      desc: "Research on Insomnia · April 10, 2023, Vigyan Bhawan, New Delhi",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Family Counselling Certification",
      desc: "Course completed at Aadarsh Ahmedabad (2019)",
    },
  ];

  const clinicalExpertise = [
    {
      category: "Chronic Diseases",
      items: "Diabetes, Hypertension, Thyroid disorders, High Cholesterol, Obesity & Pain management",
    },
    {
      category: "Skin, Hair & Psychiatry",
      items: "Diverse skin conditions, Hair fall, Psychiatric & Sleep disorders",
    },
    {
      category: "Respiratory Illnesses",
      items: "Allergy, Asthma, Bronchitis & Chronic Coughing",
    },
    {
      category: "Gynecological & Pediatric",
      items: "PCOD/S, White discharge, Menstrual irregularities & Evaluating developmental delays in pediatric patients",
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content (Left column) */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <div
              className="text-accent mb-2 tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600 }}
            >
              About the Doctor
            </div>
            
            <h2
              className="text-foreground mb-1 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700 }}
            >
              Dr. Mayur N. Mishra
            </h2>
            <div className="text-primary font-semibold text-xs sm:text-base mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span>(B.H.M.S.) · Leading Homoeopathic Physician & Classical Homeopathy Specialist</span>
              <span className="text-muted-foreground font-normal hidden sm:inline">|</span>
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">Reg. No.: G-32424</span>
            </div>

            {/* Paragraphs taken directly from official document */}
            <div className="space-y-3.5 text-muted-foreground text-xs sm:text-base leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                <strong className="text-foreground font-semibold">Dr. Mayur N. Mishra</strong>, a Bachelor of Homeopathic Medicine and Surgery graduate from <strong className="text-foreground font-medium">Ahmedabad Homoeopathic Medical College</strong>, brings a wealth of clinical expertise as one of the <strong className="text-foreground font-semibold">best homeopathic doctors in Ahmedabad</strong>.
              </p>

              <p>
                His specialized classical homeopathy knowledge extends to treating chronic diseases like Diabetes, Hypertension, Thyroid disorders, High Cholesterol, Obesity, pain management, hair fall, managing diverse skin conditions, and addressing psychiatric and sleep disorders.
              </p>

              <p>
                Dr. Mishra also has significant clinical experience in respiratory illnesses like Allergy, Asthma, Bronchitis, Chronic Coughing, and Gynecological disorders like PCOD/S, White discharge, and menstrual irregularities, as well as pediatric developmental evaluation.
              </p>

              <p>
                His proficiency is supported by pioneering research on <strong className="text-foreground font-medium">Insomnia in Homeopathy</strong>, recognized with a scholarship and certificate from the <strong className="text-foreground font-medium">Government of India (CCRH)</strong> on <strong className="text-foreground font-medium">April 10, 2023</strong>, at <strong className="text-foreground font-medium">Vigyan Bhawan, New Delhi</strong>. Additionally, his family counselling course at <strong className="text-foreground font-medium">Aadarsh Ahmedabad in 2019</strong> further enhances his holistic approach to patient care.
              </p>
            </div>

            {/* Credentials / Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {credentials.map((c, i) => (
                <div key={i} className="p-3 sm:p-3.5 rounded-xl bg-secondary border border-primary/10 flex items-start gap-3">
                  <div className="text-primary mt-0.5 flex-shrink-0">{c.icon}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-foreground text-xs font-semibold">{c.title}</div>
                    <div className="text-muted-foreground text-[11px] sm:text-xs leading-snug mt-0.5">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Clinical Domains (Right column) */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal-on-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-primary/15 bg-card max-w-md mx-auto lg:max-w-none w-full">
              <img
                src={drMishra}
                alt="Dr. Mayur N. Mishra (B.H.M.S.) – Best Homeopathic Doctor & Classical Homeopathy Physician in Ahmedabad"
                className="w-full object-cover object-top aspect-[4/5] hover:scale-102 transition-transform duration-700"
                style={{ maxHeight: "480px" }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-0.5">
                  Aadhya Homoeo Clinic
                </div>
                <div className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Healing with Harmony
                </div>
              </div>
            </div>

            {/* Specialized Domains Box */}
            <div className="bg-secondary rounded-2xl p-5 border border-primary/10">
              <div
                className="text-primary mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700 }}
              >
                <BookOpen className="w-4 h-4 text-primary" />
                Clinical Domains & Expertise
              </div>
              <div className="space-y-2.5">
                {clinicalExpertise.map((item, i) => (
                  <div key={i} className="text-xs leading-relaxed">
                    <span className="font-semibold text-foreground">{item.category}: </span>
                    <span className="text-muted-foreground">{item.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

