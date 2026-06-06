export default function AboutSection() {
  return (
    <>
      <section id="about" className="relative bg-[#F7F2E8] overflow-hidden py-24">

        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-0 left-0 w-[40%] h-[50%] rounded-full opacity-60"
            style={{ background: "radial-gradient(circle, rgba(232,84,26,0.05) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[40%] h-[50%] rounded-full opacity-60"
            style={{ background: "radial-gradient(circle, rgba(13,27,62,0.06) 0%, transparent 70%)" }}
          />
        </div>

        {/* Main grid */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16
          grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── IMAGE COL (LEFT) ── */}
          <div className="relative flex justify-center lg:justify-start">

            {/* Frame wrapper — relative so corner divs can be absolute */}
            <div className="relative w-full max-w-[480px]">

              {/* Gold corner — top right (replaces ::before) */}
              <div className="absolute -top-3 -right-3 w-16 h-16 z-10
                border-t-[3px] border-r-[3px] border-[#C9A84C]" />

              {/* Saffron corner — bottom left (replaces ::after) */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 z-10
                border-b-[3px] border-l-[3px] border-[#E8541A]" />

              {/* Tricolor left bar */}
              <div
                className="absolute -left-5 top-[10%] bottom-[10%] w-[5px] rounded z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, #FF9933 0%, #FF9933 33.33%, #FDFAF5 33.33%, #FDFAF5 66.66%, #138808 66.66%, #138808 100%)",
                }}
              />

              {/* Shadow block behind image */}
              <div className="absolute bottom-[-16px] right-[-16px] left-4 top-4
                bg-[#0D1B3E] rounded-sm z-0" />

              {/* Image container */}
              <div className="relative z-[1] overflow-hidden rounded-sm group">
                {/* Replace src with actual politician image */}
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                  alt="About the Leader"
                  className="w-full object-cover object-top transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.04]"
                  style={{ height: "520px", filter: "saturate(0.9)" }}
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-28
                  bg-gradient-to-t from-[#0D1B3E]/60 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-8 -right-4 z-20 bg-[#0D1B3E] px-5 py-4
                border-l-4 border-[#E8541A] shadow-[0_8px_32px_rgba(13,27,62,0.4)]">
                <div
                  className="text-[2.5rem] font-black text-[#F4712E] leading-none"
                >
                  35+
                </div>
                <div
                  className="text-[0.62rem] font-bold tracking-[0.18em] uppercase
                    text-[#E2C06A] mt-1 leading-snug"
                >
                  Years of<br />Public Service
                </div>
              </div>

            </div>
          </div>

          {/* ── CONTENT COL (RIGHT) ── */}
          <div className="lg:pl-4">

            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#E8541A] rounded" />
              <span className="text-[0.7rem] font-black tracking-[0.28em] uppercase text-[#E8541A]">
                About the Leader
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-black
                text-[#0D1B3E] leading-[1.15] mb-3"
              style={{ letterSpacing: "-0.01em" }}
            >
              A Man of <span className="text-[#E8541A] italic">Conviction,</span>
              <br />
              A Voice of the People
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="w-12 h-[2px] bg-[#E8541A] rounded" />
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <div className="w-20 h-[1px] bg-[#EDE5D0] rounded" />
            </div>

            {/* Quote block */}
            <div className="border-l-[3px] border-[#C9A84C] pl-5 py-1 mb-5 bg-[#C9A84C]/[0.07]">
              <p
                className="text-[1.15rem] text-[#162547] leading-relaxed italic"
              >
                "Governance is not a privilege — it is a sacred responsibility to every citizen of this great nation."
              </p>
            </div>

            {/* Body paragraphs */}
            <p
              className="text-[1.05rem] text-[#3D3526] leading-[1.85] mb-4"
            >
              Hailed as{" "}
              <strong className="font-semibold text-[#0D1B3E]">the face of new-age Indian politics</strong>,
              driven by accountability and unwavering dedication, he has always been a fast achiever when it
              comes to winning people's mandate by{" "}
              <strong className="font-semibold text-[#0D1B3E]">delivering tangible results</strong>.
            </p>
            <p
              className="text-[1.05rem] text-[#3D3526] leading-[1.85]"
            >
              Joining public life at an early age, he translated his{" "}
              <strong className="font-semibold text-[#0D1B3E]">youthful energy and vision</strong> into
              people's trust and love — rising from a local councilor to one of the most respected leaders
              in the country.
            </p>

            {/* Stats row */}
            <div className="flex gap-0 mt-7 mb-2 py-6 border-t border-b border-[#EDE5D0]">
              {[
                { num: "35+",  label: "Years in\nPolitics"  },
                { num: "120+", label: "Projects\nDelivered" },
                { num: "5×",   label: "Times\nElected"      },
              ].map((stat, i) => (
                <div key={i} className="flex flex-1 items-center">
                  <div className="flex-1 text-center px-2">
                    <div
                      className="text-[2rem] font-black text-[#E8541A] leading-none"
                    >
                      {stat.num}
                    </div>
                    <div
                      className="text-[0.62rem] font-bold tracking-[0.14em] uppercase
                        text-[#7A6E5F] mt-[5px] whitespace-pre-line leading-snug"
                    >
                      {stat.label}
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="w-[1px] h-12 bg-[#EDE5D0] flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-7">

              {/* Primary btn — clip-path via inline style (only CSS property Tailwind can't do) */}
              <a
                href="#biography"
                className="inline-flex items-center gap-3
                  bg-[#0D1B3E] hover:bg-[#E8541A]
                  text-[#FDFAF5] text-[0.78rem] font-bold tracking-[0.16em] uppercase
                  px-7 py-[14px] no-underline
                  transition-all duration-[250ms] ease-in-out hover:-translate-y-[2px]
                  group"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                Full Biography
                <svg
                  width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="transition-transform duration-[250ms] group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* Text link btn */}
              <a
                href="#achievements"
                className="inline-flex items-center gap-2
                  text-[0.78rem] font-bold tracking-[0.14em] uppercase
                  text-[#E8541A] no-underline
                  border-b border-transparent hover:border-[#E8541A] pb-[2px]
                  transition-all duration-[250ms] ease-in-out
                  group"
              >
                View Achievements
                <svg
                  width="13" height="13" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="transition-transform duration-[250ms] group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}