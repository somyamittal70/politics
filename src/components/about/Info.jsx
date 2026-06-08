import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const details = [
  { label: "Full Name",     value: "Amit Anil Chandra Shah" },
  { label: "Date of Birth", value: "22 October 1964" },
  { label: "Place of Birth",value: "Mumbai, Maharashtra" },
  { label: "Hometown",      value: "Mansa, Gujarat" },
  { label: "Education",     value: "B.Sc. Biochemistry, Gujarat University" },
  { label: "Spouse",        value: "Sonal Shah" },
  { label: "Children",      value: "Jay Shah (Son)" },
  { label: "Languages",     value: "Hindi, Gujarati, English" },
  { label: "Religion",      value: "Hindu" },
  { label: "Constituency",  value: "Gandhinagar, Gujarat" },
];

const timeline = [
  { year: "1964", title: "Born in Mumbai",      desc: "Born to Gujarati parents in Mumbai. Raised with deep-rooted values of discipline and patriotism." },
  { year: "1980", title: "Student Activism",    desc: "Joined ABVP and became an active student leader, building his foundation in public service." },
  { year: "1982", title: "Started Family",      desc: "Married Sonal Shah and began a family life that remained the moral compass of his public journey." },
  { year: "1987", title: "Joined BJP",          desc: "Became a full-time BJP worker and RSS swayamsevak, rising through the grassroots of Indian politics." },
  { year: "1995", title: "First Cabinet Role",  desc: "Became Minister of State for Home, Finance & Prohibition in the Gujarat state government." },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22,1,0.36,1] } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.9, delay, ease: "easeOut" } },
});

function SectionHeader({ label, title, accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "show" : "hidden"}
        className="flex items-center gap-3 mb-3">
        <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
        <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]"
          style={{ fontFamily: "Raleway, sans-serif" }}>{label}</span>
      </motion.div>
      <motion.h2 variants={fadeUp(0.08)} initial="hidden" animate={inView ? "show" : "hidden"}
        className="text-[2.2rem] md:text-[3rem] font-black text-[#0D1B3E] leading-[1.1]"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {title} <em className="text-[#E8541A] not-italic italic">{accent}</em>
      </motion.h2>
    </div>
  );
}

