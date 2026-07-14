import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const posts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1725267882596-2d08e560b250?w=400&h=400&fit=crop&auto=format",
    caption: "🌿 Did you know homeopathy can effectively manage chronic sinusitis without antibiotics? Natural, gentle, and long-lasting relief. Book your consultation today! #HomeopathyCare #AadhyaHomeo",
    likes: 142,
    comments: 18,
    date: "2 days ago",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1708667027894-6e9481ae1baf?w=400&h=400&fit=crop&auto=format",
    caption: "🍃 Nature heals. Our remedies are derived from the purest natural sources — plants, minerals, and more. Trust the wisdom of classical homeopathy. #NaturalMedicine",
    likes: 98,
    comments: 12,
    date: "5 days ago",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1638988561160-7c0019c84a5c?w=400&h=400&fit=crop&auto=format",
    caption: "✨ Patient Success Story: After 3 months of treatment, Mrs. R.K. is completely psoriasis-free! Homeopathy works when you give it the time it deserves. #PatientStory #Psoriasis",
    likes: 217,
    comments: 34,
    date: "1 week ago",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1764249453870-e3e28c80b8b2?w=400&h=400&fit=crop&auto=format",
    caption: "🌸 PCOD can be managed beautifully with homeopathy! No hormonal pills, no side effects. We've helped 100+ women regulate their cycles naturally. #PCOD #WomensHealth",
    likes: 183,
    comments: 27,
    date: "1 week ago",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1611072852066-44190157f2aa?w=400&h=400&fit=crop&auto=format",
    caption: "💚 Quality remedies, quality care. Every medicine at Aadhya Homeo Clinic is sourced from certified manufacturers. Your health is our priority. #QualityCare",
    likes: 76,
    comments: 9,
    date: "10 days ago",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1760163287827-12bc4137001c?w=400&h=400&fit=crop&auto=format",
    caption: "🌱 Treating children with homeopathy — safe, gentle, and effective. No fear of side effects! Kids love our treatment. #ChildHealth #PediatricHomeopathy",
    likes: 156,
    comments: 22,
    date: "2 weeks ago",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop&auto=format",
    caption: "🧠 Mental health matters! Homeopathy offers safe, natural relief for anxiety, depression & insomnia — without dependency. Consult Dr. Mishra today. #MentalHealth #Homeopathy",
    likes: 204,
    comments: 31,
    date: "2 weeks ago",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop&auto=format",
    caption: "💊 Did you know? Homeopathic remedies are derived from natural substances & are completely non-toxic. Perfect for the whole family — from infants to seniors! #NaturalHealth",
    likes: 119,
    comments: 14,
    date: "3 weeks ago",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&h=400&fit=crop&auto=format",
    caption: "🌺 Thyroid disorders — both hypo and hyperthyroidism — respond beautifully to constitutional homoeopathic treatment. Real healing, no side effects. #ThyroidHealth",
    likes: 88,
    comments: 11,
    date: "3 weeks ago",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&auto=format",
    caption: "🦴 Arthritis & joint pain can be significantly reduced with homoeopathy! Patients who've tried everything else find lasting relief here. Book your consultation. #ArthritisRelief",
    likes: 143,
    comments: 19,
    date: "1 month ago",
  },
];

export function InstagramSection() {
  return (
    <section id="updates" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div
              className="text-accent mb-3 tracking-widest uppercase flex items-center gap-2"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
            >
              <Instagram className="w-4 h-4" />
              Latest from Instagram
            </div>
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700 }}
            >
              Stay <span className="text-primary italic font-normal">Connected</span> with Us
            </h2>
            <p
              className="text-muted-foreground mt-2 max-w-md"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
            >
              Follow us for health tips, patient stories, and clinic updates. Showing our last 10 posts.
            </p>
          </div>

          <a
            href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity flex-shrink-0 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            <Instagram className="w-4 h-4" />
            Follow @dr_mayurs_aadhya_homeo
          </a>
        </div>

        {/* Grid — 10 posts in 2-col on mobile, 3-col on tablet, 5-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {posts.map((post, i) => (
            <a
              key={post.id}
              href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all bg-card cursor-pointer relative animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={post.img}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-3">
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white" />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}>{post.comments}</span>
                    </div>
                  </div>
                  <p
                    className="text-white/90 text-center line-clamp-3 hidden sm:block"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", lineHeight: 1.5 }}
                  >
                    {post.caption}
                  </p>
                </div>

                {/* "Latest" badge on first post */}
                {i === 0 && (
                  <div
                    className="absolute top-2 left-2 bg-accent text-white px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600 }}
                  >
                    Latest
                  </div>
                )}
              </div>

              {/* Date strip */}
              <div className="px-2.5 py-2 flex items-center justify-between">
                <span
                  className="text-muted-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
                >
                  {post.date}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="flex items-center gap-0.5" style={{ fontSize: "11px" }}>
                    <Heart className="w-3 h-3" /> {post.likes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/5 transition-colors cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
          >
            View All Posts on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
