import { useState, useEffect, useRef, useCallback } from "react";

const milestones = [
  {
    year: "1964",
    tag: "Early Life",
    heading: "Birth in Mumbai",
    sub: "The Beginning",
    body: "Born on October 22, 1964 in Mumbai to Gujarati parents Mrs. Kusumben and Mr. Anilchandra Shah. His early years were shaped by the values of discipline, dedication, and service to the nation.",
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=80",
  },
  {
    year: "1980",
    tag: "Political Entry",
    heading: "ABVP Activism",
    sub: "Student Leader",
    body: "Joined the Akhil Bharatiya Vidyarthi Parishad (ABVP), beginning his journey as a passionate student activist. This period forged his leadership qualities and ideological foundation.",
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&q=80",
  },
  {
    year: "1982",
    tag: "Family",
    heading: "A New Chapter",
    sub: "Personal Milestone",
    body: "Married Sonal Shah, with whom he built a family rooted in service and dedication. The family values instilled during this period continued to inspire his public life.",
    img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=900&q=80",
  },
  {
    year: "1987",
    tag: "RSS & BJP",
    heading: "Party Organizer",
    sub: "Ground Up Leadership",
    body: "Joined the RSS and rapidly rose through the BJP ranks in Gujarat. His organizational acumen and grassroots connect established him as a formidable political strategist.",
    img: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=900&q=80",
  },
  {
    year: "1995",
    tag: "Gujarat",
    heading: "State Minister",
    sub: "Rise in Gujarat",
    body: "Appointed as Minister of State for Home in Gujarat — a role that showcased his administrative capabilities in internal security and governance at the state level.",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
  },
  {
    year: "2014",
    tag: "Parliament",
    heading: "BJP National President",
    sub: "National Stage",
    body: "Elected to the Rajya Sabha and appointed BJP National President. Under his leadership, the party achieved a historic mandate in the 2014 general elections.",
    img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=900&q=80",
  },
  {
    year: "2019",
    tag: "Cabinet",
    heading: "Home Minister of India",
    sub: "Union Cabinet",
    body: "Sworn in as the Union Home Minister of India, taking charge of internal security, border management, and driving landmark legislation including the historic CAA.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  },
];

// #fc8814 = primary orange | #e8e7e6 = light grey | #FFFFFF = white | #1a1a1a = dark
const TAG_COLORS = {
  "Early Life":      { dot: "#fc8814", text: "#e07710" },
  "Political Entry": { dot: "#1a1a1a", text: "#1a1a1a" },
  "Family":          { dot: "#fc8814", text: "#e07710" },
  "RSS & BJP":       { dot: "#fc8814", text: "#e07710" },
  "Gujarat":         { dot: "#1a1a1a", text: "#1a1a1a" },
  "Parliament":      { dot: "#fc8814", text: "#e07710" },
  "Cabinet":         { dot: "#1a1a1a", text: "#1a1a1a" },
};

export default function JourneySection() {
  const [current, setCurrent]         = useState(0);
  const [animDir, setAnimDir]         = useState("next");
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);
  const dotRefs  = useRef([]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimDir("next");
      setCurrent((c) => {
        const n = (c + 1) % milestones.length;
        setProgressKey((k) => k + 1);
        return n;
      });
    }, 4500);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = (idx) => {
    if (idx === current) return;
    setAnimDir(idx > current ? "next" : "prev");
    setCurrent(idx);
    setProgressKey((k) => k + 1);
    startTimer();
  };

  const nav = (d) => goTo((current + d + milestones.length) % milestones.length);

  const m  = milestones[current];
  const tc = TAG_COLORS[m.tag] || TAG_COLORS["Early Life"];

  return (
    <>
      <style>{`
        @keyframes prog {
          from { width: 0% }
          to   { width: 100% }
        }
        .j-prog { animation: prog 4.5s linear forwards; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-next { animation: fadeUp   0.38s ease both; }
        .anim-prev { animation: fadeDown 0.38s ease both; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="bg-[#FFFFFF] py-10 sm:py-14 md:py-20 relative overflow-hidden">

        {/* Subtle bg blob */}
        <div className="pointer-events-none absolute top-0 left-0 w-[40%] h-[50%] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(252,136,20,0.06) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[35%] h-[45%] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(232,231,230,0.6) 0%, transparent 70%)" }} />

        <div
          className="relative z-10 w-full mx-auto"
          style={{ maxWidth: 1240, paddingLeft: "clamp(1rem,4vw,3.5rem)", paddingRight: "clamp(1rem,4vw,3.5rem)" }}
        >

          {/* ── HEADER ── */}
          <div className="flex items-end justify-between mb-8 sm:mb-12 md:mb-14 gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="block w-5 h-[2px] rounded bg-[#fc8814] flex-shrink-0" />
                <span className="text-[0.58rem] sm:text-[0.6rem] font-black tracking-[0.28em] uppercase text-[#fc8814] whitespace-nowrap">
                  A Life of Service
                </span>
                <span className="block w-5 h-[2px] rounded bg-[#e8e7e6] flex-shrink-0" />
              </div>
              <h2
                className="font-black text-[#1a1a1a] leading-none"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3.4rem)" }}
              >
                The&nbsp;<span className="italic text-[#fc8814]">Journey</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="hidden sm:block text-[0.65rem] font-bold tracking-widest text-[#1a1a1a]/30 mr-1">
                {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(milestones.length).padStart(2, "0")}
              </span>
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  onClick={() => nav(d)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#e8e7e6] flex items-center justify-center
                    text-[#1a1a1a]/40 hover:bg-[#fc8814] hover:border-[#fc8814] hover:text-white
                    transition-all duration-200 text-base"
                >
                  {d === -1 ? "←" : "→"}
                </button>
              ))}
            </div>
          </div>

          {/* ── MAIN CARD ── */}
          <div
            className="flex flex-col lg:flex-row rounded-xl overflow-hidden border border-[#e8e7e6]"
            style={{ boxShadow: "0 8px 50px rgba(252,136,20,0.08)" }}
          >

            {/* IMAGE SIDE */}
            <div
              className="relative flex-shrink-0 w-full lg:w-1/2 overflow-hidden"
              style={{ height: "clamp(220px, 40vw, 420px)" }}
            >
              <img
                key={current}
                src={m.img}
                alt={m.heading}
                className="absolute inset-0 w-full h-full object-cover object-center
                  transition-transform duration-700 hover:scale-[1.04]"
              />
              {/* Overlay — dark with orange tint */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(140deg, rgba(26,26,26,0.72) 0%, rgba(252,136,20,0.12) 55%, transparent 100%)" }}
              />

              {/* Year */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span
                  key={`yr-${current}`}
                  className={`font-black text-white leading-none drop-shadow-lg ${animDir === "next" ? "anim-next" : "anim-prev"}`}
                  style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
                >
                  {m.year}
                </span>
              </div>

              {/* Tag badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span
                  key={`tag-${current}`}
                  className={`inline-block text-[0.58rem] sm:text-[0.6rem] font-black tracking-[0.2em] uppercase
                    px-3 py-[5px] rounded-full ${animDir === "next" ? "anim-next" : "anim-prev"}`}
                  style={{ background: "#fc8814", color: "#FFFFFF", animationDelay: "0.05s" }}
                >
                  {m.tag}
                </span>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                <div
                  key={progressKey}
                  className="j-prog h-full"
                  style={{ background: "linear-gradient(90deg, #fc8814, #e8e7e6, #fc8814)" }}
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="flex-1 bg-[#FFFFFF] flex flex-col justify-between p-6 sm:p-8 md:p-10">

              <div
                key={`content-${current}`}
                className={animDir === "next" ? "anim-next" : "anim-prev"}
              >
                <p
                  className="text-[0.58rem] sm:text-[0.62rem] font-black tracking-[0.26em] uppercase mb-3 text-[#fc8814]"
                >
                  {m.sub}
                </p>

                <h3
                  className="font-black text-[#1a1a1a] leading-[1.12] mb-4"
                  style={{ fontSize: "clamp(1.35rem, 3.5vw, 2.2rem)" }}
                >
                  {m.heading}
                </h3>

                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 rounded bg-[#fc8814]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#fc8814]/40" />
                  <div className="h-px flex-1 bg-[#e8e7e6] rounded" />
                </div>

                <p className="text-[0.88rem] sm:text-[0.95rem] text-[#1a1a1a]/55 leading-[1.85]">
                  {m.body}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#e8e7e6]">
                {/* Pill dots */}
                <div className="flex items-center gap-[6px] flex-wrap">
                  {milestones.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width:      i === current ? 20 : 6,
                        height:     6,
                        background: i === current ? "#fc8814" : "rgba(26,26,26,0.12)",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>

                <button
                  className="group flex items-center gap-2 text-[0.68rem] sm:text-[0.72rem]
                    font-black tracking-[0.14em] uppercase text-[#fc8814]
                    hover:text-[#e07710] transition-colors duration-200 flex-shrink-0 ml-4"
                >
                  Read More
                  <svg
                    width="11" height="11" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── YEAR STRIP ── */}
          <div className="mt-6 sm:mt-8 relative">
            {/* Track line */}
            <div className="absolute top-[9px] left-0 right-0 h-px bg-[#e8e7e6] z-0" />

            <div className="flex items-start overflow-x-auto hide-scroll relative z-10 p-2">
              {milestones.map((ms, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={ms.year}
                    ref={(el) => (dotRefs.current[i] = el)}
                    onClick={() => goTo(i)}
                    className="flex flex-col items-center gap-1.5 transition-all duration-200 flex-shrink-0"
                    style={{ width: `${100 / milestones.length}%`, minWidth: 72 }}
                  >
                    {/* Dot */}
                    <div
                      className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor:     isActive ? "#fc8814" : "#e8e7e6",
                        backgroundColor: isActive ? "#fc8814" : "#FFFFFF",
                        boxShadow:       isActive ? "0 0 0 3px rgba(252,136,20,0.22)" : "none",
                        transform:       isActive ? "scale(1.2)" : "scale(1)",
                      }}
                    >
                      {isActive && <span className="w-[5px] h-[5px] rounded-full bg-white" />}
                    </div>

                    <span
                      className="text-[0.65rem] font-black tracking-wider transition-colors duration-200"
                      style={{ color: isActive ? "#fc8814" : "rgba(26,26,26,0.28)" }}
                    >
                      {ms.year}
                    </span>

                    <span
                      className="text-[0.58rem] font-medium leading-tight text-center px-1
                        transition-colors duration-200 hidden sm:block"
                      style={{ color: isActive ? "#1a1a1a" : "rgba(26,26,26,0.28)" }}
                    >
                      {ms.heading}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}