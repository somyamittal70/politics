import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, ArrowRight, X } from "lucide-react";

const featured = {
  title: "Vijay Sankalp Rally",
  location: "Ahmedabad, Gujarat",
  date: "March 2024",
  attendees: "5 Lakh+",
  desc: "A watershed moment in Gujarat politics — Amit Shah addressed a sea of supporters, outlining BJP's vision for Viksit Bharat and reaffirming the party's commitment to development, security, and national pride.",
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  tag: "Flagship Rally",
  color: "#fc8814",
};

const events = [
  {
    title: "Booth Karyakarta Sammelan",
    location: "New Delhi",
    date: "Jan 2024",
    attendees: "1.2 Lakh",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    tag: "Party Event",
    color: "#fc8814",
  },
  {
    title: "National Security Conclave",
    location: "Mumbai, Maharashtra",
    date: "Nov 2023",
    attendees: "800+",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    tag: "Conclave",
    color: "#fc8814",
  },
  {
    title: "Jan Sampark Abhiyan",
    location: "Lucknow, Uttar Pradesh",
    date: "Sep 2023",
    attendees: "3 Lakh+",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Outreach",
    color: "#138808",
  },
  {
    title: "Yuva Shakti Mahasabha",
    location: "Bhopal, Madhya Pradesh",
    date: "Jul 2023",
    attendees: "2 Lakh+",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
    tag: "Youth Rally",
    color: "#fc8814",
  },
  {
    title: "Kisan Samman Rally",
    location: "Jaipur, Rajasthan",
    date: "Apr 2023",
    attendees: "4 Lakh+",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&q=80",
    tag: "Farmer Outreach",
    color: "#138808",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay, ease: "easeOut" } },
});

function EventCard({ event, index, inView }) {
  return (
    <motion.div
      variants={fadeUp(index * 0.1)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="group relative overflow-hidden bg-white border border-[#e8e7e6]
        hover:border-[#fc8814]/30 hover:shadow-[0_10px_32px_rgba(252,136,20,0.1)]
        transition-all duration-400"
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          style={{ filter: "saturate(0.85)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[0.55rem] font-black tracking-[0.2em] uppercase text-white px-2 py-[3px]"
            style={{
              fontFamily: "Raleway, sans-serif",
              background: event.color,
            }}
          >
            {event.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Left color bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
          style={{ background: event.color }}
        />

        <h4
          className="text-[1rem] font-black text-[#1a1a1a] leading-snug mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {event.title}
        </h4>

        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-[#fc8814] shrink-0" strokeWidth={2} />
            <span
              className="text-[0.72rem] text-[#3a3a3a]/60"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {event.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={11} className="text-[#fc8814] shrink-0" strokeWidth={2} />
            <span
              className="text-[0.72rem] text-[#3a3a3a]/60"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {event.date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={11} className="text-[#fc8814] shrink-0" strokeWidth={2} />
            <span
              className="text-[0.72rem] font-semibold text-[#1a1a1a]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {event.attendees} Attendees
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RalliesEvents() {
  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      id="rallies-events"
      className="relative bg-[#f5f5f5] overflow-hidden py-20 md:py-28"
    >
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Watermark */}
      <div
        className="pointer-events-none select-none absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[13rem] font-black
          text-[#1a1a1a]/[0.03] whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        EVENTS
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── HEADER ── */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14 md:mb-16"
        >
          <div>
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate={headerInView ? "show" : "hidden"}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-7 h-[2px] bg-[#fc8814] rounded" />
              <span
                className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#fc8814]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                On the Ground
              </span>
              <span className="w-7 h-[2px] bg-[#138808] rounded" />
            </motion.div>
            <motion.h2
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={headerInView ? "show" : "hidden"}
              className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.2rem] font-black text-[#1a1a1a] leading-[0.93]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rallies &<br />
              <em className="text-[#fc8814] not-italic italic">Public Events</em>
            </motion.h2>
          </div>
          <div>
            <motion.div
              variants={fadeUp(0.14)}
              initial="hidden"
              animate={headerInView ? "show" : "hidden"}
              className="flex gap-[3px] mb-4 h-[3px] w-24"
            >
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#e8e7e6] border-t border-b border-[#e8e7e6]" />
              <div className="flex-1 bg-[#138808]" />
            </motion.div>
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={headerInView ? "show" : "hidden"}
              className="text-[1.05rem] text-[#3a3a3a]/60 leading-[1.9] italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Amit Shah has addressed millions across India — from sprawling
              maidan rallies to intimate booth-level sammelans. Each event a
              testament to his connect with the people of Bharat.
            </motion.p>
          </div>
        </div>

        {/* ── FEATURED EVENT ── */}
        <div ref={featuredRef} className="mb-12 md:mb-16">
          <motion.div
            variants={fadeIn(0)}
            initial="hidden"
            animate={featuredInView ? "show" : "hidden"}
            className="relative overflow-hidden group"
          >
            {/* Shadow offset */}
            <div className="absolute -bottom-3 -right-3 left-3 top-3 bg-[#fc8814]/15 z-0" />

            <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "clamp(280px, 45vw, 480px)" }}
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ filter: "saturate(0.85)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent lg:hidden" />

                {/* Tag */}
                <div className="absolute top-5 left-5">
                  <span
                    className="text-[0.58rem] font-black tracking-[0.22em] uppercase text-white px-3 py-[5px] bg-[#fc8814]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {featured.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <motion.div
                variants={fadeUp(0.18)}
                initial="hidden"
                animate={featuredInView ? "show" : "hidden"}
                className="bg-white border border-[#e8e7e6] border-l-0 p-8 md:p-10 flex flex-col justify-center gap-5"
              >
                <div className="flex gap-[3px] h-[3px] w-16">
                  <div className="flex-1 bg-[#FF9933]" />
                  <div className="flex-1 bg-[#e8e7e6] border-t border-b border-[#e8e7e6]" />
                  <div className="flex-1 bg-[#138808]" />
                </div>

                <h3
                  className="text-[1.8rem] md:text-[2.2rem] font-black text-[#1a1a1a] leading-[1.05]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {featured.title}
                </h3>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { icon: MapPin, val: featured.location },
                    { icon: Calendar, val: featured.date },
                    { icon: Users, val: featured.attendees + " Attendees" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <m.icon size={13} className="text-[#fc8814]" strokeWidth={2} />
                      <span
                        className="text-[0.8rem] text-[#3a3a3a]/65"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="text-[0.97rem] text-[#3a3a3a]/65 leading-[1.85] italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {featured.desc}
                </p>

                <div className="flex items-center gap-2 mt-1 group/btn w-fit cursor-pointer">
                  <span
                    className="text-[0.65rem] font-black tracking-[0.2em] uppercase text-[#fc8814]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    View All Events
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-[#fc8814] transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── EVENTS GRID ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {events.map((event, i) => (
            <EventCard key={i} event={event} index={i} inView={gridInView} />
          ))}
        </div>
      </div>
    </section>
  );
}