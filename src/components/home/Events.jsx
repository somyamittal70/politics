import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Hon'ble Minister inaugurated and dedicated several key development projects undertaken by AMC and AUDA in Ahmedabad, aimed at enhancing urban infrastructure, improving public amenities, and promoting sustainable growth across the city.",
    date: "Sep 30, 2023",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
    link: "#",
    tag: "Inauguration",
  },
  {
    id: 2,
    title: "Hon'ble Minister inaugurated and dedicated several key development projects undertaken by AMC and AUDA in Ahmedabad, aimed at enhancing urban infrastructure, improving public amenities, and promoting sustainable growth across the city.",
    date: "Sep 30, 2023",
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=500&q=80",
    link: "#",
    tag: "Development",
  },
  {
    id: 3,
    title: "HM chairs high-level meeting on internal security preparedness",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80",
    link: "#",
    tag: "Security",
  },
  {
    id: 4,
    title: "HM addresses National Conference on Cooperative Movement",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=500&q=80",
    link: "#",
    tag: "Conference",
  },
  {
    id: 5,
    title: "HM chairs high-level meeting on internal security preparedness",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80",
    link: "#",
    tag: "Security",
  },
];

const tagColors = {
  Inauguration: "bg-saffron text-white",
  Development: "bg-igreen text-white",
  Security: "bg-navy text-white",
  Conference: "bg-navy text-white",
};

export default function EventsSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ background: "#F7F2E8" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <p className="text-navy/60 text-xs font-bold uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
              <span className="w-8 h-px bg-navy/40 inline-block" />
              What's Happening
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-navy leading-none">
              Events &amp; <span className="italic text-saffron-dark">Activities</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto flex-shrink-0">
            <a
              href="#"
              className="text-navy/70 hover:text-navy text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5 group"
            >
              View All
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <span className="w-px h-4 bg-navy/30" />
            <button className="bg-saffron hover:bg-saffron-dark text-black text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md transition-all duration-200 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
              </span>
              Watch Live
            </button>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-4 sm:gap-5">

          {/* ── Event Cards ── */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {events.slice(0, 2).map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                isActive={active === i}
                onEnter={() => setActive(i)}
                onLeave={() => setActive(null)}
              />
            ))}
          </div>

          {/* ── Live Panel ── */}
          <LivePanel />
        </div>

        {/* ── Upcoming strip ── */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-navy/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <span className="bg-navy text-black text-[15px] sm:text-[16px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 w-fit">
              Upcoming
            </span>
            <div className="flex items-start sm:items-center gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {events.slice(2).map((e) => (
                <a
                  key={e.id}
                  href={e.link}
                  className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-navy/20 group-hover:ring-navy/50 transition-all">
                    <img src={e.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="max-w-[160px] sm:max-w-[200px]">
                    <p className="text-navy/80 group-hover:text-navy text-xs sm:text-sm font-semibold leading-snug transition-colors line-clamp-2">
                      {e.title}
                    </p>
                    <p className="text-navy/50 text-[10px] sm:text-[11px] mt-0.5">{e.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function EventCard({ event, isActive, onEnter, onLeave }) {
  const tag = tagColors[event.tag] || "bg-navy text-white";

  return (
    <a
      href={event.link}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`group flex overflow-hidden rounded-2xl bg-white transition-all duration-300 cursor-pointer shadow-sm ${
        isActive
          ? "shadow-xl shadow-navy/20 -translate-y-0.5"
          : "hover:shadow-lg hover:shadow-navy/15"
      }`}
    >
      {/* Thumbnail */}
      <div className="relative w-[120px] xs:w-[150px] sm:w-[200px] md:w-[220px] flex-shrink-0 overflow-hidden" style={{ minHeight: 160 }}>
        <img
          src={event.image}
          alt={event.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
            isActive ? "scale-110" : "scale-100"
          }`}
        />
        <span
          className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 sm:py-1 rounded-full ${tag}`}
        >
          {event.tag}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between p-3 sm:p-4 md:p-5 min-w-0 flex-1 bg-white">
        <p
          className={`font-bold text-sm sm:text-base leading-snug transition-colors duration-200 line-clamp-3 sm:line-clamp-4 ${
            isActive ? "text-saffron-dark" : "text-navy group-hover:text-saffron-dark"
          }`}
        >
          {event.title}
        </p>

        <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 sm:gap-1.5 text-navy/50 text-[10px] sm:text-xs">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="hidden xs:inline">{event.date}</span>
            <span className="xs:hidden">{event.date.split(",")[0]}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Share — hidden on very small screens */}
            <button
              onClick={(e) => e.preventDefault()}
              className="hidden xs:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-200 hover:border-saffron items-center justify-center text-navy/30 hover:text-saffron transition-all duration-200"
            >
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            {/* Arrow */}
            <span
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive ? "bg-saffron" : "bg-navy/10 group-hover:bg-saffron"
              }`}
            >
              <svg
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors duration-200 ${
                  isActive ? "text-white" : "text-navy group-hover:text-white"
                }`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function LivePanel() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-navy shadow-xl shadow-navy/30 flex flex-col min-h-[260px] sm:min-h-[300px] lg:min-h-0">

      {/* BG image */}
      <img
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between">
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Badge */}
          <div className="flex w-fit items-center gap-2 border border-white/50 bg-gold/10 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
              Live Streaming
            </span>
          </div>

          <p className="text-white/80 text-sm sm:text-base">
            Check this space for live coverage of programs
          </p>

          <div>
            <p className="text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-1">
              Hon. Minister of Home &amp; Cooperation
            </p>
            <h3 className="text-white font-black text-3xl sm:text-4xl leading-tight">
              Shri <span className="text-gold">Amit Shah</span>
            </h3>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Live Soon
            </span>
          </div>
          <button className="bg-saffron hover:bg-saffron-light text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 shadow-lg">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}