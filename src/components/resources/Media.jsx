import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const kitTabs = ["Photos", "Logos & Branding", "Infographics"];

const photos = [
  { id:1, label:"Official Portrait 2024",   size:"8.4 MB", res:"4K", thumb:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80" },
  { id:2, label:"Parliament Session",        size:"6.1 MB", res:"HD", thumb:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80" },
  { id:3, label:"Public Rally — Ahmedabad", size:"5.8 MB", res:"4K", thumb:"https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&q=80" },
  { id:4, label:"State Visit — Gujarat",    size:"7.2 MB", res:"HD", thumb:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80" },
  { id:5, label:"Press Conference",         size:"4.9 MB", res:"HD", thumb:"https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80" },
  { id:6, label:"International Summit",     size:"6.3 MB", res:"4K", thumb:"https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80" },
];

const logos = [
  { id:1, label:"Official Logo — Color",        format:"SVG / PNG", size:"420 KB", bg:"bg-[#FDFAF5]",   preview:"🪷" },
  { id:2, label:"Official Logo — White",        format:"SVG / PNG", size:"380 KB", bg:"bg-[#0D1B3E]",   preview:"🪷" },
  { id:3, label:"Official Logo — Dark",         format:"SVG / PNG", size:"410 KB", bg:"bg-[#F7F2E8]",   preview:"🪷" },
  { id:4, label:"BJP Symbol — Official",        format:"SVG / PNG", size:"520 KB", bg:"bg-[#FDFAF5]",   preview:"🏵" },
  { id:5, label:"Signature Facsimile",          format:"PNG",       size:"210 KB", bg:"bg-[#F7F2E8]",   preview:"✍️" },
  { id:6, label:"Brand Colour Palette",         format:"PDF / ASE", size:"180 KB", bg:"bg-white",       preview:"🎨" },
];

const infographics = [
  { id:1, label:"35 Years of Public Service",   size:"3.2 MB", format:"PDF / PNG", thumb:"https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80" },
  { id:2, label:"Key Legislative Achievements", size:"2.8 MB", format:"PDF",       thumb:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { id:3, label:"J&K Post-370 Development Map", size:"4.1 MB", format:"PDF / PNG", thumb:"https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80" },
  { id:4, label:"Aspirational Districts Impact", size:"3.6 MB", format:"PDF",      thumb:"https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&q=80" },
];

const fadeUp = (d=0) => ({
  hidden:{ opacity:0, y:28 },
  show:{ opacity:1, y:0, transition:{ duration:0.6, delay:d, ease:[0.22,1,0.36,1] } },
});

function DownloadBtn({ small = false }) {
  return (
    <motion.button
      className={`flex items-center justify-center gap-1 bg-[#E8541A] text-[#FDFAF5]
        font-black tracking-[0.14em] uppercase transition-colors duration-200 hover:bg-[#F4712E]
        ${small ? "text-[0.6rem] px-3 py-[6px]" : "text-[0.7rem] px-4 py-[9px]"}`}
      style={{ fontFamily:"Raleway,sans-serif" }}
      whileTap={{ scale:0.93 }}
      aria-label="Download"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      {!small && "Download"}
    </motion.button>
  );
}

export default function MediaKit() {
  const [tab, setTab] = useState("Photos");
  const ref = useInView(useRef(null), { once:true, margin:"-80px" });
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once:true, margin:"-80px" });

  return (
    <section id="media-kit" className="relative bg-[#0D1B3E] overflow-hidden py-20 md:py-28">

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage:"radial-gradient(circle,#FDFAF5 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.07]"
        style={{ background:"radial-gradient(circle,#C9A84C,transparent 70%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
              <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]"
                style={{ fontFamily:"Raleway,sans-serif" }}>Brand Assets</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-black text-[#FDFAF5] leading-[1.1]"
              style={{ fontFamily:"'Playfair Display',serif" }}>
              Media <em className="text-[#E8541A] not-italic italic">Kit</em>
            </h2>
          </div>
          <p className="text-[0.82rem] text-[#FDFAF5]/35 max-w-xs text-right hidden sm:block"
            style={{ fontFamily:"Raleway,sans-serif" }}>
            For media professionals & press. Please credit "amitshah.in" when using these assets.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5, delay:0.1 }}
          className="flex gap-0 border border-[#FDFAF5]/[0.08] mb-10 overflow-x-auto">
          {kitTabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 min-w-max text-[0.72rem] font-black tracking-[0.14em] uppercase px-5 py-4
                transition-all duration-200 border-b-2
                ${tab===t
                  ? "bg-[#162547] text-[#FDFAF5] border-[#E8541A]"
                  : "text-[#FDFAF5]/35 border-transparent hover:text-[#FDFAF5]/65 hover:bg-[#162547]/40"}`}
              style={{ fontFamily:"Raleway,sans-serif" }}>{t}
            </button>
          ))}
        </motion.div>

        {/* ── PHOTOS ── */}
        {tab === "Photos" && (
          <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <motion.div key={p.id}
                variants={fadeUp(i * 0.07)} initial="hidden" animate={inView ? "show" : "hidden"}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                style={{ aspectRatio:"4/3" }}
                whileHover={{ scale:1.01 }}
              >
                <img src={p.thumb} alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                  style={{ background:"linear-gradient(to top,rgba(8,15,34,0.85) 0%,transparent 55%)" }} />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[0.78rem] font-black text-[#FDFAF5] mb-1"
                    style={{ fontFamily:"'Playfair Display',serif" }}>{p.label}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="text-[0.58rem] text-[#FDFAF5]/50" style={{ fontFamily:"Raleway,sans-serif" }}>{p.res}</span>
                      <span className="text-[0.58rem] text-[#FDFAF5]/35" style={{ fontFamily:"Raleway,sans-serif" }}>{p.size}</span>
                    </div>
                    <DownloadBtn small />
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[0.55rem] font-black tracking-[0.15em] uppercase bg-[#C9A84C] text-[#0D1B3E] px-2 py-1"
                    style={{ fontFamily:"Raleway,sans-serif" }}>{p.res}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── LOGOS ── */}
        {tab === "Logos & Branding" && (
          <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {logos.map((l, i) => (
              <motion.div key={l.id}
                variants={fadeUp(i * 0.07)} initial="hidden" animate={inView ? "show" : "hidden"}
                className="group border border-[#FDFAF5]/[0.08] bg-[#162547]/50 overflow-hidden
                  hover:border-[#E8541A]/35 transition-all duration-300"
                whileHover={{ y:-3 }}
              >
                <div className={`flex items-center justify-center h-36 ${l.bg}`}>
                  <span className="text-5xl">{l.preview}</span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-[0.88rem] font-black text-[#FDFAF5]" style={{ fontFamily:"'Playfair Display',serif" }}>{l.label}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[0.58rem] text-[#FDFAF5]/35" style={{ fontFamily:"Raleway,sans-serif" }}>{l.format}</span>
                      <span className="text-[0.58rem] text-[#FDFAF5]/25" style={{ fontFamily:"Raleway,sans-serif" }}>{l.size}</span>
                    </div>
                  </div>
                  <DownloadBtn />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── INFOGRAPHICS ── */}
        {tab === "Infographics" && (
          <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {infographics.map((inf, i) => (
              <motion.div key={inf.id}
                variants={fadeUp(i * 0.08)} initial="hidden" animate={inView ? "show" : "hidden"}
                className="group flex gap-4 border border-[#FDFAF5]/[0.08] bg-[#162547]/50 overflow-hidden
                  hover:border-[#E8541A]/35 transition-all duration-300"
                whileHover={{ y:-3 }}
              >
                <div className="relative w-36 flex-shrink-0 overflow-hidden">
                  <img src={inf.thumb} alt={inf.label}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
                </div>
                <div className="flex flex-col justify-center gap-2 py-5 pr-5">
                  <p className="text-[0.95rem] font-black text-[#FDFAF5] leading-snug"
                    style={{ fontFamily:"'Playfair Display',serif" }}>{inf.label}</p>
                  <div className="flex gap-3">
                    <span className="text-[0.6rem] text-[#FDFAF5]/35" style={{ fontFamily:"Raleway,sans-serif" }}>{inf.format}</span>
                    <span className="text-[0.6rem] text-[#FDFAF5]/25" style={{ fontFamily:"Raleway,sans-serif" }}>{inf.size}</span>
                  </div>
                  <DownloadBtn />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Usage note */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ delay:0.5 }}
          className="mt-10 border border-[#C9A84C]/20 bg-[#C9A84C]/[0.05] p-5 flex items-start gap-4">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="text-[0.8rem] text-[#FDFAF5]/45 leading-relaxed" style={{ fontFamily:"Raleway,sans-serif" }}>
            <strong className="text-[#C9A84C] font-bold">Usage Guidelines:</strong> All assets are for editorial and media use only. Commercial use, modification, or misrepresentation is strictly prohibited. Please credit "Official Website of Amit Shah — amitshah.in" when publishing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}