import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Landmark, Shield, Users, Star, TrendingUp, Award, Building, Crown, ChevronDown } from "lucide-react";

const milestones = [
  {
    year: "1987",
    role: "BJP Karyakarta",
    org: "Bharatiya Janata Party",
    tag: "Grassroots",
    desc: "Joined BJP as a full-time karyakarta and RSS swayamsevak. Rapidly rose through ranks owing to his organisational acumen and grassroots connect.",
    color: "#E8541A",
    icon: Users,
    index: "01",
  },
  {
    year: "1995",
    role: "Minister of State",
    org: "Gujarat State Government",
    tag: "State Politics",
    desc: "Appointed Minister of State for Home, Finance & Prohibition under CM Keshubhai Patel. Demonstrated sharp administrative command at an early age.",
    color: "#C9A84C",
    icon: Building,
    index: "02",
  },
  {
    year: "2002",
    role: "Home Minister — Gujarat",
    org: "Gujarat State Government",
    tag: "Administration",
    desc: "Served as Home & Transport Minister in Narendra Modi's cabinet, gaining a reputation for decisive law enforcement and internal security management.",
    color: "#138808",
    icon: Shield,
    index: "03",
  },
  {
    year: "2014",
    role: "BJP National President",
    org: "Bharatiya Janata Party",
    tag: "Party Leadership",
    desc: "Elected President of BJP — one of the world's largest political parties. Masterminded the party's unprecedented expansion across India's states.",
    color: "#E8541A",
    icon: Crown,
    index: "04",
  },
  {
    year: "2019",
    role: "Union Home Minister",
    org: "Government of India",
    tag: "National Office",
    desc: "Sworn in as India's Home Minister. Spearheaded landmark legislation including CAA, abrogation of Article 370, and strengthening of UAPA.",
    color: "#C9A84C",
    icon: Landmark,
    index: "05",
  },
  {
    year: "2024",
    role: "Home & Co-operation Minister",
    org: "Government of India",
    tag: "Re-appointment",
    desc: "Re-appointed as Union Home Minister with additional charge of Co-operation Ministry, continuing to drive national security and federal governance.",
    color: "#138808",
    icon: Award,
    index: "06",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] } },
});

function AccordionItem({ item, index, inView }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="group border-b border-[#EDE5D0] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 py-6 text-left focus:outline-none"
      >
        {/* Index number */}
        <span
          className="shrink-0 text-[0.62rem] font-black tracking-[0.18em] text-[#0D1B3E]/20 w-6"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          {item.index}
        </span>

        {/* Year pill */}
        <span
          className="shrink-0 text-[0.62rem] font-black tracking-[0.18em] uppercase px-3 py-[4px] border"
          style={{
            fontFamily: "Raleway, sans-serif",
            color: item.color,
            borderColor: item.color + "50",
            background: item.color + "0d",
          }}
        >
          {item.year}
        </span>

        {/* Role */}
        <span
          className="flex-1 text-[1.05rem] md:text-[1.2rem] font-black text-[#0D1B3E] group-hover:text-[#E8541A] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.role}
        </span>

        {/* Org — hide on mobile */}
        <span
          className="hidden md:block shrink-0 text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#0D1B3E]/35 mr-4"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          {item.org}
        </span>

        {/* Icon box */}
        <div
          className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#EDE5D0] group-hover:border-[#E8541A]/30 transition-colors duration-200"
          style={{ color: item.color }}
        >
          <Icon size={15} strokeWidth={1.6} />
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-1"
        >
          <ChevronDown size={16} className="text-[#0D1B3E]/30" />
        </motion.div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="pl-[4.5rem] pr-6 pb-6 flex gap-4 items-start"
            >
              {/* Color accent bar */}
              <div
                className="shrink-0 w-[3px] self-stretch rounded"
                style={{ background: item.color }}
              />
              <div>
                <span
                  className="text-[0.58rem] font-black tracking-[0.22em] uppercase block mb-2"
                  style={{ fontFamily: "Raleway, sans-serif", color: item.color }}
                >
                  {item.tag}
                </span>
                <p
                  className="text-[0.97rem] text-[#3D3526]/70 leading-[1.85] italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PoliticalCareer() {
  const headerRef = useRef(null);
  const statsRef  = useRef(null);
  const listRef   = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const statsInView  = useInView(statsRef,  { once: true, margin: "-80px" });
  const listInView   = useInView(listRef,   { once: true, margin: "-80px" });

  return (
    <section id="political-career" className="relative bg-[#F7F2E8] overflow-hidden py-20 md:py-28">

      {/* Subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #0D1B3E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Watermark */}
      <div
        className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[13rem] font-black
          text-[#0D1B3E]/[0.03] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        CAREER
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── TWO-COL HEADER + INTRO ── */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16 md:mb-20 items-end">

          {/* Left: heading */}
          <div>
            <motion.div
              variants={fadeUp(0)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
              <span
                className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Public Service
              </span>
              <span className="w-7 h-[2px] bg-[#138808] rounded" />
            </motion.div>

            <motion.h2
              variants={fadeUp(0.08)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] font-black text-[#0D1B3E] leading-[0.92]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Political <br />
              <em className="text-[#E8541A] not-italic italic">Career</em>
            </motion.h2>
          </div>

          {/* Right: intro paragraph + tricolor rule */}
          <div>
            <motion.div
              variants={fadeUp(0.14)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="flex gap-[3px] mb-5 h-[3px] w-24"
            >
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#FDFAF5] border-t border-b border-[#EDE5D0]" />
              <div className="flex-1 bg-[#138808]" />
            </motion.div>

            <motion.p
              variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "show" : "hidden"}
              className="text-[1.05rem] text-[#3D3526]/65 leading-[1.9] italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              From a grassroots karyakarta to one of India's most powerful ministers — a journey of
              over three decades defined by strategy, conviction, and an unrelenting drive to serve.
              Each role a stepping stone; each decision, a chapter of history.
            </motion.p>
          </div>
        </div>

        {/* ── ACCORDION TIMELINE ── */}
        <div ref={listRef}>
          <motion.div
            variants={fadeUp(0)} initial="hidden" animate={listInView ? "show" : "hidden"}
            className="flex items-center gap-4 mb-2"
          >
            <span
              className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-[#0D1B3E]/35"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Click to expand each role
            </span>
            <div className="flex-1 h-[1px] bg-[#EDE5D0]" />
          </motion.div>

          <div className="border border-[#EDE5D0] bg-[#FDFAF5] px-4 md:px-8">
            {milestones.map((item, i) => (
              <AccordionItem key={i} item={item} index={i} inView={listInView} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM RULE ── */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={listInView ? "show" : "hidden"}
          className="mt-14 flex items-center gap-4"
        >
          <div className="flex-1 h-[1px] bg-[#0D1B3E]/10" />
          <span
            className="text-[0.55rem] font-black tracking-[0.3em] uppercase text-[#0D1B3E]/25"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Political Journey — Section II
          </span>
          <div className="flex-1 h-[1px] bg-[#0D1B3E]/10" />
        </motion.div>

      </div>
    </section>
  );
}