import { useState } from "react";
import {
  Utensils,
  Sparkles,
  Coffee,
  Pill,
  Home,
  ClipboardCheck,
  Ban,
  Timer,
  Activity,
  Hand,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  Sun
} from "lucide-react";

interface RuleItem {
  id: string;
  category: "intake" | "storage" | "avoid" | "followup";
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
}

const CATEGORIES = [
  { id: "all", label: "All Guidelines (10)" },
  { id: "intake", label: "🌿 How to Take" },
  { id: "storage", label: "📦 Handling & Storage" },
  { id: "avoid", label: "⚠️ What to Avoid" },
  { id: "followup", label: "🩺 Tracking & Care" },
];

const RULES: RuleItem[] = [
  {
    id: "r1",
    category: "intake",
    title: "Take with a Calm, Clean Mouth",
    desc: "Ensure your mouth is clean and free of strong tastes. Allow 15–30 minutes before or after meals, tea, or snacks.",
    icon: <Utensils className="w-5 h-5 text-emerald-600" />,
    tag: "Timing",
  },
  {
    id: "r2",
    category: "intake",
    title: "Dissolve Slowly Under the Tongue",
    desc: "Do not chew, bite, or swallow pills directly with water. Place under the tongue and let them melt sublingually for best absorption.",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    tag: "Absorption",
  },
  {
    id: "r3",
    category: "storage",
    title: "Pour into Cap — Never Touch with Fingers",
    desc: "Pour required pills into the bottle cap or a clean dry spoon. Touching remedies with bare fingers can deactivate subtle medicinal coatings.",
    icon: <Hand className="w-5 h-5 text-indigo-600" />,
    tag: "Hygiene",
  },
  {
    id: "r4",
    category: "avoid",
    title: "Keep Strong Flavours & Aromas Away",
    desc: "Avoid coffee, mint (including mint toothpaste), camphor, eucalyptus, raw onion, and strong spices for 30–60 mins around dose time.",
    icon: <Coffee className="w-5 h-5 text-rose-600" />,
    tag: "Diet Restriction",
  },
  {
    id: "r5",
    category: "storage",
    title: "Store in a Cool, Neutral Place",
    desc: "Keep bottles tightly closed, away from direct sunlight, heat, humidity, perfumes, and electronic devices (mobile/microwaves).",
    icon: <Home className="w-5 h-5 text-blue-600" />,
    tag: "Storage",
  },
  {
    id: "r6",
    category: "intake",
    title: "Maintain Gaps Between Different Remedies",
    desc: "If Dr. Mishra has prescribed multiple remedies, leave a 15–30 minute gap between taking each one unless instructed otherwise.",
    icon: <Timer className="w-5 h-5 text-teal-600" />,
    tag: "Sequence",
  },
  {
    id: "r7",
    category: "intake",
    title: "Follow Prescribed Potency & Dose Exactly",
    desc: "Do not alter the potency (e.g. 30C, 200C, 1M), drop count, or frequency of doses without consulting Dr. Mishra.",
    icon: <ClipboardCheck className="w-5 h-5 text-purple-600" />,
    tag: "Dosage",
  },
  {
    id: "r8",
    category: "avoid",
    title: "Avoid Alcohol, Smoking & Tobacco",
    desc: "Avoid alcohol, smoking, vaping, and narcotic substances throughout active treatment, as they hinder homeopathic response.",
    icon: <Ban className="w-5 h-5 text-red-600" />,
    tag: "Lifestyle",
  },
  {
    id: "r9",
    category: "avoid",
    title: "Continue Regular Medications Safely",
    desc: "Never stop your conventional allopathic prescriptions (e.g. for BP, thyroid, or diabetes) without proper medical consultation.",
    icon: <Pill className="w-5 h-5 text-sky-600" />,
    tag: "Safety",
  },
  {
    id: "r10",
    category: "followup",
    title: "Observe & Record Your Body's Shifts",
    desc: "Notice changes in your energy levels, sleep patterns, emotional state, and physical symptoms to discuss during your follow-up.",
    icon: <Activity className="w-5 h-5 text-emerald-600" />,
    tag: "Follow-up",
  },
];

export function MedicineRulesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const displayedRules =
    activeTab === "all"
      ? RULES
      : RULES.filter((r) => r.category === activeTab);

  return (
    <section id="guidelines" className="py-10 sm:py-16 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div
            className="text-accent mb-2 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            Patient Guidelines & Best Practices
          </div>
          <h2
            className="text-foreground mb-3 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
              fontWeight: 700,
            }}
          >
            Rules for Taking <span className="text-primary italic font-normal">Homoeopathic Medicines</span>
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Homoeopathic remedies work dynamically with your vital force. Follow these 4 core principles to ensure maximum potency and swift healing.
          </p>
        </div>

        {/* Quick Summary Cards (4 Thematic Pillars) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/10 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5 sm:mb-2 font-bold text-xs sm:text-sm">
              1
            </div>
            <div className="text-foreground font-semibold text-xs sm:text-sm">Clean Mouth</div>
            <div className="text-muted-foreground text-[10px] sm:text-[11px] mt-0.5">15-30m before/after food</div>
          </div>

          <div className="bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/10 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-1.5 sm:mb-2 font-bold text-xs sm:text-sm">
              2
            </div>
            <div className="text-foreground font-semibold text-xs sm:text-sm">Melt Under Tongue</div>
            <div className="text-muted-foreground text-[10px] sm:text-[11px] mt-0.5">Never chew or swallow</div>
          </div>

          <div className="bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/10 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5 sm:mb-2 font-bold text-xs sm:text-sm">
              3
            </div>
            <div className="text-foreground font-semibold text-xs sm:text-sm">Pour in Cap</div>
            <div className="text-muted-foreground text-[10px] sm:text-[11px] mt-0.5">Don't touch with fingers</div>
          </div>

          <div className="bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/10 text-center shadow-sm">
            <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-1.5 sm:mb-2 font-bold text-xs sm:text-sm">
              4
            </div>
            <div className="text-foreground font-semibold text-xs sm:text-sm">No Strong Flavours</div>
            <div className="text-muted-foreground text-[10px] sm:text-[11px] mt-0.5">Avoid coffee, mint, camphor</div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold scale-102"
                  : "bg-card text-muted-foreground hover:text-foreground border border-primary/10 hover:border-primary/25"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {displayedRules.map((rule) => (
            <div
              key={rule.id}
              className="bg-card rounded-2xl p-4 sm:p-6 border border-primary/10 hover:border-primary/25 shadow-sm hover:shadow-md transition-all flex items-start gap-3 sm:gap-4 group reveal-on-scroll"
            >
              {/* Left Icon Block */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {rule.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3
                    className="text-foreground font-bold text-sm sm:text-lg leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {rule.title}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10 flex-shrink-0">
                    {rule.tag}
                  </span>
                </div>
                <p
                  className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor's Golden Rule Banner */}
        <div className="mt-10 bg-card rounded-2xl p-6 border border-primary/15 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 shadow">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div className="flex-1">
            <div className="text-foreground font-semibold text-sm sm:text-base">
              Dr. Mayur Mishra's Golden Principle for Patients
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
              Homoeopathy works on the vital force gently and naturally. Consistency in timing, proper storage away from electromagnetic waves and scents, and patience ensure the most permanent recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

