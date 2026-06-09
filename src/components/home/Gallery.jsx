import { useState, useEffect, useRef } from "react";

const galleryItems = [
  { id:1, type:"video", thumbnail:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80", title:"Public Rally Address",  location:"Ahmedabad", date:"Oct 2023" },
  { id:2, type:"photo", thumbnail:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", title:"Cooperative Summit",    location:"New Delhi", date:"2023"     },
  { id:3, type:"video", thumbnail:"https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80", title:"National Conference",   location:"Mumbai",    date:"Sep 2023" },
  { id:4, type:"photo", thumbnail:"https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80", title:"Cultural Program",      location:"Varanasi",  date:"Aug 2023" },
  { id:5, type:"video", thumbnail:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80", title:"Press Conference",      location:"New Delhi", date:"Jul 2023" },
  { id:6, type:"photo", thumbnail:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80", title:"Jan Sampark Rally",     location:"Gandhinagar",date:"Jun 2023"},
  { id:7, type:"video", thumbnail:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", title:"Youth Convention",      location:"Jaipur",    date:"May 2023" },
  { id:8, type:"photo", thumbnail:"https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80", title:"Farmers Meet",          location:"Lucknow",   date:"Apr 2023" },
];

// #fc8814 = orange | #e8e7e6 = grey | #FFFFFF = white | #1a1a1a = dark

function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: "rgba(26,26,26,0.95)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center
          bg-white/10 hover:bg-[#fc8814] text-white rounded-full
          transition-all duration-200 z-10"
        aria-label="Close"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2
          w-12 h-12 flex items-center justify-center
          bg-white/10 hover:bg-[#fc8814] text-white
          transition-all duration-200 z-10"
        style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2
          w-12 h-12 flex items-center justify-center
          bg-white/10 hover:bg-[#fc8814] text-white
          transition-all duration-200 z-10"
        style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative max-w-4xl w-full mx-4 md:mx-16" onClick={(e) => e.stopPropagation()}>
        <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "16/9" }}>
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(26,26,26,0.4)" }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#fc8814]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-[1.1rem] font-bold text-white">{item.title}</h3>
            <p className="text-[0.78rem] text-white/50 mt-1">{item.location} · {item.date}</p>
          </div>
          <span
            className={`text-[0.6rem] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full
              ${item.type === "video"
                ? "bg-[#fc8814] text-white"
                : "bg-[#e8e7e6] text-[#1a1a1a]"}`}
          >
            {item.type}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox,    setLightbox]    = useState(null);
  const [animating,   setAnimating]   = useState(false);
  const thumbRef = useRef(null);

  const totalPairs = Math.ceil(galleryItems.length / 2);

  const goTo = (pairIndex) => {
    if (animating || pairIndex === activeIndex) return;
    setAnimating(true);
    setTimeout(() => { setActiveIndex(pairIndex); setAnimating(false); }, 350);
  };

  const goPrev = () => goTo((activeIndex - 1 + totalPairs) % totalPairs);
  const goNext = () => goTo((activeIndex + 1) % totalPairs);

  const leftItem  = galleryItems[activeIndex * 2];
  const rightItem = galleryItems[activeIndex * 2 + 1];

  const openLightbox  = (idx) => setLightbox(idx);
  const closeLightbox = ()    => setLightbox(null);
  const lbPrev = () => setLightbox((p) => (p - 1 + galleryItems.length) % galleryItems.length);
  const lbNext = () => setLightbox((p) => (p + 1) % galleryItems.length);

  useEffect(() => {
    if (thumbRef.current) {
      const active = thumbRef.current.querySelector(`[data-active="true"]`);
      if (active) active.scrollIntoView({ behavior:"smooth", inline:"center", block:"nearest" });
    }
  }, [activeIndex]);

  return (
    <>
      {lightbox !== null && (
        <Lightbox item={galleryItems[lightbox]} onClose={closeLightbox} onPrev={lbPrev} onNext={lbNext} />
      )}

      <section id="gallery" className="relative bg-[#FFFFFF] overflow-hidden py-16 md:py-20">

        {/* Subtle dot texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:"radial-gradient(circle, #e8e7e6 1px, transparent 1px)", backgroundSize:"32px 32px" }} />

        {/* Orange blob top-left */}
        <div className="pointer-events-none absolute top-0 left-0 w-[35%] h-[50%] rounded-full opacity-40"
          style={{ background:"radial-gradient(circle, rgba(252,136,20,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">

          {/* ── HEADER ── */}
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#fc8814] rounded" />
                <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#fc8814]">
                  Media Gallery
                </span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-black text-[#1a1a1a] leading-[1.1]">
                Our <em className="text-[#fc8814] not-italic italic">Gallery</em>
              </h2>
            </div>

            {/* Counter + arrows */}
            <div className="flex items-center gap-3">
              <span className="text-[0.75rem] font-bold text-[#1a1a1a]/35 tracking-widest hidden sm:block">
                {activeIndex + 1} / {totalPairs}
              </span>
              {[["prev", goPrev, "15 18 9 12 15 6"], ["next", goNext, "9 6 15 12 9 18"]].map(([key, fn, pts]) => (
                <button key={key} onClick={fn}
                  className="w-9 h-9 flex items-center justify-center border border-[#e8e7e6]
                    text-[#1a1a1a]/50 hover:bg-[#fc8814] hover:border-[#fc8814] hover:text-white
                    transition-all duration-200"
                  style={{ clipPath:"polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}
                  aria-label={key}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points={pts} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* ── MAIN FEATURED PAIR ── */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5 transition-opacity duration-[350ms]"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {[leftItem, rightItem].filter(Boolean).map((item, idx) => {
              const globalIdx = activeIndex * 2 + idx;
              return (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-sm cursor-pointer group"
                  style={{ aspectRatio:"16/10" }}
                  onClick={() => openLightbox(globalIdx)}
                >
                  <img src={item.thumbnail} alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                    style={{ background:"linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.15) 60%, transparent 100%)" }} />

                  {/* Orange tint on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background:"linear-gradient(to top, rgba(252,136,20,0.12) 0%, transparent 60%)" }} />

                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[0.58rem] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full
                        ${item.type === "video"
                          ? "bg-[#fc8814] text-white"
                          : "bg-[#e8e7e6] text-[#1a1a1a]"}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Play icon for video */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center
                        bg-white/20 backdrop-blur-sm border border-white/30
                        transition-all duration-300 group-hover:bg-[#fc8814] group-hover:border-[#fc8814] group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-[1rem] md:text-[1.1rem] font-bold text-white leading-tight mb-[2px]">
                      {item.title}
                    </h3>
                    <p className="text-[0.72rem] text-white/55">{item.location} · {item.date}</p>
                  </div>

                  {/* Orange bottom border on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fc8814]
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>

          {/* ── DOT INDICATORS ── */}
          <div className="flex items-center justify-center gap-[8px] mt-5">
            {Array.from({ length: totalPairs }).map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Go to page ${i + 1}`}
                className={`rounded-full border-none cursor-pointer transition-all duration-300
                  ${i === activeIndex
                    ? "w-[28px] h-[6px] rounded-[3px] bg-[#fc8814]"
                    : "w-[6px] h-[6px] bg-[#1a1a1a]/15 hover:bg-[#1a1a1a]/35"}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}