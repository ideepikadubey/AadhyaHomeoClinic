import { Building2, Stethoscope, HeartPulse, GraduationCap, Brain, Award, Sparkles, CheckCircle2 } from "lucide-react";

interface AffiliationItem {
  id: string;
  role: string;
  institution: string;
  category: string;
  typeBadge: string;
  description: string;
  icon: React.ReactNode;
}

const AFFILIATIONS: AffiliationItem[] = [
  {
    id: "hiramani",
    role: "Consulting Homoeopathic Physician",
    institution: "Hiramani Aarogyadham",
    category: "Healthcare & Wellness Centre",
    typeBadge: "Consulting Physician",
    description:
      "Providing expert homoeopathic consultations for chronic ailments, lifestyle disorders, and comprehensive wellness care.",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "ojas",
    role: "Consulting Homoeopathic Physician",
    institution: "Ojas Multispeciality Hospital",
    category: "Multispeciality Care",
    typeBadge: "Consulting Physician",
    description:
      "Delivering integrative OPD homoeopathic care, collaborating with clinical specialists for chronic & acute pathology management.",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "reshambai",
    role: "Visiting Homoeopathic Physician",
    institution: "Reshambai Multispeciality Gynaec Hospital",
    category: "Women's Health & Gynaecology",
    typeBadge: "Visiting Physician",
    description:
      "Specialized non-invasive homoeopathic therapies for PCOD, hormonal imbalances, menstrual irregularities, and female wellness.",
    icon: <HeartPulse className="w-6 h-6" />,
  },
  {
    id: "apollo",
    role: "Visiting Faculty",
    institution: "Apollo Physiotherapy College",
    category: "Medical Academia & Teaching",
    typeBadge: "Academic Faculty",
    description:
      "Educating and mentoring future healthcare professionals on clinical principles, holistic disease evaluation, and patient empathy.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: "counsellor",
    role: "Counsellor",
    institution: "Clinical & Psychological Counselling",
    category: "Mind-Body Health & Guidance",
    typeBadge: "Mental Well-being",
    description:
      "Offering empathetic psycho-emotional counselling, anxiety & stress management, and behavioral wellness support alongside homoeopathy.",
    icon: <Brain className="w-6 h-6" />,
  },
];

export function HospitalAffiliationsSection() {
  return (
    <section id="affiliations" className="py-10 sm:py-16 bg-secondary/50 border-y border-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Award className="w-3.5 h-3.5" />
            Hospital & Institutional Affiliations
          </div>
          <h2
            className="text-foreground mb-3 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
              fontWeight: 700,
            }}
          >
            Active Consultations & <span className="text-primary italic font-normal">Clinical Roles</span>
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            In addition to his private clinical practice at Aadhya Homoeo Clinic, Dr. Mayur N. Mishra actively serves across premier multispeciality hospitals, healthcare institutes, and academic centres in Ahmedabad.
          </p>
        </div>

        {/* Affiliations Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {AFFILIATIONS.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-card rounded-2xl p-5 sm:p-7 border border-primary/15 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group relative reveal-on-scroll ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-secondary border border-primary/15 text-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase px-2.5 sm:px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/15 truncate">
                    {item.typeBadge}
                  </span>
                </div>

                {/* Role Title */}
                <div className="text-[11px] sm:text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">
                  {item.role}
                </div>

                {/* Institution Name */}
                <h3
                  className="text-foreground font-bold text-base sm:text-xl leading-snug mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.institution}
                </h3>

                {/* Category subtitle */}
                <div className="text-xs text-accent-foreground/70 font-medium mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-primary/60 flex-shrink-0" />
                  <span className="truncate">{item.category}</span>
                </div>

                {/* Description */}
                <p
                  className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Card Footer status */}
              <div className="pt-3.5 border-t border-primary/10 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  Active Clinical Role
                </span>
                <span className="text-muted-foreground/60 text-[10px] sm:text-[11px]">Ahmedabad</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Banner Strip */}
        <div className="mt-10 sm:mt-12 bg-card rounded-2xl p-4 sm:p-6 border border-primary/15 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <div
              className="text-foreground font-bold text-lg sm:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              B.H.M.S.
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium mt-0.5">
              Ahmedabad Homoeopathic Medical College
            </div>
          </div>
          <div>
            <div
              className="text-foreground font-bold text-lg sm:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              CCRH Govt. of India
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium mt-0.5">
              Research Awardee (2023)
            </div>
          </div>
          <div>
            <div
              className="text-foreground font-bold text-lg sm:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visiting Faculty
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium mt-0.5">
              Apollo Physiotherapy College
            </div>
          </div>
          <div>
            <div
              className="text-foreground font-bold text-lg sm:text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Family Counsellor
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm font-medium mt-0.5">
              Aadarsh Ahmedabad (2019)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
