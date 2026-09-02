import { useState, useRef } from "react";
import { Instagram, ExternalLink, Play, Volume2, VolumeX, Sparkles } from "lucide-react";
import doctorsDayVideo from "@/assets/Doctor's Day.mp4";
import journeyVideo from "@/assets/Journey.mp4";
import testimonialVideo from "@/assets/Testimonial.mp4";
import whatIsHomoepathyVideo from "@/assets/What is Homoepathy.mp4";

interface VideoPost {
  id: string;
  src: string;
  title: string;
  tag: string;
  caption: string;
  date: string;
}

const VIDEO_POSTS: VideoPost[] = [
  {
    id: "what-is-homoeopathy",
    src: whatIsHomoepathyVideo,
    title: "What is Homoeopathy?",
    tag: "Education",
    caption:
      "Understanding the gentle science and root-cause healing principles of classical homoeopathy by Dr. Mayur N. Mishra. #Homoeopathy #NaturalHealing #AadhyaClinic",
    date: "Educational Reel",
  },
  {
    id: "testimonial",
    src: testimonialVideo,
    title: "Patient Recovery & Testimonial",
    tag: "Patient Story",
    caption:
      "A heartwarming story of natural recovery and long-term relief without side effects. Real healing through personalized treatment. #PatientStory #Recovery",
    date: "Patient Story",
  },
  {
    id: "journey",
    src: journeyVideo,
    title: "Our Healing Journey",
    tag: "Clinic Journey",
    caption:
      "The vision behind Aadhya Homoeo Clinic and our mission to make gentle, scientific homoeopathic care accessible to all. #HealingWithHarmony",
    date: "Clinic Story",
  },
  {
    id: "doctors-day",
    src: doctorsDayVideo,
    title: "Doctor's Day Special Message",
    tag: "Special Feature",
    caption:
      "Dedicated to every patient who trusted natural healing on our journey. Celebrating medical empathy and patient care. #DoctorsDay #HomoeopathyCare",
    date: "Featured Message",
  },
];

function VideoCard({ post }: { post: VideoPost }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="bg-card rounded-3xl overflow-hidden border border-primary/15 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col group reveal-on-scroll">
      {/* Clean, Uncongested Top Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-primary/10 bg-secondary/30">
        <div className="flex items-center gap-1.5 min-w-0">
          <Instagram className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
          <span className="text-foreground text-xs font-semibold tracking-tight truncate">
            @dr_mayurs_aadhya_homeo
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10 flex-shrink-0 ml-2">
          {post.tag}
        </span>
      </div>

      {/* Video Container (Reel Format) */}
      <div
        className="relative bg-black aspect-[9/14] sm:aspect-[4/5] overflow-hidden cursor-pointer flex items-center justify-center"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={post.src}
          playsInline
          loop
          muted={isMuted}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/30">
            <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur text-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 ml-1 fill-current" />
            </div>
          </div>
        )}

        {/* Video Controls Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Title Badge Overlay on Video */}
        <div className="absolute top-3 left-3 right-3 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full inline-block shadow-md max-w-full truncate">
            {post.title}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-card gap-3">
        <div>
          <h4
            className="text-foreground text-base font-bold mb-1.5 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h4>
          <p
            className="text-muted-foreground text-xs leading-relaxed line-clamp-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {post.caption}
          </p>
        </div>

        {/* Watch on Instagram Link */}
        <div className="pt-3 border-t border-primary/5 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground font-medium">
            {post.date}
          </span>
          <a
            href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-rose-600 transition-colors"
          >
            Watch Reel
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function InstagramSection() {
  return (
    <section id="updates" className="py-10 sm:py-16 bg-muted relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Instagram className="w-3.5 h-3.5 text-rose-500" />
              Instagram Videos & Reels
            </div>
            <h2
              className="text-foreground leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
              }}
            >
              Watch & Learn on <span className="text-primary italic font-normal">Instagram</span>
            </h2>
            <p
              className="text-muted-foreground mt-2 max-w-xl text-xs sm:text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore informative video insights, patient recovery stories, and health awareness guides shared by Dr. Mayur N. Mishra.
            </p>
          </div>

          <a
            href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:opacity-95 hover:shadow-lg transition-all flex-shrink-0 cursor-pointer text-xs sm:text-sm font-semibold shadow w-full sm:w-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Instagram className="w-4 h-4" />
            Follow @dr_mayurs_aadhya_homeo
          </a>
        </div>

        {/* 4 Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VIDEO_POSTS.map((post) => (
            <VideoCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 sm:mt-12 bg-card rounded-2xl p-4 sm:p-6 border border-primary/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center flex-shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="text-foreground font-semibold text-sm sm:text-base">
                Join our Instagram Community
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">
                Daily health tips, clinical case discussions, and live Q&A sessions with Dr. Mayur Mishra.
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/dr_mayurs_aadhya_homeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary/25 text-primary hover:bg-primary/5 px-5 sm:px-6 py-2.5 rounded-full transition-all text-xs sm:text-sm font-medium whitespace-nowrap shadow-xs hover:shadow w-full sm:w-auto"
          >
            View All Posts on Instagram
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}


