import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const archives = [
  {
    id: 1,
    month: "March 2024",
    title: "National Security Update — Q1 2024",
    topics: ["CAA Rules", "Border Security", "NE Peace Accord"],
    readers: "1.2L",
  },
  {
    id: 2,
    month: "February 2024",
    title: "Development Focus — Aspirational Districts",
    topics: ["Infra Progress", "Health Metrics", "Education Stats"],
    readers: "98K",
  },
  {
    id: 3,
    month: "January 2024",
    title: "Year in Review — 2023 Highlights",
    topics: ["Key Bills", "J&K Update", "G20 Outcomes"],
    readers: "2.1L",
  },
  {
    id: 4,
    month: "December 2023",
    title: "Winter Session of Parliament — Briefing",
    topics: ["Bills Passed", "Key Debates", "Policy Updates"],
    readers: "87K",
  },
  {
    id: 5,
    month: "November 2023",
    title: "Election Results & Governance Roadmap",
    topics: ["State Results", "Future Plans", "BJP Agenda"],
    readers: "1.5L",
  },
  {
    id: 6,
    month: "October 2023",
    title: "Internal Security — Half-Year Report",
    topics: ["Anti-Terror Ops", "Cyber Security", "LWE Update"],
    readers: "74K",
  },
];

const preferences = [
  "Security & Defence",
  "Legislation Updates",
  "Development Projects",
  "Party News",
  "International Affairs",
  "Speeches & Addresses",
];

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const formRef = useRef(null);
  const archiveRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const archiveInView = useInView(archiveRef, { once: true, margin: "-80px" });

  const togglePref = (p) =>
    setSelected((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-[#F5F5F5]/50 border text-[#333333] placeholder-[#999999] px-4 py-3 text-[0.88rem] outline-none transition-all duration-200 rounded-[2px]";
  const inp = (f) =>
    `${inputBase} ${focused === f ? "border-[#FC8814] shadow-[0_0_0_3px_rgba(252,136,20,0.12)]" : "border-[#E8E7E6]/10 hover:border-[#E8E7E6]/25"}`;

  return (
    <section
      id="newsletter"
      className="relative bg-[#FFFFFF] overflow-hidden py-20 md:py-28"
    >
      {/* Blob */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle,#FC8814,transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle,#E8E7E6,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        {/* ── SIGNUP BLOCK ── */}
        <div
          ref={formRef}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-20 md:mb-28 items-center"
        >
          {/* Left copy */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={formInView ? "show" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-[2px] bg-[#FC8814] rounded" />
              <span
                className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#FC8814]"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Stay Informed
              </span>
            </div>
            <h2
              className="text-[2.2rem] md:text-[3rem] font-black text-[#333333] leading-[1.1] mb-4"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              Subscribe to the{" "}
              <em className="text-[#FC8814] not-italic italic">Newsletter</em>
            </h2>
            <p
              className="text-[1rem] text-[#666666] leading-[1.8] mb-8 italic max-w-md"
              style={{ fontFamily: "'Cormorant Garamond',serif" }}
            >
              Receive curated updates on governance, security, policy
              developments, and official speeches directly in your inbox — no
              spam, ever.
            </p>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap">
              {[
                { num: "2L+", label: "Subscribers" },
                { num: "Monthly", label: "Frequency" },
                { num: "100%", label: "Official Source" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-[1.8rem] font-black text-[#FC8814] leading-none"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-[#999999] mt-1"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            animate={formInView ? "show" : "hidden"}
            className="relative"
          >
            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-[2px] border-r-[2px] border-[#FC8814] pointer-events-none z-10" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-[2px] border-l-[2px] border-[#FC8814] pointer-events-none z-10" />

            <div className="bg-[#F5F5F5] p-7 md:p-9">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#4CAF50]/20 border border-[#4CAF50]/40 flex items-center justify-center"
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                  <h4
                    className="text-[1.2rem] font-black text-[#333333]"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    You're Subscribed!
                  </h4>
                  <p
                    className="text-[0.82rem] text-[#999999] max-w-xs"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Welcome aboard. Your first newsletter will arrive next
                    month. Thank you for your interest.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3
                    className="text-[1.2rem] font-black text-[#333333]"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    Join 2 Lakh+ Readers
                  </h3>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-[6px]">
                      <label
                        className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#BBBBBB]"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        className={inp("name")}
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label
                        className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#BBBBBB]"
                        style={{ fontFamily: "Raleway,sans-serif" }}
                      >
                        Email Address <span className="text-[#FC8814]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        className={inp("email")}
                        style={{ fontFamily: "Raleway,sans-serif" }}
                        required
                      />
                    </div>
                  </div>

                  {/* Preferences */}
                  <div>
                    <p
                      className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#BBBBBB] mb-3"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      Topics of Interest
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {preferences.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => togglePref(p)}
                          className={`text-[0.62rem] font-bold tracking-[0.1em] uppercase px-3 py-[6px] rounded-sm
                            transition-all duration-200
                            ${
                              selected.includes(p)
                                ? "bg-[#FC8814] text-[#FFFFFF]"
                                : "border border-[#E8E7E6]/10 text-[#999999] hover:border-[#E8E7E6]/25 hover:text-[#666666]"
                            }`}
                          style={{ fontFamily: "Raleway,sans-serif" }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#FC8814] hover:bg-[#E8741F]
                      text-[#FFFFFF] text-[0.78rem] font-black tracking-[0.18em] uppercase py-4
                      transition-colors duration-200"
                    style={{
                      fontFamily: "Raleway,sans-serif",
                      clipPath:
                        "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Subscribe Now
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.button>

                  <p
                    className="text-[0.62rem] text-[#DDDDDD] text-center"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    No spam. Unsubscribe anytime. Your data is safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* ── ARCHIVE ── */}
        <div ref={archiveRef}>
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={archiveInView ? "show" : "hidden"}
            className="flex items-end justify-between mb-8 gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-[2px] bg-[#FC8814] rounded" />
                <span
                  className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#FC8814]"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  Past Issues
                </span>
              </div>
              <h3
                className="text-[1.8rem] md:text-[2.2rem] font-black text-[#333333]"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                Newsletter{" "}
                <em className="text-[#FC8814] not-italic italic">Archive</em>
              </h3>
            </div>
            <a
              href="#"
              className="text-[0.7rem] font-black tracking-[0.14em] uppercase text-[#FC8814]
              flex items-center gap-2 no-underline flex-shrink-0 hover:gap-3 transition-all duration-200 group"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              View All
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {archives.map((a, i) => (
              <motion.div
                key={a.id}
                variants={fadeUp(i * 0.08)}
                initial="hidden"
                animate={archiveInView ? "show" : "hidden"}
                className="group flex flex-col gap-3 bg-[#FFFFFF] border border-[#E8E7E6] p-6
                  hover:border-[#FC8814]/35 hover:shadow-[0_8px_24px_rgba(252,136,20,0.08)]
                  transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -3 }}
              >
                {/* Left orange bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FC8814]" />

                <div className="flex items-center justify-between">
                  <span
                    className="text-[0.62rem] font-black tracking-[0.18em] uppercase text-[#FC8814]"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {a.month}
                  </span>
                  <span
                    className="text-[0.58rem] text-[#999999]"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    👥 {a.readers}
                  </span>
                </div>

                <h4
                  className="text-[0.98rem] font-black text-[#333333] leading-snug group-hover:text-[#FC8814] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  {a.title}
                </h4>

                <div className="flex flex-wrap gap-1">
                  {a.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[0.55rem] font-bold tracking-[0.1em] uppercase
                      bg-[#333333]/[0.06] text-[#666666] px-2 py-[3px] rounded-sm"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#E8E7E6] mt-auto">
                  <button
                    className="text-[0.68rem] font-black tracking-[0.12em] uppercase text-[#666666]
                    flex items-center gap-1 hover:text-[#FC8814] hover:gap-2 transition-all duration-200"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Read Issue
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    className="ml-auto text-[0.65rem] text-[#999999] flex items-center gap-1
                    hover:text-[#FC8814] transition-colors duration-200"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tricolor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg,#FC8814,#FFFFFF 50%,#E8E7E6)",
        }}
      />
    </section>
  );
}
