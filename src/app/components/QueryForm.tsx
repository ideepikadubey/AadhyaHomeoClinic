import { useState } from "react";
import { Send, CheckCircle2, MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

export function QueryForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", age: "", condition: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = [
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
    ].filter(Boolean).join("\n");

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/917572946732?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Also trigger mailto for email
    const emailSubject = `Consultation Query – ${form.name} – ${form.condition}`;
    const emailBody = message.replace(/\*/g, "");
    const mailtoUrl = `mailto:aadhyahomoeoclinic11@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);

    setLoading(false);
    setSubmitted(true);
  };

  const contactDetails = [
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "Ojas Hospital, opp dinosaur circle, near Rakhiyal char rasta, Rakhiyal, Ahmedabad, Gujarat, 380021" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 75729 46732" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "aadhyahomoeoclinic11@gmail.com" },
    { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon – Sat: 10:00 AM – 7:00 PM" },
  ];

  const conditions = [
    "Skin Disorders", "Respiratory Issues", "Digestive Problems", "Women's Health",
    "Child Health", "Arthritis & Joint Pain", "Migraine & Headaches", "Hair Loss",
    "Thyroid Issues", "Other",
  ];

  // Google Maps embed URL using the Place ID
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID || "ChIJMV2ALk6HXjkRQYaM4Ixj_po";
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.6!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s=${placeId}!2sAadhya%20Homoeo%20Clinic!5e0!3m2!1sen!2sin!4v1`;
  const mapSearchUrl = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY || ""}&q=Aadhya+Homoeo+Clinic,Rakhiyal,Ahmedabad&zoom=16`;

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-accent mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            Get in Touch
          </div>
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
          >
            Book a <span className="text-primary italic font-normal">Consultation</span>
          </h2>
          <p
            className="text-muted-foreground max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Fill in your details and Dr. Mishra's team will reach out within 24 hours to confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info + Map */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="bg-primary rounded-3xl p-8 text-primary-foreground"
            >
              <h3
                className="mb-2 text-primary-foreground"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 600 }}
              >
                Visit the Clinic
              </h3>
              <p
                className="text-primary-foreground/80 mb-8"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.6 }}
              >
                We welcome walk-ins and scheduled appointments. Come experience natural healing.
              </p>

              <div className="space-y-5">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex gap-3">
                    <div className="text-accent mt-0.5 flex-shrink-0">{c.icon}</div>
                    <div>
                      <div
                        className="text-primary-foreground/60"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}
                      >
                        {c.label}
                      </div>
                      <div
                        className="text-primary-foreground"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-foreground/8 shadow-sm">
              <iframe
                src={mapSearchUrl}
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aadhya Homoeo Clinic Location"
              />
              <a
                href={`https://www.google.com/maps/search/Aadhya+Homoeo+Clinic+Rakhiyal+Ahmedabad`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white py-3 text-primary hover:bg-secondary transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Social links */}
            <div className="bg-card rounded-2xl p-5 border border-foreground/8">
              <div
                className="text-foreground mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600 }}
              >
                Follow for Health Tips
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 hover:bg-secondary transition-colors text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
                >
                  📷 Instagram
                </a>
                <a
                  href="mailto:aadhyahomoeoclinic11@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 hover:bg-secondary transition-colors text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card rounded-3xl p-12 border border-foreground/8 h-full flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h3
                  className="text-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 600 }}
                >
                  Query Received!
                </h3>
                <p
                  className="text-muted-foreground max-w-sm"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
                >
                  Thank you for reaching out. Dr. Mishra's team will contact you within 24 hours to schedule your consultation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", age: "", condition: "", message: "" }); }}
                  className="mt-6 text-primary border border-primary/30 px-5 py-2 rounded-full hover:bg-primary/5 transition-colors cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                >
                  Submit another query
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl p-8 border border-foreground/8 space-y-5 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-foreground mb-1.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-foreground mb-1.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-foreground mb-1.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-foreground mb-1.5"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                    >
                      Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="1"
                      max="120"
                      value={form.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                    />
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <label
                    htmlFor="condition"
                    className="block text-foreground mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    Primary Condition / Concern *
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    required
                    value={form.condition}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
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
                    htmlFor="message"
                    className="block text-foreground mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    Describe Your Symptoms / Query *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your symptoms, duration, and any previous treatments..."
                    className="w-full bg-secondary border border-foreground/8 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 hover:shadow-lg hover:shadow-primary/15 cursor-pointer animate-fade-in"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Query & Book Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
