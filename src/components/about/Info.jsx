import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const details = [
  { label: "Full Name",    value: "Amit Anil Chandra Shah" },
  { label: "Date of Birth",value: "22 October 1964" },
  { label: "Place of Birth",value: "Mumbai, Maharashtra" },
  { label: "Hometown",     value: "Mansa, Gujarat" },
  { label: "Education",    value: "B.Sc. Biochemistry, Gujarat University" },
  { label: "Spouse",       value: "Sonal Shah" },
  { label: "Children",     value: "Jay Shah (Son)" },
  { label: "Languages",    value: "Hindi, Gujarati, English" },
  { label: "Religion",     value: "Hindu" },
  { label: "Constituency", value: "Gandhinagar, Gujarat" },
];

const timeline = [
  { year: "1964", title: "Born in Mumbai", desc: "Born to Gujarati parents in Mumbai. Raised with deep-rooted values of discipline and patriotism." },
  { year: "1980", title: "Student Activism", desc: "Joined ABVP and became an active student leader, building his foundation in public service." },
  { year: "1982", title: "Started Family", desc: "Married Sonal Shah and began a family life that remained the moral compass of his public journey." },
  { year: "1987", title: "Joined BJP", desc: "Became a full-time BJP worker and RSS swayamsevak, rising through the grassroots of Indian politics." },
  { year: "1995", title: "First Cabinet Role", desc: "Became Minister of State for Home, Finance & Prohibition in the Gujarat state government." },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22,1,0.36,1] } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -36 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22,1,0.36,1] } },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 36 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22,1,0.36,1] } },
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

        {/* ── BIO BLOCK ── */}
        <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">

          {/* Image col */}
          <motion.div
            variants={fadeLeft(0)} initial="hidden" animate={bioInView ? "show" : "hidden"}
            className="relative"
          >
            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-14 h-14 border-t-[2px] border-r-[2px] border-[#C9A84C] z-10 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-[2px] border-l-[2px] border-[#E8541A] z-10 pointer-events-none" />

            {/* Tricolor bar */}
            <div className="absolute -left-5 top-[10%] bottom-[10%] w-[5px] rounded z-10"
              style={{ background: "linear-gradient(to bottom,#FF9933 0%,#FF9933 33.33%,#FDFAF5 33.33%,#FDFAF5 66.66%,#138808 66.66%,#138808 100%)" }} />

            {/* Shadow block */}
            <div className="absolute -bottom-4 -right-4 left-4 top-4 bg-[#0D1B3E] rounded-sm z-0" />

            <motion.div
              className="relative z-[1] overflow-hidden rounded-sm group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=80"
                alt="Amit Shah"
                className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ height: 500, filter: "saturate(0.9)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B3E]/70 to-transparent" />

              {/* Floating year badge */}
              <motion.div
                className="absolute top-5 left-5 bg-[#E8541A] text-[#FDFAF5] px-4 py-2"
                initial={{ x: -30, opacity: 0 }}
                animate={bioInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22,1,0.36,1] }}
              >
                <span className="text-[0.6rem] font-black tracking-[0.2em] uppercase"
                  style={{ fontFamily: "Raleway, sans-serif" }}>Since 1980</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text col */}
          <motion.div
            variants={fadeRight(0.1)} initial="hidden" animate={bioInView ? "show" : "hidden"}
          >
            <SectionHeader label="Who He Is" title="Personal" accent="Story" />

            <motion.div variants={fadeUp(0.18)} initial="hidden" animate={bioInView ? "show" : "hidden"}
              className="flex items-center gap-3 my-5">
              <div className="w-12 h-[2px] bg-[#E8541A] rounded" />
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <div className="w-16 h-[1px] bg-[#EDE5D0] rounded" />
            </motion.div>

            <motion.div variants={fadeUp(0.22)} initial="hidden" animate={bioInView ? "show" : "hidden"}
              className="border-l-[3px] border-[#C9A84C] pl-5 py-1 mb-6 bg-[#C9A84C]/[0.07]">
              <p className="text-[1.1rem] text-[#162547] leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "Born in the city of dreams, shaped by the land of Sardar Patel — Amit Shah's story is that of every dedicated son of the soil."
              </p>
            </motion.div>

            {[
              "Amit Shah was born on October 22, 1964, in Mumbai, Maharashtra, to a Gujarati family rooted in the Vaishnava tradition. His early education in Ahmedabad instilled in him strong values of discipline, nationalism, and seva.",
              "He completed his graduation in Biochemistry from Gujarat University. Though he began his career in his family's PVC pipe business, the call of public service proved irresistible. He channelled his entrepreneurial mindset into building the BJP's electoral machinery into one of the most formidable political organizations in the world.",
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp(0.26 + i * 0.08)}
                initial="hidden"
                animate={bioInView ? "show" : "hidden"}
                className={`text-[1.02rem] text-[#3D3526] leading-[1.85] ${i < 1 ? "mb-4" : ""}`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {para}
              </motion.p>
            ))}
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

                    {/* Spacer for other side */}
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