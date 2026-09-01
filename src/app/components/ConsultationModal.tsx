import { useState } from "react";
import { X, Send, CheckCircle2, Mail } from "lucide-react";
import clinicLogo from "@/assets/logo.jpg";
import whatsappIcon from "@/assets/whatsapp.png";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const conditions = [
  "Skin Disorders", "Respiratory Issues", "Digestive Problems", "Women's Health",
  "Child Health", "Arthritis & Joint Pain", "Migraine & Headaches", "Hair Loss",
  "Thyroid Issues", "Other",
];

function buildMessage(form: { name: string; phone: string; email: string; age: string; condition: string; message: string }) {
  return [
    `*New Consultation Query*`,
    ``,
    `*Name:* ${form.name}`,
    `*Phone:* ${form.phone}`,
    form.email ? `*Email:* ${form.email}` : "",
    form.age ? `*Age:* ${form.age}` : "",
    `*Condition:* ${form.condition}`,
    ``,
    `*Message:*`,
    form.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", age: "", condition: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aadhyahomoeoclinic11@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Phone: form.phone,
          Email: form.email || "Not provided",
          Age: form.age || "Not specified",
          Condition: form.condition,
          Message: form.message,
          _subject: `New Consultation Query: ${form.name} (${form.condition})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send query. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Modal form submission error:", err);
      setErrorMessage("Something went wrong. Please try WhatsApp or call directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after close animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", age: "", condition: "", message: "" });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors z-10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Logo header */}
        <div className="flex flex-col items-center pt-8 pb-4 px-8 border-b border-foreground/8">
          <img
            src={clinicLogo}
            alt="Aadhya Homoeo Clinic"
            className="w-20 h-20 rounded-full object-cover shadow-lg mb-3"
          />
          <h3
            className="text-foreground text-center"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700 }}
          >
            Book a Consultation
          </h3>
          <p
            className="text-muted-foreground text-center mt-1"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
          >
            Fill in your details — we'll connect via WhatsApp & Email
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <CheckCircle2 className="w-14 h-14 text-primary mb-4" />
              <h3
                className="text-foreground mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600 }}
              >
                Query Sent!
              </h3>
              <p
                className="text-muted-foreground max-w-sm mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.7 }}
              >
                Your consultation query has been sent via WhatsApp and Email. Dr. Mishra's team will respond shortly.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/917572946732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:bg-[#20bd5a] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  Open WhatsApp
                </a>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground border border-foreground/10 px-5 py-2.5 rounded-full hover:bg-secondary transition-colors cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="modal-name"
                    className="block text-foreground mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                  />
                </div>

                {/* Phone */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="modal-phone"
                    className="block text-foreground mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                  />
                </div>

                {/* Email */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="modal-email"
                    className="block text-foreground mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    Email
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                  />
                </div>

                {/* Age */}
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="modal-age"
                    className="block text-foreground mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    Age
                  </label>
                  <input
                    id="modal-age"
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                  />
                </div>
              </div>

              {/* Condition */}
              <div>
                <label
                  htmlFor="modal-condition"
                  className="block text-foreground mb-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                >
                  Condition / Concern *
                </label>
                <select
                  id="modal-condition"
                  name="condition"
                  required
                  value={form.condition}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                >
                  <option value="">Select a condition...</option>
                  {conditions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-foreground mb-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                >
                  Describe Your Symptoms *
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Briefly describe your symptoms, duration, and any previous treatments..."
                  className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-2.5 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                />
              </div>

                {errorMessage && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-xs font-medium text-center">
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 hover:shadow-lg hover:shadow-primary/15 cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting Query...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Consultation Query
                    </>
                  )}
                </button>

              {/* Direct WhatsApp link */}
              <div className="text-center">
                <a
                  href="https://wa.me/917572946732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#25D366] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  Or message us directly on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