export default function PersonalInfo() {
  const bioRef    = useRef(null);
  const detailRef = useRef(null);
  const tlRef     = useRef(null);

  const bioInView    = useInView(bioRef,    { once: true, margin: "-80px" });
  const detailInView = useInView(detailRef, { once: true, margin: "-80px" });
  const tlInView     = useInView(tlRef,     { once: true, margin: "-80px" });

  return (
    <section id="personal-info" className="relative bg-[#F7F2E8] overflow-hidden py-20 md:py-28">

      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[13rem] font-black
          text-[#0D1B3E]/[0.03] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        LIFE
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── MAGAZINE BIO BLOCK ── */}
        <div ref={bioRef} className="mb-20 md:mb-28">

          {/* Dot-grid texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #0D1B3E 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Giant editorial issue number */}
          <motion.div
            variants={fadeIn(0)}
            initial="hidden"
            animate={bioInView ? "show" : "hidden"}
            className="pointer-events-none select-none absolute top-0 right-0
              text-[10rem] md:text-[16rem] font-black leading-none
              text-[#0D1B3E]/[0.04] pr-4"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.85 }}
          >
            01
          </motion.div>

          {/* Top strip: Category + Rule */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={bioInView ? "show" : "hidden"}
            className="flex items-center gap-4 mb-8"
          >
            <span
              className="text-[0.6rem] font-black tracking-[0.35em] uppercase text-[#FDFAF5] bg-[#E8541A] px-3 py-[5px]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Cover Story
            </span>
            <div className="flex-1 h-[1px] bg-[#0D1B3E]/15" />
            <span
              className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#0D1B3E]/30"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Personal Profile
            </span>
          </motion.div>

          {/* Main editorial grid */}
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-8">

            {/* Tall image — 5 cols */}
            <motion.div
              variants={fadeIn(0.1)}
              initial="hidden"
              animate={bioInView ? "show" : "hidden"}
              className="col-span-12 md:col-span-5 relative"
            >
              {/* Tricolor side bar */}
              <div
                className="absolute -left-4 top-[8%] bottom-[8%] w-[4px] rounded z-10"
                style={{
                  background:
                    "linear-gradient(to bottom,#FF9933 0%,#FF9933 33%,#FDFAF5 33%,#FDFAF5 66%,#138808 66%,#138808 100%)",
                }}
              />

              {/* Shadow offset block */}
              <div className="absolute -bottom-3 -right-3 left-3 top-3 bg-[#E8541A]/20 z-0" />

              {/* Image */}
              <div className="relative z-[1] overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=80"
                  alt="Amit Shah"
                  className="w-full object-cover object-top"
                  style={{ height: "clamp(400px, 60vw, 640px)", filter: "saturate(0.88)" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0D1B3E]/60 to-transparent" />

                {/* Floating "Since 1980" */}
                <motion.div
                  className="absolute bottom-5 left-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={bioInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55, duration: 0.6 }}
                >
                  <span
                    className="text-[0.58rem] font-black tracking-[0.3em] uppercase text-[#FDFAF5]/60 block mb-[2px]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    In Public Life Since
                  </span>
                  <span
                    className="text-[2rem] font-black text-[#E8541A] leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    1980
                  </span>
                </motion.div>
              </div>

              {/* Caption */}
              <motion.p
                variants={fadeUp(0.4)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="text-[0.72rem] text-[#0D1B3E]/40 mt-3 leading-snug italic pl-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Amit Shah — Union Home Minister & Senior BJP Leader. Gandhinagar, Gujarat.
              </motion.p>
            </motion.div>

            {/* Content — 7 cols */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-6">

              {/* Headline block */}
              <motion.div
                variants={fadeUp(0.12)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
              >
                <p
                  className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#E8541A] mb-2"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Who He Is
                </p>
                <h2
                  className="text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] font-black text-[#0D1B3E] leading-[0.95] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  The Man <br />
                  Behind the <em className="text-[#E8541A] italic not-italic">Mission</em>
                </h2>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-[2px] bg-[#E8541A]" />
                  <span
                    className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#0D1B3E]/40"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    Amit Anil Chandra Shah · Born 22 Oct 1964
                  </span>
                </div>
              </motion.div>

              {/* Pull quote */}
              <motion.blockquote
                variants={fadeUp(0.2)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="relative border-l-[3px] border-[#C9A84C] pl-6 py-3 bg-[#C9A84C]/[0.06]"
              >
                <span
                  className="absolute -top-4 -left-1 text-[5rem] leading-none text-[#C9A84C]/25 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </span>
                <p
                  className="text-[1.15rem] md:text-[1.25rem] text-[#162547] leading-relaxed italic relative z-[1]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Born in the city of dreams, shaped by the land of Sardar Patel — Amit Shah's
                  story is that of every dedicated son of the soil.
                </p>
              </motion.blockquote>

              {/* Body copy — 2-col newspaper */}
              <motion.div
                variants={fadeUp(0.28)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="columns-1 sm:columns-2 gap-6"
              >
                <p
                  className="text-[1rem] text-[#3D3526] leading-[1.9] mb-4 break-inside-avoid"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Amit Shah was born on October 22, 1964, in Mumbai, Maharashtra, to a Gujarati family
                  rooted in the Vaishnava tradition. His early education in Ahmedabad instilled in him
                  strong values of discipline, nationalism, and seva.
                </p>
                <p
                  className="text-[1rem] text-[#3D3526] leading-[1.9] break-inside-avoid"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  He completed his graduation in Biochemistry from Gujarat University. Though he began
                  his career in the family's PVC pipe business, the call of public service proved
                  irresistible — channelling his entrepreneurial mindset into building the BJP into one
                  of the most formidable political organisations in the world.
                </p>
              </motion.div>

              {/* Quick-facts ticker strip */}
              <motion.div
                variants={fadeUp(0.36)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className="border-t border-b border-[#0D1B3E]/10 py-4 flex flex-wrap gap-x-8 gap-y-2"
              >
                {[
                  { label: "Hometown",     value: "Mansa, Gujarat" },
                  { label: "Spouse",       value: "Sonal Shah" },
                  { label: "Son",          value: "Jay Shah" },
                  { label: "Languages",    value: "Hindi · Gujarati · English" },
                  { label: "Constituency", value: "Gandhinagar, Gujarat" },
                ].map((f, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span
                      className="text-[0.55rem] font-black tracking-[0.2em] uppercase text-[#E8541A]"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      {f.label}
                    </span>
                    <span
                      className="text-[0.82rem] font-semibold text-[#0D1B3E]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {f.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom rule */}
          <motion.div
            variants={fadeUp(0.45)}
            initial="hidden"
            animate={bioInView ? "show" : "hidden"}
            className="mt-14 flex items-center gap-4"
          >
            <div className="flex-1 h-[1px] bg-[#0D1B3E]/12" />
            <span
              className="text-[0.55rem] font-black tracking-[0.3em] uppercase text-[#0D1B3E]/25"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Personal Story — Section I
            </span>
            <div className="flex-1 h-[1px] bg-[#0D1B3E]/12" />
          </motion.div>
        </div>

        {/* ── DETAILS GRID ── */}
        <div ref={detailRef} className="mb-20 md:mb-28">
          <SectionHeader label="At a Glance" title="Personal" accent="Details" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-10"
            initial="hidden"
            animate={detailInView ? "show" : "hidden"}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          >
            {details.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0)}
                className="group bg-[#FDFAF5] border border-[#EDE5D0] p-5 rounded-sm
                  hover:border-[#E8541A]/40 hover:shadow-[0_8px_24px_rgba(232,84,26,0.08)]
                  transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-[0.58rem] font-black tracking-[0.22em] uppercase text-[#E8541A] mb-2"
                  style={{ fontFamily: "Raleway, sans-serif" }}>{d.label}</p>
                <p className="text-[0.9rem] font-semibold text-[#0D1B3E] leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{d.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── EARLY LIFE TIMELINE ── */}
        <div ref={tlRef}>
          <SectionHeader label="Early Years" title="Life" accent="Timeline" />

          <div className="relative mt-12">
            {/* Vertical line */}
            <motion.div
              className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#EDE5D0] hidden sm:block"
              initial={{ scaleY: 0, originY: 0 }}
              animate={tlInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22,1,0.36,1], delay: 0.2 }}
            />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp(i * 0.12)}
                    initial="hidden"
                    animate={tlInView ? "show" : "hidden"}
                    className={`relative flex flex-col sm:flex-row items-start
                      ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}
                      gap-4 sm:gap-8`}
                  >
                    {/* Card */}
                    <div className={`flex-1 sm:max-w-[calc(50%-2rem)] ${isLeft ? "sm:text-right sm:pr-4" : "sm:text-left sm:pl-4 sm:ml-auto"}`}>
                      <motion.div
                        className="bg-[#FDFAF5] border border-[#EDE5D0] p-5 rounded-sm
                          hover:border-[#E8541A]/30 hover:shadow-[0_6px_20px_rgba(232,84,26,0.07)]
                          transition-all duration-300 group"
                        whileHover={{ y: -3 }}
                      >
                        <span className="text-[0.58rem] font-black tracking-[0.22em] uppercase text-[#E8541A] block mb-1"
                          style={{ fontFamily: "Raleway, sans-serif" }}>{item.year}</span>
                        <h4 className="text-[1.05rem] font-black text-[#0D1B3E] mb-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>
                        <p className="text-[0.88rem] text-[#7A6E5F] leading-relaxed"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <motion.div
                      className="hidden sm:flex absolute left-1/2 top-5 -translate-x-1/2 w-6 h-6 rounded-full
                        border-2 border-[#E8541A] bg-[#F7F2E8] items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={tlInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <span className="w-[8px] h-[8px] rounded-full bg-[#E8541A]" />
                    </motion.div>

                    {/* Spacer */}
                    <div className="hidden sm:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}