import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max((currentScrollY / scrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      setVisible(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-24 right-6 z-40 transition-all duration-500 ease-out flex items-center group ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-6 pointer-events-none scale-75"
      }`}
    >
      {/* Animated Tooltip on Hover */}
      <span
        className="mr-2.5 px-3.5 py-1.5 rounded-full bg-[#0a1714]/90 backdrop-blur-md text-emerald-300 text-xs font-semibold shadow-xl border border-emerald-500/20 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden sm:inline-block"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Scroll to Top
      </span>

      {/* Button with Radial Progress Ring & Glowing Icon */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a1714]/90 backdrop-blur-md text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-400 shadow-xl hover:shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group-hover:bg-emerald-600"
      >
        {/* Animated Circular Progress Stroke */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-emerald-950/40 fill-none"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-emerald-400 fill-none transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Animated Arrow Icon */}
        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 animate-bounce-subtle z-10" />
      </button>
    </div>
  );
}
