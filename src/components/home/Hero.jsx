import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=80",
    quote: "एक मजबूत भारत का निर्माण",
    quoteEn: "Building a Stronger India",
    sub: "Committed to the nation's progress, security, and unity",
    tag: "Nation First",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1600&q=80",
    quote: "विकास ही हमारा संकल्प",
    quoteEn: "Development is Our Resolve",
    sub: "Working tirelessly for every citizen of this great land",
    tag: "Development",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80",
    quote: "सुरक्षित भारत, समृद्ध भारत",
    quoteEn: "Secure India, Prosperous India",
    sub: "Security and prosperity go hand in hand for Bharat",
    tag: "Security",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1600&q=80",
    quote: "जन सेवा ही ईश्वर सेवा",
    quoteEn: "Service to People is Service to God",
    sub: "Every action dedicated to the welfare of 140 crore Indians",
    tag: "Service",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState("next");

  const goTo = useCallback(
    (index, direction = "next") => {
      if (animating) return;
      setDir(direction);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <style>{`
        .slide-tag::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: #E8541A;
          border-radius: 1px;
        }
        .slide-tag::after {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: #138808;
          border-radius: 1px;
        }

        .btn-primary {
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }

        .arrow-clip {
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }

        @keyframes heroProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .progress-bar {
          animation: heroProgress 5.5s linear forwards;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 0.8; transform: scaleY(0.6); }
        }
        .scroll-pulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden bg-[#080F22]"
        style={{ height: "100svh", minHeight: "580px" }}
      >
        {/* ── SLIDES ── */}
        {slides.map((slide, i) => {
          const isActive = i === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out
                ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              {/* Background image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.quoteEn}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(0.45)" }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(105deg, rgba(8,15,34,0.82) 0%, rgba(13,27,62,0.6) 40%, rgba(8,15,34,0.85) 100%)",
                }}
              />

              {/* Slide content
                  FIX: items-center on all sizes, pt accounts for navbar (~64px) + breathing room
                  Mobile: px-5, pt-20 (80px for navbar), pb-24 (space for dots)
                  Desktop: px-[5%], pt-[72px], pb-16
              */}
              <div className="absolute inset-0 flex items-center justify-start px-5 pt-20 pb-24 md:px-[5%] md:pt-[72px] md:pb-16">
                <div
                  className="w-full max-w-[640px] transition-all duration-[600ms] ease-in-out mb-15"
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating
                      ? dir === "next"
                        ? "translateX(-40px)"
                        : "translateX(40px)"
                      : "translateX(0)",
                  }}
                >
                  {/* Tag */}
                  <div
                    className="slide-tag inline-flex items-center gap-2 mb-4 md:mb-6
                      text-[0.72rem] font-bold tracking-[0.22em] uppercase text-[#FF9933]"
                    style={{ fontFamily: "'Playfair', serif" }}
                  >
                    {slide.tag}
                  </div>

                  {/* Hindi */}
                  <div
                    className="text-[clamp(1.2rem,3.5vw,2.4rem)] text-[#FF9933] leading-[1.4] mb-2 font-normal"
                    style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
                  >
                    {slide.quote}
                  </div>

                  {/* English heading */}
                  <h1
                    className="text-[clamp(1.8rem,5.5vw,4.2rem)] font-black text-[#FDFAF5]
                      leading-[1.1] tracking-[-0.01em] mb-4 md:mb-6
                      [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {slide.quoteEn.split(" ").map((w, wi) =>
                      wi === 1 ? (
                        <em key={wi} className="text-[#F4712E] not-italic italic">
                          {w}{" "}
                        </em>
                      ) : (
                        `${w} `
                      )
                    )}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="text-[clamp(0.9rem,1.8vw,1.25rem)] text-[#FDFAF5]/70
                      leading-[1.65] max-w-[480px] mb-7 md:mb-10 tracking-[0.02em]"
                    style={{ fontFamily: "'Playfair', serif" }}
                  >
                    {slide.sub}
                  </p>

                  {/* CTA buttons */}
                  <div className="flex gap-3 md:gap-4 flex-wrap">
                    <a
                      href="#about"
                      className="btn-primary inline-block text-[0.78rem] md:text-[0.82rem] font-bold tracking-[0.14em] uppercase
                        no-underline text-[#FDFAF5] bg-[#E8541A] border-none px-6 md:px-8 py-3 md:py-[0.85rem] cursor-pointer
                        transition-all duration-[250ms] ease-in-out
                        hover:bg-[#F4712E] hover:-translate-y-[2px]"
                      style={{ fontFamily: "'Playfair', serif" }}
                    >
                      Know More
                    </a>
                    <a
                      href="#contact-us"
                      className="inline-block text-[0.78rem] md:text-[0.82rem] font-bold tracking-[0.14em] uppercase
                        no-underline text-[#FF9933] bg-transparent border border-[#C9A84C]/45
                        px-6 md:px-8 py-3 md:py-[0.85rem] cursor-pointer
                        transition-all duration-[250ms] ease-in-out
                        hover:bg-[#E8541A]/10 hover:border-[#E8541A] hover:text-[#E8541A] hover:-translate-y-[2px]"
                      style={{ fontFamily: "'Playfair', serif" }}
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── PREV ARROW ──
            FIX: moved to bottom area on mobile so it doesn't overlap content
            Mobile: bottom-[72px], small size
            Desktop: top-1/2 center as before
        */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="arrow-clip absolute z-20
            bottom-[68px] left-4 w-[38px] h-[38px]
            md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 md:w-[52px] md:h-[52px]
            flex items-center justify-center
            bg-[#0D1B3E]/65 border border-[#C9A84C]/30 text-[#FDFAF5]
            cursor-pointer backdrop-blur-[8px]
            transition-all duration-[250ms] ease-in-out
            hover:bg-[#E8541A] hover:border-[#E8541A] hover:scale-[1.08]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* ── NEXT ARROW ── */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="arrow-clip absolute z-20
            bottom-[68px] right-4 w-[38px] h-[38px]
            md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-6 md:w-[52px] md:h-[52px]
            flex items-center justify-center
            bg-[#0D1B3E]/65 border border-[#C9A84C]/30 text-[#FDFAF5]
            cursor-pointer backdrop-blur-[8px]
            transition-all duration-[250ms] ease-in-out
            hover:bg-[#E8541A] hover:border-[#E8541A] hover:scale-[1.08]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>

        {/* ── DOTS ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-[10px] z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full border-none cursor-pointer transition-all duration-300
                ${i === current
                  ? "w-[10px] h-[10px] bg-[#E8541A] scale-[1.35] shadow-[0_0_8px_rgba(232,84,26,0.5)]"
                  : "w-[8px] h-[8px] bg-[#FDFAF5]/30 hover:bg-[#FDFAF5]/60"
                }`}
            />
          ))}
        </div>

        {/* ── PROGRESS BAR ── */}
        <div
          key={current}
          className="progress-bar absolute bottom-0 left-0 h-[3px] z-20"
          style={{
            background: "linear-gradient(90deg, #E8541A, #C9A84C, #138808)",
          }}
        />

        {/* ── SCROLL HINT (desktop only) ── */}
        <div className="absolute bottom-10 right-8 flex-col items-center gap-[6px] z-20 hidden md:flex">
          <div
            className="scroll-pulse w-[1px] h-10"
            style={{ background: "linear-gradient(to bottom, rgba(253,250,245,0.3), transparent)" }}
          />
          <span
            className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#FDFAF5]/35"
            style={{ writingMode: "vertical-rl", fontFamily: "'Playfair', serif" }}
          >
            Scroll
          </span>
        </div>
      </section>
    </>
  );
}