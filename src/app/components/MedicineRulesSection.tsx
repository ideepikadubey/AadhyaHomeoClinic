import {
  Smile,
  Sparkles,
  Coffee,
  Pill,
  Home,
  ClipboardCheck,
  Ban,
  Timer,
  Activity,
  AlertCircle
} from "lucide-react";

const rules = [
  {
    num: 1,
    title: "Take with a Calm, Clean Mouth",
    desc: "Allow 15-30 minutes before or after eating. Let your mouth be free from strong tastes.",
    icon: <Smile className="w-5 h-5" />,
  },
  {
    num: 2,
    title: "Let the Remedy Melt Under the Tongue",
    desc: "Do not chew, bite, or swallow the pills directly — let them dissolve naturally.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    num: 3,
    title: "Handle With Care",
    desc: "Pour the pills into the bottle cap or a clean spoon. Avoid touching them with your fingers.",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    num: 4,
    title: "Keep Strong Flavours Away",
    desc: "Avoid for 30-60 minutes: Coffee, Mint, Camphor, Eucalyptus, and Strong Spices. These can interfere with the remedy's action.",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    num: 5,
    title: "Continue Other Medicines Safely",
    desc: "Never stop conventional medicines without medical advice.",
    icon: <Pill className="w-5 h-5" />,
  },
  {
    num: 6,
    title: "Store in a Peaceful Place",
    desc: "Keep away from sunlight, heat, moisture, perfumes, and electronics. Store tightly closed.",
    icon: <Home className="w-5 h-5" />,
  },
  {
    num: 7,
    title: "Follow Potency & Dose Exactly",
    desc: "Do not change 30C / 200C / 1M or frequency on your own.",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    num: 8,
    title: "Avoid Alcohol, Smoking and Narcotics",
    desc: "Always avoid alcohol, smoking, and narcotics.",
    icon: <Ban className="w-5 h-5" />,
  },
  {
    num: 9,
    title: "Leave Gaps Between Remedies",
    desc: "Allow 15-30 minutes between different homoeopathic doses unless advised otherwise.",
    icon: <Timer className="w-5 h-5" />,
  },
  {
    num: 10,
    title: "Observe Your Body",
    desc: "Notice improvements, changes in energy, mood, sleep, or any aggravations. Share them with your practitioner.",
    icon: <Activity className="w-5 h-5" />,
  },
];

export function MedicineRulesSection() {
  return (
    <section id="guidelines" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-accent mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            Patient Guidelines
          </div>
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
          >
            Rules for Taking <span className="text-primary italic font-normal">Homoeopathic Medicines</span>
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Gentle Guidelines for Safe & Effective Healing. Follow these instructions to ensure
            the highest efficacy of your homoeopathic remedies.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.num}
              className="bg-card rounded-2xl p-6 border border-primary/10 hover:shadow-md transition-shadow flex items-start gap-4"
            >
              {/* Rule Number & Icon container */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                >
                  {rule.num}
                </div>
                <div className="text-accent mt-1">
                  {rule.icon}
                </div>
              </div>

              {/* Text details */}
              <div>
                <h3
                  className="text-foreground mb-1.5"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 600 }}
                >
                  {rule.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.6 }}
                >
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note block */}
        <div className="mt-12 bg-card/60 backdrop-blur rounded-2xl p-6 border border-accent/20 max-w-2xl mx-auto text-center">
          <p
            className="text-foreground"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500 }}
          >
            💡 <strong className="text-accent">Important Note:</strong> Homoeopathic medicines work on energetic principles. Keep them clean, handle with care, and follow Dr. Mishra's advice closely.
          </p>
        </div>
      </div>
    </section>
  );
}
